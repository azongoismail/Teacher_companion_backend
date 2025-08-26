import { supabase } from "../server.js";
export const getAllFiles =  async (req, res) =>{
const { data, error } = await supabase
    .from("file_metadata")
    .select("*")

    // .order("uploaded_at", { ascending: false });

  if (error) return res.status(400).json({ error });
  res.json({data});
}


export const file = async (req, res) => {
  const fileId = req.params.id;
  const user = req.user;

  // 1. Fetch file metadata
  const { data: file, error } = await supabase
    .from("file_metadata")
    .select("*")
    .eq("id", fileId)
    .single();

  if (error || !file) {
    return res.status(404).json({ error: "File not found" });
  }

  // 2. Get user subscription type
  const subscription = user.user_metadata?.subscription || "free";

  // 3. Authorization rules
  if (file.is_premium && subscription !== "premium") {
    return res.status(403).json({ error: "Upgrade to premium to access this file" });
  }

  // 4. ✅ Authorized: Return file info / signed URL
  return res.json({ file });
};