import React, { ReactNode } from "react";

interface AtributeCadAlgilProps {
	icon: ReactNode;
	title: string;
}

const AtributeCadAlgil: React.FC<AtributeCadAlgilProps> = ({ icon, title }) => {
	return (
		<div
			className="flex flex-col justify-between w-[124px] h-[88px] rounded-[12px] bg-GrennAtomic p-[15px]
                        phone:w-[110px] transition-all ease-in-out duration-700 hover:bg-RoxoAtomic"
		>
			<div>
				{icon}
			</div>
			<p className="text-sm text-BlackRoxo pt-3 font-semibold">{title}</p>
		</div>
	);
};

export default AtributeCadAlgil;
