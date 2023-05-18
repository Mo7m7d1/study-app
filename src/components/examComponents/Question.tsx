import { questionProps } from "./examTypes";

export default function Question({
	currentQuestionIndex,
	questions,
	selectedOptionIndex,
	handleOptionClick,
	correctOptionIndex,
}: questionProps) {
	return (
		<div
			className="flex flex-col justify-center items-center space-y-6"
			dir="ltr"
		>
			<h2 className="text-xl font-bold text-gray-200 text-center mb-2">
				{questions[currentQuestionIndex]?.question!}
			</h2>
			<div className="w-full space-y-4">
				{questions[currentQuestionIndex].choices.map((option, index) => (
					<div
						key={index}
						className={`py-4 px-8 rounded-md cursor-pointer flex items-center justify-between text-gray-200 bg-gray-800 shadow-xl shadow-secondary border border-secondary hover:bg-theme focus:bg-secondary focus:outline-none transition-all duration-150 ${
							selectedOptionIndex === index
								? "bg-gradient-to-tr from-gray-600 to-yellow-600"
								: ""
						}
						${
							correctOptionIndex === index
								? "bg-gradient-to-r from-green-400 to-green-300"
								: ""
						}
						`}
						onClick={() => handleOptionClick(index)}
					>
						<span className="text-gray-100">{option}</span>
					</div>
				))}
			</div>
		</div>
	);
}
