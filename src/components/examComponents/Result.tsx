"use client";
import { Button } from "@material-tailwind/react";
import { ResultsProps } from "./examTypes";

const Result = ({
	score,
	totalQuestions,
	onRestart,
	onMenu,
	onAnswers,
}: ResultsProps) => {
	return (
		<div className="flex justify-center items-center flex-col bg-theme shadow-lg shadow-secondary rounded-md p-6 text-gray-100">
			<h2 className="mb-4 text-lg">
				نتيجتك{" "}
				<span className="text-yellow-600 text-xl font-bold">{score}</span> من
				<span className="text-red-500 text-xl font-bold">{totalQuestions}</span>
			</h2>
			<div className="flex flex-row gap-4">
				<Button
					variant="gradient"
					color="yellow"
					onClick={onRestart}
					className="w-full"
				>
					إعادة الاختبار
				</Button>
				<Button
					variant="gradient"
					color="yellow"
					onClick={onMenu}
					className="w-full"
				>
					القائمة الرئيسية
				</Button>
			</div>
			{score < totalQuestions && (
				<div className="w-full h-4 mt-4">
					<Button
						size="sm"
						variant="text"
						color="yellow"
						onClick={onAnswers}
						className="text-sm text-yellow-700 hover:text-yellow-800"
					>
						اجابات الأسئلة
					</Button>
				</div>
			)}
		</div>
	);
};

export default Result;
