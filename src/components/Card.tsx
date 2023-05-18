"use client";

import { CardProps } from "@/app/types";
import {
	Card as CardMT,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";
import Link from "next/link";

const Card = ({ title, description, url }: CardProps) => {
	return (
		<CardMT className="mt-6 w-96 bg-theme shadow-xl shadow-secondary text-white">
			<CardBody>
				<Typography variant="h5" className="mb-2">
					{title}
				</Typography>
				<Typography className="text-gray-200">{description}</Typography>
			</CardBody>
			<CardFooter className="pt-0">
				<Button variant="gradient" color="yellow">
					<Link href={`${url}`} className="font-bold">
						الذهاب إلى الصفحة
					</Link>
				</Button>
			</CardFooter>
		</CardMT>
	);
};

export default Card;
