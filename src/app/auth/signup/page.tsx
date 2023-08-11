import React from "react";
import { Metadata } from "next";
import SignUp from "@/components/organisms/SignUp";

export const metadata: Metadata = {
	title: "Job Hunt | Sign Up",
};

export default function SignUpPage() {
	return <SignUp />;
}
