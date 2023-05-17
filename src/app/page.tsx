import { Card } from "@/components";

export default function Home() {
	return (
		<div className="text-white flex flex-col items-center h-screen mt-14 lg:mt-28 pb-10">
			<h1 className="text-4xl font-semibold mb-8 text-gray-300">
				مرحباً بك في{" "}
				<span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
					ذاكرلي
				</span>
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
				<Card
					title="المقررات"
					url="/books"
					description="قائمة بالمقررات التي يمكنك الاطلاع عليها وتنزيلها"
				/>
				<Card
					title="الأسئلة"
					url="/questions"
					description="مجموعة من الاسئلة للمراجعة"
				/>
				<Card
					title="اختبار"
					url="/exam"
					description="أداة لإجراء اختبارات مهمة للتقييم والممارسة"
				/>
				<Card
					title="Flashcards"
					url="/flashCards"
					description="بطاقات تعليمية لتعزيز المذاكرة وتسهيل الحفظ"
				/>
			</div>
		</div>
	);
}
