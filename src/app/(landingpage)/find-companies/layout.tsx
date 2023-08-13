"use client";

import SWRProvider from "@/providers/SWRProvider";
import React, { FC } from "react";

interface layoutFindCompaniesProps {
	children: React.ReactNode;
}

const layoutFindJobs: FC<layoutFindCompaniesProps> = ({ children }) => {
	return <SWRProvider>{children}</SWRProvider>;
};

export default layoutFindJobs;
