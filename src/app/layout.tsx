import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
	title: "ذاكرلي",
	description: "An app that helps students prepare for their exams",
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ar" dir="rtl">
			<body suppressHydrationWarning={true}>
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
