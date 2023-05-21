// "use client";
// import { Button, Typography } from "@material-tailwind/react";
// import { useState } from "react";

// type Flashcard = {
// 	question: string;
// 	answer: string;
// };

// const Page = () => {
// 	const flashcards: Flashcard[] = [
// 		{
// 			question:
// 				"What are the four basic types of business rules in a conceptual data model?",
// 			answer:
// 				"The four basic types of business rules in a conceptual data model are uniqueness rules, relationship rules, derivation rules, and integrity rules.",
// 		},
// 	];

// 	const [currentCardIndex, setCurrentCardIndex] = useState(0);
// 	const [isFlipped, setIsFlipped] = useState(false);

// 	const handleNextCard = () => {
// 		setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
// 		setIsFlipped(false);
// 	};

// 	return (
// 		<div
// 			className="flex justify-center items-center h-[80vh] text-gray-100"
// 			dir="ltr"
// 		>
// 			{flashcards.length > 0 ? (
// 				<div
// 					onClick={() => setIsFlipped(!isFlipped)}
// 					className="relative text-xl font-semibold h-[400px] w-[500px] mx-10 rounded-lg shadow-lg cursor-pointer transform hover:scale-[99%] transition-all duration-300"
// 				>
// 					<div className={`flashcard ${isFlipped ? "isFlipped" : ""}`}>
// 						<div className="front px-6 bg-gradient-to-tr from-yellow-300 to-blue-gray-600">
// 							<div className="absolute top-5 right-[38%] text-white z-10">
// 								<span className="text-3xl font-bold bg-gradient-to-tr from-blue-gray-200 to-yellow-500 text-transparent bg-clip-text">
// 									Question
// 								</span>
// 							</div>
// 							<span className="flex justify-center items-center h-full">
// 								{flashcards[currentCardIndex].question}
// 							</span>
// 						</div>
// 						<div className="back px-6 bg-gradient-to-tr from-green-300 to-blue-gray-400">
// 							<div className="absolute top-5 right-[38%] text-white z-10">
// 								<span className="text-3xl font-bold bg-gradient-to-tr from-blue-gray-200 to-green-200 text-transparent bg-clip-text">
// 									Answer
// 								</span>
// 							</div>
// 							<span className="flex justify-center items-center h-full">
// 								{flashcards[currentCardIndex].answer}
// 							</span>
// 						</div>
// 					</div>
// 					<div className="absolute bottom-5 right-5">
// 						<Button color="blue-gray" onClick={handleNextCard}>
// 							التالي
// 						</Button>
// 					</div>
// 				</div>
// 			) : (
// 				<div className="text-2xl text-center bg-yellow-500 p-4 rounded-xl text-gray-800">
// 					No flashcards available.
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default Page;

export default function page() {
	return (
		<div className="flex justify-center items-center h-[80vh]">
			<span className="text-2xl text-center bg-yellow-500 p-4 rounded-xl text-gray-800">
				...Soon
			</span>
		</div>
	);
}
