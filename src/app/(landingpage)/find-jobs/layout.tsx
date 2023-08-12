"use client";

import SWRProvider from "@/providers/SWRProvider";
import React, { FC } from "react";

interface layoutFindJobsProps {
	children: React.ReactNode;
}

const layoutFindJobs: FC<layoutFindJobsProps> = ({ children }) => {
	return <SWRProvider>{children}</SWRProvider>;
};

export default layoutFindJobs;
