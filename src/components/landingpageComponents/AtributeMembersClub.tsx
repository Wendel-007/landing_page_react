import React, { ReactNode } from "react";

interface AtributeMembersClubProps {
	icon: ReactNode;
	quant: string;
	desc: string;
}

const AtributeMembersClub: React.FC<AtributeMembersClubProps> = ({
	icon,
	quant,
	desc,
}) => {
	return (
		<div className="flex flex-col items-center">
			<div className="flex justify-center items-center mb-1">
				{icon}
				<h1 className="text-[2.5rem] font-bold ml-2 text-white">{quant}</h1>
			</div>
			<p className="text-sm text-GrennAtomic">{desc}</p>
		</div>
	);
};

export default AtributeMembersClub;
