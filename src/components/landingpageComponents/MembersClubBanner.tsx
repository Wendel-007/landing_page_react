import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import AtributeMembersClub from "./AtributeMembersClub";
import Cientist from "../../assets/cientista.png";

export default function MembersClubBanner() {
	return (
		<div
			className="relative flex justify-center w-screen h-[599px] bg-RoxoBlur mb-28 mt-10
                    self-center phone:h-[903px] phone:my-8 tablet:h-[903px] tablet:my-8"
		>
			<div
				className="relative flex max-w-[1232px] w-[80%] h-[599px] phone:w-[375px] phone:h-[903px] 
                        phone:flex-col tablet:w-[80%] tablet:h-[903px] tablet:flex-col"
			>
				<div
					className="absolute top-28 w-[520px] phone:top-4 phone:left-4
                            tablet:top-4 tabelt:left-4"
				>
					<p className="text-white mb-8 phone:w-[180px] tablet:w-[100%] tablet:text-[150%]">
						PARTICIPE DO NOSSO CLUBE DE MEMBROS
					</p>
					<h1
						className="text-[2.5rem] text-GrennAtomic font-semibold leading-[3.125rem] mb-8 phone:text-[2rem] 
                                  phone:leading-[2.2rem] phone:w-[290px] tablet:tablet:text-[250%] tablet:leading-[100%] 
                                  tablet:w-[70%]"
					>
						Temos um clube de membros com conteúdos mensais sobre química.
					</h1>
					<p
						className="text-white text-sm phone:w-[300px] phone:text-justify
                                  tablet:w-[300px] tablet:text-justify"
					>
						Mergulhe no universo da química e domine os assuntos com nosso
						Clube. A cada mês, você terá acesso a uma seleção de conteúdos.
					</p>
				</div>
				<div
					className="absolute flex items-center bottom-24 gap-20 phone:flex-wrap phone:bottom-7 phone:gap-5
                            phone:justify-center tablet:flex-wrap tablet:bottom-7 tablet:gap-5 tablet:justify-center
                            tablet:self-center"
				>
					<AtributeMembersClub
						icon={<BiMoviePlay className="text-GrennAtomic text-3xl" />}
						quant="+4"
						desc="Aulas mensais"
					/>
					<AtributeMembersClub
						icon={
							<MdOutlineNotificationsActive className="text-GrennAtomic text-3xl" />
						}
						quant="10"
						desc="Conteudos mensais"
					/>
					<AtributeMembersClub
						icon={<FaPeopleGroup className="text-GrennAtomic text-3xl" />}
						quant="1500"
						desc="Membros ativos na comunidade"
					/>
				</div>
				<img
					src={Cientist}
					alt="cientist-SVG"
					className="absolute scale-[60%] right-[-29%]  self-center
                                                            tablet:top-[62%] tablet:translate-y-[-50%]
															tablet:left-[50%] tablet:translate-x-[-50%]
                                                            tablet:scale-[70%] tablet:hover:scale-[72%] 
															phone:top-[58%] phone:translate-y-[-50%]
															phone:left-[50%] phone:translate-x-[-50%]
                                                            phone:scale-[90%] phone:hover:scale-[92%] 
                                                            transition-all ease-in-out duration-1000 
                                                            hover:scale-[62%]"
				/>
			</div>
		</div>
	);
}
