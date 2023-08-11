import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!!,
	process.env.NEXT_PUBLIC_SUPABSE_PUBLIC_KEY!!
);

export const supabaseGetPublicURL = async (
	filename: string,
	bucket: string
) => {
	const {
		data: { publicUrl },
	} = await supabaseClient.storage
		.from(bucket)
		.getPublicUrl(`public/${filename}`);

	return publicUrl;
};
