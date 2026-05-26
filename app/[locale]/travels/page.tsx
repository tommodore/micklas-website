"use client";

import { useState, use } from "react";
import Link from "next/link";

const destinations = [
	{
		id: 1,
		slug: "lofoten-norway",
		title: "Lofoten Islands",
		country: "Norway",
		region: "Europe",
		year: "2026",
		image: "/logo-micklas.png",
		description: "Dramatic peaks rising from the sea during the midnight sun.",
		tags: ["Mountains", "Midnight Sun"],
	},
	{
		id: 2,
		slug: "patagonia-chile",
		title: "Torres del Paine",
		country: "Chile",
		region: "South America",
		year: "2026",
		image: "/logo-micklas.png",
		description: "Epic granite towers and endless wilderness in Patagonia.",
		tags: ["Hiking", "Wilderness"],
	},
	{
		id: 3,
		slug: "iceland-winter",
		title: "Iceland Winter",
		country: "Iceland",
		region: "Europe",
		year: "2025",
		image: "/logo-micklas.png",
		description: "Northern Lights and ice caves in the land of fire and ice.",
		tags: ["Northern Lights", "Winter"],
	},
	{
		id: 4,
		slug: "new-zealand",
		title: "South Island",
		country: "New Zealand",
		region: "Oceania",
		year: "2025",
		image: "/logo-micklas.png",
		description: "Milford Sound and the Southern Alps at their most dramatic.",
		tags: ["Fjords", "Mountains"],
	},
	{
		id: 5,
		slug: "morocco-desert",
		title: "Sahara Desert",
		country: "Morocco",
		region: "Africa",
		year: "2024",
		image: "/logo-micklas.png",
		description: "Golden dunes and ancient kasbahs under endless starry skies.",
		tags: ["Desert", "Culture"],
	},
	{
		id: 6,
		slug: "japan-autumn",
		title: "Kyoto & Alps",
		country: "Japan",
		region: "Asia",
		year: "2024",
		image: "/logo-micklas.png",
		description: "Autumn colors in Kyoto and the Japanese Alps.",
		tags: ["Culture", "Autumn"],
	},
];

const regions = ["All", "Europe", "South America", "Oceania", "Africa", "Asia"];

export default function TravelsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = use(params);
	const [activeRegion, setActiveRegion] = useState("All");
	const [activeYear, setActiveYear] = useState("All");

	const years = ["All", ...new Set(destinations.map((d) => d.year))];

	const filteredDestinations = destinations.filter((dest) => {
		const regionMatch = activeRegion === "All" || dest.region === activeRegion;
		const yearMatch = activeYear === "All" || dest.year === activeYear;
		return regionMatch && yearMatch;
	});

	return (
		<div className="max-w-7xl mx-auto px-6 py-24">
			{/* Header */}
			<div className="text-center mb-16">
				<div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal text-sm tracking-[3px] mb-4">
					PORTFOLIO
				</div>
				<h1 className="text-7xl font-bold tracking-tighter mb-6">Travels</h1>
				<p className="text-2xl text-gray-600 max-w-2xl mx-auto">
					A visual journey through some of the world’s most breathtaking places.
				</p>
			</div>

			{/* Filters */}
			<div className="flex flex-col md:flex-row gap-4 mb-12 sticky top-20 bg-white py-6 z-40 border-b">
				<div className="flex flex-wrap gap-2">
					{regions.map((region) => (
						<button
							key={region}
							onClick={() => setActiveRegion(region)}
							className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
								activeRegion === region
									? "bg-brand-navy text-white"
									: "bg-gray-100 hover:bg-gray-200 text-gray-700"
							}`}
						>
							{region}
						</button>
					))}
				</div>

				<div className="flex flex-wrap gap-2 md:ml-auto">
					{years.map((year) => (
						<button
							key={year}
							onClick={() => setActiveYear(year)}
							className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
								activeYear === year
									? "bg-brand-teal text-white"
									: "bg-gray-100 hover:bg-gray-200 text-gray-700"
							}`}
						>
							{year}
						</button>
					))}
				</div>
			</div>

			{/* Portfolio Grid */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{filteredDestinations.map((dest) => (
					<Link
						key={dest.id}
						href={`/${locale}/travels/${dest.slug}`}
						className="group block overflow-hidden rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
					>
						<div className="relative h-[420px] bg-gray-200 overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80"></div>

							<div className="absolute top-6 left-6 flex gap-2">
								<span className="bg-white/90 text-brand-navy text-xs px-4 py-1 rounded-full font-medium tracking-wider">
									{dest.country}
								</span>
								<span className="bg-white/90 text-brand-navy text-xs px-4 py-1 rounded-full font-medium tracking-wider">
									{dest.year}
								</span>
							</div>

							<div className="absolute bottom-8 left-8 right-8">
								<h3 className="text-white text-4xl font-semibold leading-none mb-3 group-hover:text-brand-teal transition-colors">
									{dest.title}
								</h3>
								<p className="text-white/90 text-lg line-clamp-2 mb-4">
									{dest.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{dest.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>

			{filteredDestinations.length === 0 && (
				<div className="text-center py-20 text-gray-500">
					No destinations found for the selected filters.
				</div>
			)}

			<div className="text-center mt-20 text-sm text-gray-500">
				This portfolio is growing. More destinations will be added regularly.
			</div>
		</div>
	);
}
