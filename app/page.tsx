"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<main className="bg-[#140e1d] text-2xl [&>section]:px-32 [&>section]:py-24">
			<motion.div className="!absolute top-0 w-full wave-container"></motion.div>
			<section className="!pt-32 !pb-0 text-center bg-opacity-90 h-screen text-[#B9B8D3] font-bold italic">
				<motion.div
					initial={{ y: -400 }}
					animate={{ y: 0 }}
					transition={{ type: "spring", stiffness: 55, damping: 5 }}
					className="relative flex flex-col items-center justify-center gap-5"
				>
					<h1 className="flex flex-col text-7xl">
						Discover <span>The Abyssal Workshop</span>
					</h1>
					<p className="text-[#140e1d] animate-[pulse_3s_ease-in-out_infinite]">
						Where Eldritch Wonders Weave in Code
					</p>
				</motion.div>
			</section>
			<section>
				<h2 className="text-5xl">Who are we</h2>
				<p className="w-1/3">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
					cupiditate ad laboriosam est. Corporis, delectus obcaecati. Iure ad
					rerum vel consectetur sunt accusamus temporibus velit fugiat error
					dolore, dolor explicabo.
				</p>
			</section>
			<section>
				<h2 className="text-5xl">Who are we</h2>
				<p className="w-1/3">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
					cupiditate ad laboriosam est. Corporis, delectus obcaecati. Iure ad
					rerum vel consectetur sunt accusamus temporibus velit fugiat error
					dolore, dolor explicabo.
				</p>
			</section>
			<section>
				<h2 className="text-5xl">Who are we</h2>
				<p className="w-1/3">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
					cupiditate ad laboriosam est. Corporis, delectus obcaecati. Iure ad
					rerum vel consectetur sunt accusamus temporibus velit fugiat error
					dolore, dolor explicabo.
				</p>
			</section>
		</main>
	);
}
