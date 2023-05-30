export type QuestionPageProps = {
	params: {
		subject: string;
	};
};

export type CardProps = {
	title: string;
	description: string;
	url: string;
};

export type BookCardProps = {
	title: string;
	link: string;
};

export type QuestionCardProps = {
	question: string;
	answer: string;
};

export type SubjectCardType = {
	id?: number;
	subject: string;
	link: string;
	btnText?: string;
};
