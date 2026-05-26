import Link from "next/link";
import { getPosts } from "../../../lib/payload-client";

export default async function JournalPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const posts = await getPosts(locale, { limit: 12 });

	return (
		<div className="max-w-6xl mx-auto px-6 py-24">
			<div className="text-center mb-16">
				<div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal text-sm tracking-[3px] mb-4">
					TRAVEL JOURNAL
				</div>
				<h1 className="text-6xl font-bold tracking-tight mb-6">
					Stories from the Road
				</h1>
				<p className="text-xl text-gray-600 max-w-lg mx-auto">
					Behind-the-scenes moments, travel tips, and honest reflections from my
					journeys around the world.
				</p>
			</div>

			{posts.length === 0 ? (
				<div className="text-center py-20">
					<p className="text-gray-500">
						No published stories yet. Check back soon!
					</p>
				</div>
			) : (
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{posts.map((post: any) => (
						<Link
							key={post.id}
							href={`/${locale}/journal/${post.slug}`}
							className="group block overflow-hidden rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
						>
							<div className="relative h-80 bg-gray-100">
								{post.coverImage && (
									<img
										src={post.coverImage.url}
										alt={post.title}
										className="absolute inset-0 w-full h-full object-cover"
									/>
								)}
								<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>
								<div className="absolute bottom-6 left-6 right-6 text-white">
									<div className="text-sm opacity-75 mb-2">
										{new Date(post.publishDate).toLocaleDateString()}
									</div>
									<h3 className="text-3xl font-semibold leading-tight group-hover:text-brand-teal transition-colors">
										{post.title}
									</h3>
								</div>
							</div>
							<div className="p-8">
								<p className="text-gray-600 line-clamp-3 text-[15px] leading-relaxed">
									{post.excerpt}
								</p>
								<div className="mt-6 flex items-center text-brand-teal font-medium group-hover:underline">
									Read the full story →
								</div>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
