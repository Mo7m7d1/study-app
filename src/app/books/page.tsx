import BookCard from "@/components/BookCard";
import jsonBooks from "../../utils/subjects.json";
import { useMemo } from "react";

const BooksPage = () => {
	const books = useMemo(() => jsonBooks, []);
	return (
		<div className="text-white flex flex-col items-center mt-14 lg:mt-28 mx-4">
			<h1 className="text-4xl font-semibold mb-8 text-gray-400">
				قائمة المقررات
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10 w-full">
				{books.map((book) => (
					<BookCard key={book.id} title={book.title} link={book.link} />
				))}
			</div>
		</div>
	);
};

export default BooksPage;
