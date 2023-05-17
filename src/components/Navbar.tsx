"use client";
import {
	Navbar as NavbarMT,
	Typography,
	Button,
	IconButton,
	Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const [openNav, setOpenNav] = useState(false);
	const router = usePathname();

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const isActive = (path: string) => router.includes(decodeURI(path));

	const navList = (
		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
			<Typography
				variant="small"
				color="white"
				className={`p-1 font-normal hover:text-yellow-600 transition-all duration-200 ${
					isActive("/books") ? "text-yellow-600" : ""
				}`}
			>
				<Link href="/books" className="flex items-center">
					المقررات
				</Link>
			</Typography>
			<Typography
				variant="small"
				color="white"
				className={`p-1 font-normal hover:text-yellow-600 transition-all duration-200 ${
					isActive("/questions") ? "text-yellow-600" : ""
				}`}
			>
				<Link href="/questions" className="flex items-center">
					اسئلة
				</Link>
			</Typography>
			<Typography
				variant="small"
				color="white"
				className={`p-1 font-normal hover:text-yellow-600 transition-all duration-200 ${
					isActive("/exam") ? "text-yellow-600" : ""
				}`}
			>
				<Link href="/exam" className="flex items-center">
					اختبار
				</Link>
			</Typography>
			<Typography
				variant="small"
				color="white"
				className={`p-1 font-normal hover:text-yellow-600 transition-all duration-200 ${
					isActive("/flashCards") ? "text-yellow-600" : ""
				}`}
			>
				<Link href="/flashCards" className="flex items-center">
					Flash Cards
				</Link>
			</Typography>
		</ul>
	);

	return (
		<NavbarMT className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-theme border border-gray-800 shadow-2xl sticky top-0 z-50">
			<div className="container mx-auto flex items-center justify-between text-blue-gray-900">
				<Typography
					href="#"
					className="mr-4 cursor-pointer py-1.5 font-bold text-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text"
				>
					<Link href="/">ذاكرلي</Link>
				</Typography>
				<div className="hidden lg:block">{navList}</div>
				<Button
					variant="gradient"
					color="yellow"
					size="sm"
					className="hidden lg:inline-block"
				>
					<span>Quiz</span>
				</Button>
				<IconButton
					variant="text"
					className="mr-auto h-6 w-6 text-center hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="h-6 w-6"
							viewBox="0 0 24 24"
							stroke="yellow"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							stroke="yellow"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<div className="container mx-auto">
					{navList}
					<Button
						variant="gradient"
						color="yellow"
						size="md"
						fullWidth
						className="mb-2"
					>
						<span className="font-bold">Quiz</span>
					</Button>
				</div>
			</Collapse>
		</NavbarMT>
	);
};

export default Navbar;
