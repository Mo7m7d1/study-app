import { QuestionPageProps } from "@/app/types";
import { QuestionCard } from "@/components";
import jsonQuestions from "@/utils/questions.json";
import { useMemo } from "react";

const QuestionPage = ({ params }: QuestionPageProps) => {
	const subject = decodeURI(params.id);
	const subjectQuestions = useMemo(() => {
		return (
			Object.entries(jsonQuestions).find(([key]) => key === subject)?.[1] || []
		);
	}, [subject]);

	return (
		<div className="text-white flex flex-col items-center h-[80vh] mt-8">
			<h1 className="text-3xl font-semibold mb-8 text-gray-300">
				اسئلة مادة <span className="text-yellow-500">{subject}</span>
			</h1>
			<div className="grid grid-cols-1 justify-items-center gap-4 w-full pb-4">
				{subjectQuestions.map((question) => (
					<QuestionCard
						key={question.id}
						question={question.question}
						answer={question.answer}
					/>
				))}
			</div>
		</div>
	);
};

export default QuestionPage;
