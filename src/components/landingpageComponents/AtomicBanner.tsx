import Atomo from "../../assets/atomo.png";
import FeatureCadAlgil from "./FeatureAtomic";
import { MdOutlineSpeed } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import AtributeCadAlgil from "./AtributeAtomic";

export default function CadAgilBanner() {
	return (
		<div
			id="Conheca"
			className="flex self-center max-w-[1232px] w-[100%] items-center 
                    justify-center mt-[100px] phone:mt-0 phone:w-[375px]
                    phone:relative tablet:mt-[100px]"
		>
			<div
				className="relative flex w-screen h-[640px] 
                        bg-[linear-gradient(120deg,#AF00F6_-10.69%,#250034_100.42%)] 
                        rounded-[5px] mb-14 pl-10 phone:pl-2 phone:pt-2 phone:ml-4
                        phone:rounded-2xl phone:static"
			>
				<div className="absolute top-14 left-20 w-[520px] phone:w-[300px] phone:top-8 phone:left-8">
					<p className="text-white">CONHEÇA O ATOMIC</p>
					<h1 className="text-[2.5rem] font-semibold leading-[3.125rem] text-GrennAtomic">
						Uma ferramenta que simplifica e potencializa seus estudos.
					</h1>
				</div>
				<img
					className="absolute left-20 top-64 w-[400px] phone:left-8
							  phone:top-72 phone:w-[80%] transition-all 
                              ease-in-out duration-700 hover:translate-x-2 
                              hover:-translate-y-3 tablet:scale-[89%]"
					src={Atomo}
					alt="device-svg"
				/>
				<div
					className="absolute w-[50%] grid grid-cols-2 gap-x-8 gap-y-4 left-[35.5rem] top-[55px]
                            phone:hidden tablet:hidden lg:hidden"
				>
					<FeatureCadAlgil title="Banco de Dados Online" />
					<FeatureCadAlgil title="Simulações de Reações Químicas" />
					<FeatureCadAlgil title="Colaboração" />
					<FeatureCadAlgil title="Atualizações de Pesquisa" />
					<FeatureCadAlgil title="Tabela Periódica Interativa" />
					<FeatureCadAlgil title="Calculadora de Massa Molar" />
					<FeatureCadAlgil title="Laboratório Virtual" />
					<FeatureCadAlgil title="Quiz de Elementos Químicos" />
					<FeatureCadAlgil title="Gerenciamento de Experimentos" />
					<FeatureCadAlgil title="Fóruns de Discussão" />
					<FeatureCadAlgil title="Tutoriais de Laboratório" />
					<FeatureCadAlgil title="Ferramentas de Análise Espectral" />
					<FeatureCadAlgil title="Biblioteca de Estruturas Moleculares" />
					<FeatureCadAlgil title="Gerador de Relatórios de Experimentos" />
					<FeatureCadAlgil title="Mapa de Reações Químicas" />
					<FeatureCadAlgil title="Dicionário de Termos Químicos" />
					<FeatureCadAlgil title="Notificações Personalizadas" />
					<FeatureCadAlgil title="Ferramentas de Desenho Molecular" />
					<FeatureCadAlgil title="Recursos para Estudantes Iniciantes" />
				</div>
				<div
					className="absolute flex gap-10 top-[37rem] right-24 phone:top-[38rem]
                            phone:gap-1 phone:right-4 tablet:right-[5%] tablet:top-[95%]"
				>
					<AtributeCadAlgil
						icon={<MdOutlineSpeed className="text-BlackRoxo text-xl" />}
						title="+ Rapidez"
					/>
					<AtributeCadAlgil
						icon={<GiReceiveMoney className="text-BlackRoxo text-xl" />}
						title="+ Economia"
					/>
					<AtributeCadAlgil
						icon={<FaBed className="text-BlackRoxo text-xl" />}
						title="+ Conforto"
					/>
				</div>
			</div>
		</div>
	);
}
