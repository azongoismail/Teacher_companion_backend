import { supabase } from "../server";

export const requireAuth = async (req, res, next) =>{
    const auth = req.headers.authorization || "";
    const token = auth.startsWith("Bearer")? auth.slice(7) : null;
    if(!token) return res.status(401).json({error:"missing bearer token"});

    const {data:userData, error} = await supabase.auth.getUser(token);
    if(error || !userData?.user) return res.status(401).json({error: "invalid token"})
        req.user.userData.user;
    next();
}