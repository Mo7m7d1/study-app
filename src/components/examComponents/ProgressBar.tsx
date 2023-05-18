import { ProgressProps } from "./examTypes";

export default function ProgressBar({ initialTime, timer }: ProgressProps) {
	return (
		<div className="relative h-3 overflow-hidden bg-secondary rounded-t-md">
			<div
				className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-yellow-500 to-gray-500 transition-all duration-1000 ease-linear"
				style={{
					width: `${((initialTime - timer) / initialTime) * 100}%`,
				}}
			></div>
		</div>
	);
}
