import React, { FC } from "react";

import { HiOutlineSearch, HiOutlineLocationMarker } from "react-icons/hi";
import { Input } from "../ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

interface FormSearchJobProps {}

const FormSearchJob: FC<FormSearchJobProps> = ({}) => {
	return (
		<>
			<div className="mt-6 p-4 bg-white shadow-sm inline-flex items-center gap-4 relative w-max z-10">
				<div className="inline-flex gap-3 items-center">
					<HiOutlineSearch className="w-6 h-6" />
					<Input
						className="py-8 w-[300px] border-none"
						placeholder="Job title or keyword"
					/>
				</div>
				<div className="inline-flex gap-3 items-center">
					<HiOutlineLocationMarker className="w-6 h-6" />

					<Select>
						<SelectTrigger className="py-8 w-[300px] border-none  text-gray-600 outline-none">
							<SelectValue placeholder="Select a location" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="Indonesia">Indonesia</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<Button className="py-8 px-10 text-lg">
						Search my job
					</Button>
				</div>
			</div>
			<div>
				<div className="text-gray-600 mt-3">
					Popular : UI Designer, UX Researcher, Android, Admin
				</div>
			</div>
		</>
	);
};

export default FormSearchJob;
