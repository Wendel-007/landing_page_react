import CardsPlans from "./CardPlans";
import FeaturePlans from "./FeaturePlans";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";

export default function Plans() {
	return (
		<div
			id="plans"
			className=" flex flex-col self-center max-w-[1232px] h-[583] mb-10 phone:max-w-[257px] phone:mb-8
                    tablet:max-w-[80%] tablet:mb-24 tablet:mt-10"
		>
			<p className="text-white phone:ml-0 tablet:ml-0 tablet:self-center lg:self-center mb-4">
				CONHEÇA NOSSOS PLANOS
			</p>
			<div className="flex justify-between mx-auto w-full lg:w-[80%]">
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full"
				>
					<CarouselContent>
						<CarouselItem className="tablet:basis-1/2 phone:basis-[100%] lg:basis-1/2 basis-1/4 flex justify-center">
							<CardsPlans bg="RoxoAtomic" popularity="hidden">
								<div className="flex flex-col justify-between h-[170px] mb-4">
									<div className="h-[140px]">
										<h1 className="text-GrennAtomic font-semibold text-[1.5rem]">
											Grátis
										</h1>
										<h3 className="text-sm text-white mt-1 font-semibold">
											Acesso a somente as ferramentas grátis para seus projetos.
										</h3>
									</div>
									<h1 className="text-GrennAtomic font-semibold">
										R${" "}
										<span className="text-GrennAtomic text-4xl font-bold">
											00
										</span>
										,00 / <span className="text-white">MÊS</span>
									</h1>
								</div>
								<FeaturePlans color="white" title="Conversor KML <> Excel" />
								<FeaturePlans color="white" title="Medidor de cabo" />
								<FeaturePlans color="white" title="Ordenador de pontos" />
								<FeaturePlans color="white" title="Nomeador de ruas" />
								<FeaturePlans color="white" title="Fluxograma FTTX" />
							</CardsPlans>
						</CarouselItem>
						<CarouselItem className="tablet:basis-1/2 phone:basis-[100%] lg:basis-1/2 basis-1/4 flex justify-center">
							<CardsPlans bg="RoxoAtomic" popularity="hidden">
								<div className="flex flex-col justify-between h-[170px] mb-4">
									<div className="h-[140px]">
										<h1 className="text-GrennAtomic font-semibold text-[1.5rem]">
											Básico
										</h1>
										<h3 className="text-sm text-white mt-1 font-semibold">
											Acesso a 15 plugins do CAD àgil e nosso clube de membros
										</h3>
									</div>
									<h1 className="text-GrennAtomic font-semibold">
										R${" "}
										<span className="text-GrennAtomic text-4xl font-bold">
											00
										</span>
										,00 / <span className="text-white">MÊS</span>
									</h1>
								</div>
								<FeaturePlans color="white" title="Conversor KML <> Excel" />
								<FeaturePlans color="white" title="Medidor de cabo" />
								<FeaturePlans color="white" title="Ordenador de pontos" />
								<FeaturePlans color="white" title="Nomeador de ruas" />
								<FeaturePlans color="white" title="Fluxograma FTTX" />
								<FeaturePlans color="white" title="Cad ágil" />
								<FeaturePlans color="white" title="Clube de membros" />
							</CardsPlans>
						</CarouselItem>
						<CarouselItem className="tablet:basis-1/2 phone:basis-[100%] lg:basis-1/2 basis-1/4 flex justify-center">
							<CardsPlans bg="GrennAtomic" popularity="flex">
								<div className="flex flex-col justify-between h-[170px] mb-4">
									<div className="h-[140px]">
										<h1 className="text-RoxoAtomic font-semibold text-[1.5rem]">
											Plus
										</h1>
										<h3 className="text-sm text-BlackRoxo mt-1 font-semibold">
											Acesso a todos 19 plugins do CAD àgil e nosso clube de
											membros
										</h3>
									</div>
									<h1 className="text-RoxoAtomic font-semibold">
										R${" "}
										<span className="text-RoxoAtomic text-4xl font-bold">
											00
										</span>
										,00 / <span className="text-BlackRoxo">MÊS</span>
									</h1>
								</div>
								<FeaturePlans
									color="BlackRoxo"
									title="Conversor KML <> Excel"
								/>
								<FeaturePlans color="BlackRoxo" title="Medidor de cabo" />
								<FeaturePlans color="BlackRoxo" title="Ordenador de pontos" />
								<FeaturePlans color="BlackRoxo" title="Nomeador de ruas" />
								<FeaturePlans color="BlackRoxo" title="Fluxograma FTTX" />
								<FeaturePlans color="BlackRoxo" title="Cad ágil" />
								<FeaturePlans color="BlackRoxo" title="Clube de membros" />
							</CardsPlans>
						</CarouselItem>
						<CarouselItem className="tablet:basis-1/2 phone:basis-[100%] lg:basis-1/2 basis-1/4 flex justify-center">
							<CardsPlans bg="RoxoAtomic" popularity="hidden">
								<div className="flex flex-col justify-between h-[170px] mb-4">
									<div className="h-[140px]">
										<h1 className="text-GrennAtomic font-semibold text-[1.5rem]">
											Enterprise
										</h1>
										<h3 className="text-sm text-white mt-1 font-semibold">
											Acesso a todos os 19 plugins do CAD àgil em 5 máquinas
											simultâneas
										</h3>
									</div>
									<h1 className="text-GrennAtomic font-semibold">
										R${" "}
										<span className="text-GrennAtomic text-4xl font-bold">
											00
										</span>
										,00 / <span className="text-white">MÊS</span>
									</h1>
								</div>
								<FeaturePlans color="white" title="Conversor KML <> Excel" />
								<FeaturePlans color="white" title="Medidor de cabo" />
								<FeaturePlans color="white" title="Ordenador de pontos" />
								<FeaturePlans color="white" title="Nomeador de ruas" />
								<FeaturePlans color="white" title="Fluxograma FTTX" />
								<FeaturePlans color="white" title="Cad ágil" />
								<FeaturePlans color="white" title="Clube de membros" />
							</CardsPlans>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious className="bg-Aqua hover:bg-RoxoAtomic hover:text-white text-GrennAtomic hidden phone:flex tablet:flex lg:flex" />
					<CarouselNext className="bg-Aqua hover:bg-RoxoAtomic hover:text-white text-GrennAtomic hidden phone:flex tablet:flex lg:flex" />
				</Carousel>
			</div>
		</div>
	);
}
