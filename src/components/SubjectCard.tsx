"use client";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { SubjectCardType } from "@/app/types";

const SubjectCard = ({ id, subject, link, btnText }: SubjectCardType) => {
	return (
		<div className="bg-theme shadow-xl shadow-secondary text-white p-7 rounded-lg">
			<h2 className="text-lg font-semibold mb-4">{subject}</h2>
			<Link href={link}>
				<Button variant="gradient" color="yellow">
					{btnText?.length! > 0 ? btnText : "عرض الاسئلة"}
				</Button>
			</Link>
		</div>
	);
};

export default SubjectCard;
