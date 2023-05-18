import { QuestionProgressProps } from "./examTypes";

export default function QuestionProgress({
	currentQuestionIndex,
	questionsLength,
}: QuestionProgressProps) {
	return (
		<div className="text-gray-600 text-sm float-right">
			<span className="text-yellow-500">{currentQuestionIndex}</span> /{" "}
			{questionsLength}
		</div>
	);
}
