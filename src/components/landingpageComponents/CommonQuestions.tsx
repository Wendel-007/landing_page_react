"use client";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineRemove } from "react-icons/md";
import { useState } from "react";

export default function CommonQuestions() {
	const [openItem, setOpenItem] = useState<string | null>(null);

	const handleValueChange = (value: string | null) => {
		setOpenItem(value);
	};

	return (
		<div
			id="ctt"
			className="flex w-[958px] w-max-[958px] h-[523px] self-center items-center justify-between
                    phone:flex-col phone:h-min phone:mt-14 tablet:mt-14 tablet:flex-col tablet:h-min mb-32
					tablet:mb-[14rem] phone:mb-[20rem]"
		>
			<div>
				<h1 className="text-GrennAtomic text-base font-semibold mb-4 phone:text-center tablet:text-center">
					PERGUNTAS FREQUENTES
				</h1>
				<h1
					className="text-[2.5rem] w-[340px] text-RoxoAtomic font-semibold leading-[3.125rem] mb-8 phone:text-center
                            tablet:text-center"
				>
					Ficou com <br />
					alguma dúvida?
				</h1>
				<div
					className="flex items-center gap-4 mb-8 text-CinzaTextoFIbra text-sm phone:justify-center
                            phone:hidden tablet:hidden tablet:justify-center"
				>
					<MdOutlineEmail className="text-2xl text-GrennAtomic" />
					<p className="text-GrennAtomic font-semibold">Envie um e-mail</p>
				</div>
				<p
					className="text-GrennAtomic font-semiboldtext-sm phone:text-center phone:hidden
                          tablet:text-center tablet:hidden"
				>
					Acompanhe nas redes
				</p>
				<div
					className="flex mt-8 gap-10 phone:justify-center phone:mb-8
                            phone:hidden tablet:justify-center tablet:mb-8 
                            tablet:hidden"
				>
					<FaInstagram className="text-2xl text-GrennAtomic" />
					<FaLinkedin className="text-2xl text-GrennAtomic" />
					<FaYoutube className="text-2xl text-GrennAtomic" />
				</div>
			</div>
			<div className="flex flex-col gap-11 phone:max-w-[375px] phone:p-10 phone:gap-5">
				<Accordion type="single" collapsible onValueChange={handleValueChange}>
					<AccordionItem
						id="AccordionItem"
						value="item-1"
						className="border-none"
					>
						<AccordionTrigger className="decoration-transparent flex text-white justify-start gap-4 items-center text-2xl font-semibold phone:text-sm phone:gap-3">
							{openItem === "item-1" ? (
								<MdOutlineRemove className="text-GrennAtomic text-2xl font-bold phone:text-sm " />
							) : (
								<AiOutlinePlus className="text-GrennAtomic text-2xl font-bold phone:text-sm " />
							)}
							<h1>Todas as funcionalidades são grátis? </h1>
						</AccordionTrigger>
						<AccordionContent className="text-white max-w-[350px] pl-8">
							Sim! Todas as funcionalidades são 100% gratuitas e foram criadas
							para ajudar você a melhorar seu fluxo de trabalho, apenas plugins
							e acesso a mais de uma máquina saõ pagos.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						id="AccordionItem"
						value="item-2"
						className="border-none"
					>
						<AccordionTrigger className="decoration-transparent flex text-white justify-start gap-4 items-center text-2xl font-semibold phone:text-sm phone:gap-3">
							{openItem === "item-2" ? (
								<MdOutlineRemove className="text-GrennAtomic text-2xl font-bold phone:text-sm " />
							) : (
								<AiOutlinePlus className="text-GrennAtomic text-2xl font-bold phone:text-sm " />
							)}
							<h1>Por que devo ter o Atomic?</h1>
						</AccordionTrigger>
						<AccordionContent className="text-white max-w-[350px] pl-8">
							O Atomic oferece recursos exclusivos que otimizam seu trabalho,
							aumentando sua produtividade e economizando tempo.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						id="AccordionItem"
						value="item-3"
						className="border-none"
					>
						<AccordionTrigger className="decoration-transparent flex text-white justify-start gap-4 items-center text-2xl font-semibold phone:text-sm phone:gap-3">
							{openItem === "item-3" ? (
								<MdOutlineRemove className="text-GrennAtomic text-2xl font-bold phone:text-sm " />
							) : (
								<AiOutlinePlus className="text-GrennAtomic text-2xl font-bold phone:text-sm " />
							)}
							<h1>Posso cancelar minha assinatura?</h1>
						</AccordionTrigger>
						<AccordionContent className="text-white max-w-[350px] pl-8">
							Sim, você pode cancelar sua assinatura a qualquer momento
							diretamente pelo painel de controle da plataforma.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						id="AccordionItem"
						value="item-4"
						className="border-none"
					>
						<AccordionTrigger className="decoration-transparent flex text-white justify-start gap-4 items-center text-2xl font-semibold phone:text-sm phone:gap-3">
							{openItem === "item-4" ? (
								<MdOutlineRemove className="text-GrennAtomic text-2xl font-bold phone:text-sm " />
							) : (
								<AiOutlinePlus className="text-GrennAtomic text-2xl font-bold phone:text-sm " />
							)}
							<h1 className="w-max">
								Consigo comprar apenas algumas funções?{" "}
							</h1>
						</AccordionTrigger>
						<AccordionContent className="text-white max-w-[350px] pl-8">
							Não, as funções estão disponíveis apenas como parte dos planos
							Plus e superiores, garantindo o melhor custo-benefício.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						id="AccordionItem"
						value="item-5"
						className="border-none"
					>
						<AccordionTrigger className="decoration-transparent flex text-white justify-start gap-4 items-center text-2xl font-semibold phone:text-sm phone:gap-3">
							{openItem === "item-5" ? (
								<MdOutlineRemove className="text-GrennAtomic text-2xl font-bold phone:text-sm " />
							) : (
								<AiOutlinePlus className="text-GrennAtomic text-2xl font-bold phone:text-sm " />
							)}
							<h1>Quero dar algumas ideias, como faço?</h1>
						</AccordionTrigger>
						<AccordionContent className="text-white max-w-[350px] pl-8">
							Adoraríamos ouvir suas ideias! Você pode enviá-las pelo nosso
							email ou através da página de ajuda na plataforma do cliente.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
			<div className="hidden phone:block tablet:block mt-14">
				<div
					className="flex items-center gap-4 mb-8 text-CinzaTextoFIbra text-sm phone:justify-center
                            tablet:justify-center"
				>
					<MdOutlineEmail className="text-2xl text-GrennAtomic" />
					<p className="text-GrennAtomic font-semibold">Envie um e-mail</p>
				</div>
				<p
					className="text-GrennAtomic font-semibold text-sm phone:text-center
                          tablet:text-center"
				>
					Acompanhe nas redes
				</p>
				<div
					className="flex mt-8 gap-10 phone:justify-center phone:mb-8
                            tablet:justify-center tablet:mb-8 "
				>
					<FaInstagram className="text-2xl text-GrennAtomic" />
					<FaLinkedin className="text-2xl text-GrennAtomic" />
					<FaYoutube className="text-2xl text-GrennAtomic" />
				</div>
			</div>
		</div>
	);
}
