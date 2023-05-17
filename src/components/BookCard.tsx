import PrimaryButton from "./PrimaryButton";

type CardProps = {
	title: string;
	link: string;
};

const BookCard = ({ title, link }: CardProps) => {
	return (
		<div className="bg-theme shadow-xl shadow-secondary text-white p-7 rounded-lg w-full">
			<h2 className="text-lg font-semibold mb-4">{title}</h2>
			<PrimaryButton link={link} />
		</div>
	);
};

export default BookCard;
