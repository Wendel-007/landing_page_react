import { ReactNode } from "react";

const CardsPlans = ({
	bg,
	children,
	popularity,
}: {
	children: ReactNode;
	bg: string;
	popularity: string;
}) => {
	return (
		<div className="flex">
			<div
				className={`relative flex flex-col w-[255px] h-[530px] bg-${bg} rounded-sm p-4
                        transition-all ease-in-out duration-100 hover:shadow-[0px_6px_3px_0px_#00000024]`}
			>
				<div
					className={`absolute flex justify-center items-center w-[95px] h-[25px] text-[0.625rem] 
                          font-semibold bg-RoxoAtomic bg-opacity-30 text-RoxoAtomic rounded-sm right-3 top-5 ${popularity}`}
				>
					MAIS POPULAR
				</div>
				<div className="flex flex-col gap-2 min-w-[233px]">{children}</div>
				<button
					className="absolute flex justify-center items-center self-center text-white 
                            text-sm bg-BlackRoxo bg-opacity-60 w-[171px] h-[37px] px-[24px] py-[10px] 
                            rounded-[0.375rem] bottom-4 transition-all ease-in-out 
                            duration-700 hover:bg-opacity-100"
				>
					Escolher Plano
				</button>
			</div>
		</div>
	);
};

export default CardsPlans;
