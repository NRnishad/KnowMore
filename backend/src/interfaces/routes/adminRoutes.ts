import { Router } from "express";
import { createUserController, deleteUserController, getAllUsersController, getEditUserController, postEditUserController, toggleStatusController } from "../controllers/admin/userManagement/adminController";
import { authorizeRole, isAdminAuthenticated } from "../middlewares/authMiddleware";
import { adminLoginHandler, adminLogoutHandler, refreshAdminTokenHandler } from "../controllers/authController";



const adminRouter = Router();

adminRouter.post('/refresh-token', refreshAdminTokenHandler)
adminRouter.post ('/login', adminLoginHandler)
adminRouter.post('/logout', adminLogoutHandler)




adminRouter.use(isAdminAuthenticated, authorizeRole(['admin']))
    .get('/users', getAllUsersController)
    .patch('/users/:id/status',toggleStatusController)
    .post('/users/create',createUserController)
    .route('/users/edit/:id')
    .get(getEditUserController)
    .post(postEditUserController)
//dashboard

export default adminRouter