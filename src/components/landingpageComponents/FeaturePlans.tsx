import React from "react";
import { IoCheckmark } from "react-icons/io5";

interface FeaturePlansProps {
	title: string;
	color: string
}

const FeaturePlans: React.FC<FeaturePlansProps> = ({ title,color }) => {
	return (
		<div className="flex items-center">
			<IoCheckmark className="text-Aqua text-2xl" />
			<p className={`ml-2 text-sm text-${color}`}>{title}</p>
		</div>
	);
};

export default FeaturePlans;
