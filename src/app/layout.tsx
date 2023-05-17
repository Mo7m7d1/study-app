import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
	title: "ذاكرلي",
	description: "An app that helps students prepare for their exams",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ar" dir="rtl">
			<head>
				<link rel="icon" href="../../public/icon.png" />
			</head>
			<body suppressHydrationWarning={true}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
