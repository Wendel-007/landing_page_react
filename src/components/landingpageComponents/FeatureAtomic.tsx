import React from "react";
import { IoMdCheckmark } from "react-icons/io";

interface FeatureCadAlgilProps {
	title: string;
}

const FeatureCadAlgil: React.FC<FeatureCadAlgilProps> = ({ title }) => {
	return (
		<div className="flex items-center">
			<IoMdCheckmark className="text-GrennAtomic text-xl"/>
			<p className="ml-4 font-semibold text-white">{title}</p>
		</div>
	);
};

export default FeatureCadAlgil;
