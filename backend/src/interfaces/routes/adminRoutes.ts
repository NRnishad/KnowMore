import { Router } from "express";

import { adminLoginHandler, adminLogoutHandler, refreshAdminTokenHandler } from "../controllers/authController";

const adminRouter = Router();

adminRouter.post('/refresh-token', refreshAdminTokenHandler)
adminRouter.post ('/login', adminLoginHandler)
adminRouter.post('/logout', adminLogoutHandler)


//dashboard

export default adminRouter