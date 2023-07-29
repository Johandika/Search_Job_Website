import React, { FC } from "react";

import { HiOutlineSearch, HiOutlineLocationMarker } from "react-icons/hi";
import { Input } from "./ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface FormSearchProps {}

const FormSearch: FC<FormSearchProps> = ({}) => {
	return (
		<div className="mx-auto w-max">
			<div className="p-4 bg-white shadow-sm flex justify-between items-center gap-4 relative w-max z-10 text-center">
				<div className="inline-flex gap-3 items-center">
					<HiOutlineSearch className="w-6 h-6" />
					<Input
						className="py-6 w-[350px] border-none"
						placeholder="Job title or keyword"
					/>
				</div>
				<Separator orientation="vertical" />
				<div className="inline-flex gap-3 items-center">
					<HiOutlineLocationMarker className="w-6 h-6" />

					<Select>
						<SelectTrigger className="py-6 w-[350px] border-none  text-gray-600 outline-none">
							<SelectValue placeholder="Select a location" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="Indonesia">Indonesia</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<Button className="">Search</Button>
				</div>
			</div>
			<div>
				<div className="text-gray-600 text-sm mt-3">
					Popular : UI Designer, UX Researcher, Android, Admin
				</div>
			</div>
		</div>
	);
};

export default FormSearch;
