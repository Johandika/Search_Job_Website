"use client";

import React, { FC } from "react";
import Link from "next/link";
import { z } from "zod";

import AuthContainer from "@/containers/AuthContainer";
import { formSignInSchema } from "@/lib/formSchema";
import { LIST_FORM_FIELD_SIGN_IN } from "@/constants/form";

interface SignInProps {}

const SignIn: FC<SignInProps> = ({}) => {
	const onSubmit = (values: z.infer<typeof formSignInSchema>) => {
		console.log(values);
	};

	return (
		<>
			<AuthContainer
				formSchema={formSignInSchema}
				listForm={LIST_FORM_FIELD_SIGN_IN}
				title="Welcome Back, Dude"
				submitAction={onSubmit}
				buttonText="Sign In"
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
