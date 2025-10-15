import { Request, Response, Router } from "express";
import { signUp , sendOtpHandler, verifyOtpHandler,  } from "../controllers/authController";

const router = Router();
router.post('/signup', signUp);
router.post('/send-otp', sendOtpHandler)
router.post('/verify-otp', verifyOtpHandler)
export default router;