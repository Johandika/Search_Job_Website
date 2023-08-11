import Image from "next/image";
import React, { FC } from "react";

interface ClientsProps {}

const clients = [
	"/images/jobox.png",
	"/images/dsign.png",
	"/images/wave.png",
	"/images/twins.png",
	"/images/bubles.png",
];

const Clients: FC<ClientsProps> = ({}) => {
	return (
		<div className="px-32 mt-12 relative z-10">
			<div className="text-lg text-gray-500">
				Companies we helped grow
			</div>
			<div className="mt-8 flex flex-row justify-between">
				{clients.map((item: string, i: number) => (
					<Image
						src={item}
						alt={item}
						width={139}
						height={35}
						key={i}
					/>
				))}
			</div>
		</div>
	);
};

export default Clients;
