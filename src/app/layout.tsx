import { Navbar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Exams",
	description: "An app that helps students prepare for their exams",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ar" dir="rtl">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
