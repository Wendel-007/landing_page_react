import CardCTA from "./CardCTA";
import Separator from "../../assets/separator.svg";

export default function CTA() {
	return (
		<div
			id="CTA"
			className="relative flex flex-col self-center w-[80%] max-w-[1232px] my-20 phone:w-[375px] phone:mb-0
                    tablet:w-screen tablet:mb-0 transition-all ease-in-out duration-300 hover:scale-[101%]"
		>
			<p className="text-white text-base mb-6 font-semibold phone:self-center tablet:self-center">
				VEJA COMO É FÁCIL
			</p>
			<div
				className="flex gap-4 phone:flex-col phone:justify-center phone:items-center
                            tablet:flex-col tablet:justify-center tablet:items-center"
			>
				<CardCTA
					number="01"
					title="CADASTRE-SE GRÁTIS"
					desc="Simples e rápido, mais rápido que contar os elétrons de um Hidrogênio!"
					color="GrennAtomic"
				/>
				<img src={Separator} alt="separator" className="w-[20%]" />
				<CardCTA
					number="02"
					title="LOGIN"
					desc="Com o seu cadastro feito, você pode acessar a área do cliente e conhecer o potencial da Atomic!"
					color="GrennAtomic"
				/>
				<img src={Separator} alt="separator" className="w-[20%]" />
				<CardCTA
					number="03"
					title="PRONTO!"
					desc="Agora é só escolher o plano que melhor se encaixa com você!"
					color="GrennAtomic"
				/>
			</div>
		</div>
	);
}
