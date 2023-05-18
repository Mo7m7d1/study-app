export type NextButtonProps = {
	isLastQuestion: boolean;
	disabled: boolean;
	onClick: () => void;
};

export type questionType = {
	id?: number;
	subject: string;
	question: string;
	correct_answer: number;
	choices: string[];
};

export type questionProps = {
	currentQuestionIndex: number;
	questions: questionType[];
	selectedOptionIndex: number;
	correctOptionIndex?: number;
	handleOptionClick: (index: number) => void;
};

export type ResultsProps = {
	score: number;
	totalQuestions: number;
	onRestart: () => void;
	onMenu: () => void;
	onAnswers: () => void;
};

export type ProgressProps = {
	initialTime: number;
	timer: number;
};

export type QuestionProgressProps = {
	currentQuestionIndex: number;
	questionsLength: number;
};
