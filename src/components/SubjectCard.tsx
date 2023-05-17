"use client";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

const SubjectCard = ({ subject }: { subject: string }) => {
	return (
		<div className="bg-theme shadow-xl shadow-secondary text-white p-7 rounded-lg">
			<h2 className="text-lg font-semibold mb-4">{subject}</h2>
			<Link href={`questions/${subject}`}>
				<Button variant="gradient" color="yellow">
					عرض الأسئلة
				</Button>
			</Link>
		</div>
	);
};

export default SubjectCard;
