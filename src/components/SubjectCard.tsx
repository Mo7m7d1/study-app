"use client";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { SubjectCardType } from "@/app/types";
import { useState } from "react";

const SubjectCard = ({ id, subject, link, btnText }: SubjectCardType) => {
	const [numberOfQuestions, setNumberOfQuestions] = useState<number>(10);
	return (
		<div className="bg-theme shadow-xl shadow-secondary text-white p-7 rounded-lg">
			<h2 className="text-lg font-semibold mb-6">{subject}</h2>
			<div className="flex justify-between items-center">
				<Link href={`${link}?numberOfQuestions=${numberOfQuestions}`}>
					<Button variant="gradient" color="yellow">
						{btnText?.length! > 0 ? btnText : "عرض الاسئلة"}
					</Button>
				</Link>
				{btnText && (
					<select
						value={numberOfQuestions}
						onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
						className="w-14 bg-theme border border-gray-700 rounded-md focus:outline-none selection:bg-transparent"
						title="عدد الاسئلة"
					>
						<option value={5}>5</option>
						<option value={10}>10</option>
						<option value={15}>15</option>
						<option value={30}>30</option>
						<option value={50}>50</option>
					</select>
				)}
			</div>
		</div>
	);
};

export default SubjectCard;
