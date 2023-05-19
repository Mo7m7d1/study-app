"use client";
import { useState } from "react";
import {
	Collapse,
	Card,
	CardBody,
	Typography,
	Button,
} from "@material-tailwind/react";
import { QuestionCardProps } from "@/app/types";

const QuestionCard = ({ question, answer }: QuestionCardProps) => {
	const [open, setOpen] = useState(false);

	const toggleCollapse = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	return (
		<div
			className="bg-theme shadow-lg rounded-lg p-7 mx-10 md:w-[70%]"
			dir="ltr"
		>
			<div className="flex justify-between items-center">
				<span className="text-sm font-medium">{question}</span>
				<Button
					variant="gradient"
					color="yellow"
					size="sm"
					className="text-xs"
					onClick={toggleCollapse}
				>
					الإجابة
				</Button>
			</div>
			<Collapse open={open}>
				<Card className="bg-theme text-white">
					<CardBody>
						<Typography className="text-yellow-100">{answer}</Typography>
					</CardBody>
				</Card>
			</Collapse>
		</div>
	);
};

export default QuestionCard;
