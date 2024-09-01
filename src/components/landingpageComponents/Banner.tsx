import { FaWhatsapp } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

export default function Banner() {
	return (
		<div className="h-[766px] w-screen overflow-hidden phone:h-max phone:mb-10">
			<div
				className="flex items-center justify-center px-20 
                    bg-bg_banner w-screen h-[766px] max-h-[766px] 
                    bg-cover bg-no-repeat phone:bg-bg_phone
                    phone:h-[566px] transition-all ease-in-out duration-700 
                    hover:scale-[105%] hover:sticky hover:z-0"
			>
				<div
					className="flex flex-col max-w-[1440px] w-[1230px] 
                      phone:items-center phone:w-[375px] "
				>
					<h1
						className="text-GrennAtomic text-[3.5rem] font-[600] 
                      w-[650px] leading-[4.2rem] 
                      phone:text-[1.75rem] phone:w-[250px]
                      phone:leading-[2rem] tablet:text-[3rem] tablet:w-[600px]"
					>
						A ferramente que lhe permite fazer a Química!
					</h1>
					<p
						className="flex text-white text-[0.9rem] w-[504.925px] 
                      leading-[1.2rem] mt-4 phone:w-[220px] phone:text-center"
					>
						UMA FERRAMENTA QUE TORNA O USUÁRIO MAIS SIMPLES NO CIENTISTA MAIS
						APLICADO.
					</p>
					<div className="flex items-center w-[440px] mt-10 phone:flex-col phone:gap-4 ">
						<button
							className="flex justify-center items-center text-white text-sm bg-RoxoAtomic 
                              w-[171px] h-[37px] px-[24px] py-[10px] 
                              rounded-[0.375rem] transition-all ease-in-out 
                              duration-700 hover:opacity-80"
						>
							Criar conta gratuita
						</button>
						<div className="hidden phone:flex justify-between items-center text-white">
							<FaRegUserCircle />
							<p className="pl-4 text-sm">Já sou assinante</p>
						</div>
						<div
							className="flex justify-center items-center ml-[40px] w-[171px] h-[37px] 
                          px-[10px] py-[10px] rounded-[0.375rem] phone:px-0 phone:py-2 phone:ml-0  
                          transition-all ease-in-out duration-100 border-GrennAtomic cursor-pointer
                          hover:shadow-[0px_0px_0px_1px_#C1FF72]"
						>
							<FaWhatsapp className="text-white font-semibold text-xl" />
							<p className="text-white pl-4 text-sm">Entrar em contato</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
