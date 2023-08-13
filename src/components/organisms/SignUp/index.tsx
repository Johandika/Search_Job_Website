"use client";

import Link from "next/link";
import React, { FC, useState } from "react";
import { z } from "zod";

import { LIST_FORM_FIELD_SIGN_UP } from "@/constants/form";
import AuthContainer from "@/containers/AuthContainer";
import { formSignUpSchema } from "@/lib/formSchema";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface SignUpProps {}

const SignUp: FC<SignUpProps> = ({}) => {
	const router = useRouter();
	const { toast } = useToast();

	const [isLoading, setLoading] = useState<boolean>(false);

	const onSubmit = async (values: z.infer<typeof formSignUpSchema>) => {
		try {
			setLoading(true);

			await fetch("/api/user", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});

			await router.push("/auth/signin");
		} catch (error) {
			console.log(error);

			setLoading(false);
			toast({
				title: "Error",
				description: "Please try again",
			});
		}
	};

	return (
		<>
			<AuthContainer
				formSchema={formSignUpSchema}
				listForm={LIST_FORM_FIELD_SIGN_UP}
				title="Get more opportunities"
				submitAction={onSubmit}
				buttonText="Sign Up"
				isSubmit={isLoading}
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
