import { SubjectCard } from "@/components";
import subjects from "@/utils/subjects.json";

function page() {
	return (
		<div className="text-white flex flex-col items-center mt-14 lg:mt-28 mx-4">
			<h1 className="text-4xl font-semibold mb-8 text-gray-400">اختر المادة</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
				{subjects.map((subject) => (
					<SubjectCard key={subject.id} subject={subject.title} />
				))}
			</div>
		</div>
	);
}

export default page;
