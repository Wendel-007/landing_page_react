import React from "react";

interface CardCTAProps {
	number: string;
	title: string;
	desc: string;
	color: string;
}

const CardCTA: React.FC<CardCTAProps> = ({ number, title, desc, color }) => {
	return (
		<div
			className={`flex items-center flex-col aspect-square h-[230px] bg-${color}
                        rounded-[100%] pt-8 tablet:scale-[110%] tablet:mb-12
						phone:scale-[90%]`}
		>
			<div
				className="flex items-center justify-center text-RoxoAtomic w-[39.2px] 
                            h-[39.2px] text-3xl mb-2 font-bold"
			>
				<p>{number}</p>
			</div>
			<h1 className="font-semibold mb-2 text-[1rem] text-center text-RoxoAtomic">
				{title}
			</h1>
			<p className="text-BlackRoxo text-sm text-center w-[80%]">{desc}</p>
		</div>
	);
};

export default CardCTA;
