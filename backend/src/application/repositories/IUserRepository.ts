import { IUser } from "../../domain/models/User";

export interface IUserRepository{
    findById(userId: string) : Promise<IUser | null>;
    findByIdWithPassword(userId: string): Promise<IUser | null>
    updatePassword(userId: string, newPassword: string):Promise<IUser | null>
    findEmailAlreadyExists (email: string, userid: string) : Promise<boolean> 
    update(user: Partial<IUser>):Promise<IUser | null>
    approveUserSignupVerification(email: string):Promise<boolean>
    deleteUser(userId: string):Promise<boolean>
    //login
    getUserByEmail(email: string): Promise<IUser | null>

    //signup 
    createUser(user:Partial<IUser>) : Promise<IUser>
    
    save(user:IUser) : Promise<IUser>
    
   
   }