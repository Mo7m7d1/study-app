function QuestionPage({ subject }: { subject: string }) {
	// TODO: fetch questions for the selected subject

	return (
		<div className="text-white flex flex-col items-center h-screen mt-14 lg:mt-28 pb-10">
			<h1 className="text-4xl font-semibold mb-8 text-gray-300">
				{subject} الأسئلة عن موضوع{" "}
			</h1>
			{/* TODO: display questions for the selected subject */}
		</div>
	);
}

export default QuestionPage;
