"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { questionType } from "@/components/examComponents/examTypes";
import {
	Answers,
	NextButton,
	ProgressBar,
	Question,
	QuestionProgress,
	Result,
} from "@/components/examComponents";
import jsonQuestions from "@/utils/examQuestion.json";
import { Dialog, DialogBody, IconButton } from "@material-tailwind/react";

type Props = { params: { id: string } };

const Page = ({ params }: Props) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const numberOfQuestions = parseInt(searchParams.get("numberOfQuestions")!);

	const subject = decodeURI(params.id);
	const subjectQuestions = useMemo(() => {
		return jsonQuestions
			.filter((question) => question.subject === subject)
			.sort(() => Math.random() - 0.5)
			.slice(0, numberOfQuestions);
	}, [subject]);

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);

	const [score, setScore] = useState<number>(0);
	const [showResult, setShowResult] = useState<boolean>(false);
	const [showAnswersModal, setShowAnswersModal] = useState<boolean>(false);

	const [wrongAnswers, setWrongAnswers] = useState<questionType[]>([]);
	const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

	const initialTime = 45;
	const [timer, setTimer] = useState<number>(initialTime);

	const handleOptionClick = (optionIndex: number) => {
		setSelectedOptionIndex(optionIndex);
	};

	const handleRestartClick = () => {
		setCurrentQuestionIndex(0);
		setSelectedOptionIndex(-1);
		setScore(0);
		setShowResult(false);
		setTimer(initialTime);
	};

	const handleMenuClick = () => {
		setCurrentQuestionIndex(0);
		setSelectedOptionIndex(-1);
		setScore(0);
		setShowResult(false);
		router.push("/exam");
	};

	const onAnswersClick = () => {
		if (wrongAnswers.length === 0) return;
		setShowAnswersModal(true);
	};

	const handleNextClick = () => {
		if (
			selectedOptionIndex ===
			subjectQuestions[currentQuestionIndex].correct_answer
		) {
			setScore(score + 1);
		} else {
			setWrongAnswers((prevWrongAnswers) => [
				...prevWrongAnswers,
				subjectQuestions[currentQuestionIndex],
			]);
			setSelectedOptions((prevSelectedOptions) => [
				...prevSelectedOptions,
				selectedOptionIndex,
			]);
		}

		if (currentQuestionIndex < subjectQuestions.length - 1) {
			setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
			setTimer(initialTime);
		} else {
			setShowResult(true);
		}
		setSelectedOptionIndex(-1);
	};

	useEffect(() => {
		if (timer < 0) {
			handleNextClick();
		} else {
			const time = setTimeout(() => {
				setTimer((prevTime) => prevTime - 1);
			}, 1000);

			return () => {
				clearTimeout(time);
			};
		}
	}, [currentQuestionIndex, timer]);

	return (
		<div className="flex justify-center items-center h-[80vh]">
			{subjectQuestions.length > 0 ? (
				<>
					{!showResult ? (
						<div className="bg-theme shadow-lg shadow-secondary rounded-lg text-white mx-4 mt-14 lg:w-[700px]">
							<ProgressBar timer={timer} initialTime={initialTime} />
							<QuestionProgress
								currentQuestionIndex={currentQuestionIndex + 1}
								questionsLength={subjectQuestions.length}
							/>
							<div className="m-6">
								<Question
									questions={subjectQuestions}
									currentQuestionIndex={currentQuestionIndex}
									selectedOptionIndex={selectedOptionIndex}
									handleOptionClick={handleOptionClick}
								/>
								<NextButton
									isLastQuestion={
										currentQuestionIndex === subjectQuestions.length - 1
									}
									disabled={selectedOptionIndex === -1}
									onClick={handleNextClick}
								/>
							</div>
						</div>
					) : (
						<Dialog
							open={showAnswersModal}
							handler={setShowAnswersModal}
							className="bg-transparent w-full min-w-full max-w-full md:w-[50%] md:min-w-[50%] md:max-w-[50%]"
						>
							<DialogBody className="relative">
								<IconButton
									color="gray"
									className="text-lg md:hidden"
									onClick={() => setShowAnswersModal(false)}
								>
									x
								</IconButton>
								<Answers
									questions={wrongAnswers}
									selectedOptions={selectedOptions}
								/>
							</DialogBody>
						</Dialog>
					)}
					{showResult && (
						<Result
							score={score}
							totalQuestions={subjectQuestions.length}
							onRestart={handleRestartClick}
							onMenu={handleMenuClick}
							onAnswers={onAnswersClick}
						/>
					)}
				</>
			) : (
				<div className="text-2xl text-center bg-yellow-500 p-4 rounded-xl text-gray-800">
					...Soon
				</div>
			)}
		</div>
	);
};

export default Page;
