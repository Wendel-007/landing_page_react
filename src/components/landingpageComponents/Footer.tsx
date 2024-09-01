import LogoAtomic from "../../assets/logo_Atomic.png";

export default function Footer() {
	return (
		<div
			className="absolute flex self-center justify-center items-center w-[1216px] h-min bottom-0 text-sm text-RoxoAtomic
                    box-border border-t-2 border-GrennAtomic phone:w-[80%] phone:justify-center
                    tablet:h-[200px] tablet:w-[80%] tablet:justify-center tablet:bottom-0 phone:h-[200px]"
		>
			<div
				className="flex flex-wrap items-center justify-between w-[80%] h-min 
                        py-6 self-center phone:h-full phone:max-w-[375px]
                        phone:justify-center phone:py-0 tablet:flex-col tablet:h-full tablet:max-w-[375px]
                        tablet:justify-center tablet:pt-3 tablet:pb-0 phone:flex-col phone:mt-4"
			>
				<div
					className="flex flex-1 items-center max-w-[476px] max-h-[30px] gap-4 phone:max-h-min
                            phone:flex-col phone:gap-1 tablet:max-h-min tablet:flex-col tablet:gap-1 tablet:flex-[2]"
				>
					<img
						src={LogoAtomic}
						width={100}
						alt="logo"
						className="max-w-[166.4px]"
					/>
					<p>© 2024 Atomic</p>
				</div>
				<p className="flex flex-1 justify-center items-center">Política de Privacidade</p>
				<div
					className="flex items-center justify-end flex-1 gap-4 phone:justify-center
                            tablet:justify-center phone:flex-[0.5] phone:pb-4"
				>
					<p>Desenvolvido por Wendel Alves</p>
				</div>
			</div>
		</div>
	);
}
