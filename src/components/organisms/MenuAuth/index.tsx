import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import React, { FC } from "react";
import { BiLogOut } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

interface MenuAuthProps {}

const MenuAuth: FC<MenuAuthProps> = ({}) => {
	const { data: session } = useSession();

	const handleLogout = () => {
		signOut();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="inline-flex items-center gap-1">
					<div className="font-semibold text-blue-primary">
						Hai, {session?.user.name}
					</div>
					<IoMdArrowDropdown className="text-lg" />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem
					onClick={handleLogout}
					className="text-red-500 font-semibold"
				>
					<BiLogOut className="text-base mr-2" />
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default MenuAuth;
