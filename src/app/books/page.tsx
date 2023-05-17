import BookCard from "@/components/BookCard";
import books from "../../utils/subjects.json";

const BooksPage = () => {
	return (
		<div className="text-white flex flex-col items-center h-screen mt-14 lg:mt-28 pb-10 mx-4">
			<h1 className="text-4xl font-semibold mb-8 text-gray-400">
				قائمة المقررات
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6 pb-10 w-full">
				{books.map((book) => (
					<BookCard title={book.title} downloadLink={book.downloadLink} />
				))}
			</div>
		</div>
	);
};

export default BooksPage;
