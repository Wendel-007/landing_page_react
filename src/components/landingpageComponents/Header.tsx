import { useEffect, useState } from "react";
import Logo from "../../assets/logo_Atomic.png";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header() {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);

		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div
			className="absolute flex justify-center items-center 
                    w-screen max-h-[96px] h-[96px] bg-BlackRoxo 
                    z-10"
		>
			<div
				className="flex justify-between items-center max-w-[1230px] 
                        max-h-[64px] w-[80%] phone:justify-center
                        phone:h-[96px] phone:max-h-[96px] tablet:w-[80%]"
			>
				<img
					src={Logo}
					alt="logo"
					className="scale-[70%] max-w-[166.4px] phone:h-[48px] phone:scale-[130%]"
				/>
				<div
					className={`flex justify-between items-center text-GrennAtomic text-sm w-[516px] max-w-[476px] 
                            font-semibold max-h-[30px] h-[30px] box-border
                            phone:hidden tablet:hidden ${
															windowWidth <= 1328 && "hidden"
														}`}
				>
					<a href="#Conheca">Conheça</a>
					<a href="#CTA">Como Funciona</a>
					<a href="#plans">Planos</a>
					<a href="#ctt">Contato</a>
				</div>
				<p
					className={`text-GrennAtomic text-3xl font-light phone:hidden tablet:hidden ${
						windowWidth <= 1328 && "hidden"
					}`}
				>
					|
				</p>
				<div className="flex items-center justify-between phone:hidden">
					<div className="flex justify-between items-center text-GrennAtomic font-semibold">
						<FaRegUserCircle className="text-xl" />
						<a href="/login">
							<p className="pl-4 pr-10 text-sm">Já sou assinante</p>
						</a>
					</div>
					<a href="/register">
						<button
							className="flex justify-center items-center text-white text-sm font-semibold bg-RoxoAtomic w-[175px] h-[37px] 
                                      px-[24px] py-[10px] rounded-[0.375rem]"
						>
							Criar conta gratuita
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
