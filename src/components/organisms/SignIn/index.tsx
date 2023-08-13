"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { signIn } from "next-auth/react";

import AuthContainer from "@/containers/AuthContainer";
import { formSignInSchema } from "@/lib/formSchema";
import { LIST_FORM_FIELD_SIGN_IN } from "@/constants/form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface SignInProps {}

const SignIn: FC<SignInProps> = ({}) => {
	const { toast } = useToast();
	const router = useRouter();
	const [isLoading, setLoading] = useState<boolean>(false);

	const onSubmit = async (values: z.infer<typeof formSignInSchema>) => {
		setLoading(true);
		const authenticated = await signIn("credentials", {
			...values,
			redirect: false,
		});
		setLoading(false);

		if (authenticated?.error) {
			toast({
				title: "Error",
				description: "Email or password maybe wrong",
			});
			return;
		}

		await router.push("/");
	};

	return (
		<>
			<AuthContainer
				formSchema={formSignInSchema}
				listForm={LIST_FORM_FIELD_SIGN_IN}
				title="Welcome Back, Dude"
				submitAction={onSubmit}
				buttonText="Sign In"
				isSubmit={isLoading}
			/>

			<div className="text-gray-500 text-sm mt-6">
				Don’t have an account?{" "}
				<Link
					href="/auth/signup"
					className="text-blue-primary font-medium"
				>
					Sign Up
				</Link>
			</div>
		</>
	);
};

export default SignIn;
