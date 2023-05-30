"use client";

import Link from "next/link";

const Error = () => {
	return (
		<div className="flex flex-col items-center justify-center h-[80vh]">
			<h1 className="text-4xl font-semibold mb-8 text-red-500">خطأ</h1>
			<p className="text-xl text-gray-600 mb-8">
				حدث خطأ في الصفحة التي تبحث عنها.
			</p>
			<Link href="/" className="text-blue-500 text-lg">
				العودة
			</Link>
		</div>
	);
};

export default Error;
