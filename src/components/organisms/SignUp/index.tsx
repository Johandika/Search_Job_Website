"use client";

import Link from "next/link";
import React, { FC } from "react";
import { z } from "zod";

import { LIST_FORM_FIELD_SIGN_UP } from "@/constants/form";
import AuthContainer from "@/containers/AuthContainer";
import { formSignUpSchema } from "@/lib/formSchema";

interface SignUpProps {}

const SignUp: FC<SignUpProps> = ({}) => {
	const onSubmit = (values: z.infer<typeof formSignUpSchema>) => {
		console.log(values);
	};

	return (
		<>
			<AuthContainer
				formSchema={formSignUpSchema}
				listForm={LIST_FORM_FIELD_SIGN_UP}
				title="Get more opportunities"
				submitAction={onSubmit}
				buttonText="Sign Up"
			/>

			<div className="text-gray-500 text-sm mt-6">
				Already have an account?{" "}
				<Link
					href="/auth/signin"
					className="text-blue-primary font-medium"
				>
					Sign In
				</Link>
			</div>

			<div className="text-gray-500 text-sm mt-6">
				By clicking `Continue`, you acknowledge that you have read and
				accept the{" "}
				<span className="text-blue-primary font-medium">
					Terms of Service
				</span>{" "}
				and{" "}
				<span className="text-blue-primary font-medium">
					Privacy Policy
				</span>
				.
			</div>
		</>
	);
};

export default SignUp;
