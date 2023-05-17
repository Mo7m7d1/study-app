"use client";
import { Spinner } from "@material-tailwind/react";

const LoadingSpinner = () => {
	return (
		<div className="flex justify-center items-center h-[80vh]">
			<Spinner color="yellow" />
		</div>
	);
};

export default LoadingSpinner;
