"use client";

import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const TopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);
	return (
		<div
			onClick={scrollToTop}
			className={`fixed flex justify-center items-center 
                                            w-[39px] h-[39px] rounded-[100%]
											bg-GrennAtomic
                                            bottom-[24px] right-4 ${
																							isVisible ? "flex" : "hidden"
																						}
                                            phone:absolute phone:bottom-[13rem] tablet: cursor-pointer
                                            tablet:absolute tablet:bottom-3 tablet:right-16`}
		>
			<IoIosArrowUp className="text-RoxoAtomic text-lg" />
		</div>
	);
};

export default TopButton;
