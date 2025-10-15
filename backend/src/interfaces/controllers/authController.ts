import { NextFunction, Request, Response } from "express";
import { RegisterUserUseCase } from "../../application/use-cases/user/registerUser";
import { verifyOtpCode } from "../../application/use-cases/user/verifyOtp";
import { sendOtp } from "../../application/use-cases/user/sendOtp";
import { CustomError } from "../middlewares/errorMiddleWare";
import { GetUserDataUseCase } from "../../application/use-cases/user/getUserData";
import { UserRepositoryImpl } from "../../infrastructure/repositories/userRepositoryImpl";


const userRepository = new UserRepositoryImpl();

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;
    const registerUserUseCase = new RegisterUserUseCase(userRepository);
    const registeredUser = await registerUserUseCase.execute({
      firstName,
      lastName,
      email,
      password,
      phone,
    });
    const { password: removedPassword, ...rest } = registeredUser.toObject();
    //send otp
    const sentOTP = await sendOtp(registeredUser.email);
    res.status(201).json({ success: true, user: rest });
  } catch (error: any) {
    next(error);
  }
};

export const sendOtpHandler = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    //sent otp
    const sentOTP = await sendOtp(email);
    console.log("sentOtp controller", sentOTP);
    res.status(200).json(sentOTP);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
    console.error(error.message);
  }
};

export const verifyOtpHandler = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;;
    const response = await verifyOtpCode(email, otp);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
    console.error(error);
  }
};

export const getUserDataController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      throw new CustomError("User id not found", 400);
    }
    const getUserDataUseCase = new GetUserDataUseCase(userRepository);
    const response = await getUserDataUseCase.execute(userId);
    res
      .status(200)
      .json({
        success: true,
        user: response,
        message: "User data sent to front end",
      });
  } catch (error: any) {
    next(error);
  }
};

