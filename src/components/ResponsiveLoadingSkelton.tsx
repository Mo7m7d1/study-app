import LoadingSkelton from "./LoadingSkelton";

export default function ResponsiveLoadingSkelton() {
	return (
		<div className="grid place-content-center h-[80vh]">
			<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
				<LoadingSkelton />
				<LoadingSkelton />
				<LoadingSkelton />
				<LoadingSkelton />
				<LoadingSkelton />
				<LoadingSkelton />
			</div>
		</div>
	);
}
