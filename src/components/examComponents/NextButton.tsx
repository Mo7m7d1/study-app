"use client";

import { Button } from "@material-tailwind/react";
import { NextButtonProps } from "./examTypes";

const NextButton = ({ isLastQuestion, disabled, onClick }: NextButtonProps) => {
	return (
		<div className="flex justify-start mt-6">
			<Button
				color="yellow"
				size="md"
				onClick={onClick}
				disabled={disabled}
				className="mr-2"
			>
				{isLastQuestion ? "انهي الاختبار" : "السؤال التالي"}
			</Button>
		</div>
	);
};

export default NextButton;
