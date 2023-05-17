import { QuestionCard } from "@/components";
import questions from "@/utils/questions.json";
import { useMemo } from "react";

type QuestionPageProps = {
	params: {
		id: string;
	};
};

const QuestionPage = ({ params }: QuestionPageProps) => {
	const subject = decodeURI(params.id);
	const subjectQuestions = useMemo(() => {
		return questions.filter((question) => question.subject === subject);
	}, [subject]);

	return (
		<div className="text-white flex flex-col items-center mt-14 lg:mt-28 pb-10 mb-6">
			<h1 className="text-3xl font-semibold mb-8 text-gray-300">
				اسئلة مادة <span className="text-yellow-500">{subject}</span>
			</h1>
			<div className="grid grid-cols-1 gap-4 w-full">
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
