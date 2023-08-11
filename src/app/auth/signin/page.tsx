import SignIn from "@/components/organisms/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Job Hunt | Sign In",
};

export default function SignInPage() {
	return <SignIn />;
}
