"use client";
import { Button } from "@material-tailwind/react";

const PrimaryButton = ({ link }: { link: string }) => {
	return (
		<Button variant="gradient" color="yellow">
			<a href={link} download className="font-bold">
				تحميل
			</a>
		</Button>
	);
};

export default PrimaryButton;
