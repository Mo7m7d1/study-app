"use client";

import { useState } from "react";
import Question from "./Question";
import NextButton from "./NextButton";
import { questionType } from "./examTypes";
import { useRouter } from "next/navigation";

export type AnswersProps = {
	questions: questionType[];
	selectedOptions: number[];
};

const Answers = ({ questions, selectedOptions }: AnswersProps) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const router = useRouter();

	const handleNextClick = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
		}

		if (currentQuestionIndex === questions.length - 1) router.push("/exam");
	};

	return (
		<div className="flex justify-center items-center h-[80vh]">
			<div className="bg-theme shadow-lg shadow-secondary rounded-lg">
				<div className="m-6">
					<Question
						questions={questions}
						currentQuestionIndex={currentQuestionIndex}
						correctOptionIndex={questions[currentQuestionIndex].correct_answer}
						selectedOptionIndex={selectedOptions[currentQuestionIndex]}
						handleOptionClick={() => {}}
					/>
					<NextButton
						isLastQuestion={currentQuestionIndex === questions.length - 1}
						disabled={false}
						onClick={handleNextClick}
					/>
				</div>
			</div>
		</div>
	);
};

export default Answers;
