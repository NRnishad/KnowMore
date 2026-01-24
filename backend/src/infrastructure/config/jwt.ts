import { config } from "./config";

// Interface for token options
interface ITokenOptions {
    expires: Date;
    maxAge: number;
    httpOnly: boolean;
    sameSite: 'lax' | 'strict' | 'none' | undefined;
    secure?: boolean;
}

// Ensure these are numbers. 
// Note: If your config says '5' (minutes), check if you want 5 minutes or 5 hours.
// currently your math: 5 * 60 * 60 * 1000 = 5 Hours.
const accessTokenExpire = parseInt(config.jwt.ACCESS_TOKEN_EXPIRE || '5', 10);
const refreshTokenExpire = parseInt(config.jwt.REFRESH_TOKEN_EXPIRE || '1', 10);

// === THE FIX ===
// We explicitly set these to allow Vercel -> AWS communication
const productionMode = config.app.ENVIRONMENT === 'production'; 

export const accessTokenOptions: ITokenOptions = {
    expires: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000),
    maxAge: accessTokenExpire * 60 * 60 * 1000,
    httpOnly: true,
    // FORCE 'none' for now to fix the blocking issue
    sameSite: 'none', 
    // FORCE true because you are on HTTPS (AWS)
    secure: true      
};

export const refreshTokenOptions: ITokenOptions = {
    expires: new Date(Date.now() + refreshTokenExpire * 24 * 60 * 60 * 1000),
    maxAge: refreshTokenExpire * 24 * 60 * 60 * 1000,
    httpOnly: true,
    // FORCE 'none'
    sameSite: 'none', 
    // FORCE true
    secure: true      
};