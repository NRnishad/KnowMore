import { NextFunction, Request, Response } from "express";
import { OrderRepository } from "../../../../infrastructure/repositories/orderRepository";
import { StripeService } from "../../../../infrastructure/stripe/StripeService";
import { CustomError } from "../../../middlewares/errorMiddleWare";

const orderRepository = new OrderRepository();
const stripeService = new StripeService();

export const verifyPaymentController = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { sessionId, orderId } = req.body;

        if (!sessionId || !orderId) {
            throw new CustomError("Session ID and Order ID are required", 400);
        }

        // Retrieve the Stripe session to confirm payment
        const session = await stripeService.retrieveSession(sessionId);

        if (session.payment_status !== "paid") {
            throw new CustomError("Payment not completed", 402);
        }

        // Update order to completed
        const updatedOrder = await orderRepository.updateOrder(orderId, {
            paymentStatus: "completed",
            transactionId: session.payment_intent as string,
            paymentDate: new Date(),
        });

        if (!updatedOrder) {
            throw new CustomError("Order not found", 404);
        }

        res.status(200).json({
            success: true,
            message: "Payment verified successfully",
            order: updatedOrder,
        });
    } catch (error) {
        console.error("verifyPaymentController error:", error);
        next(error);
    }
};
