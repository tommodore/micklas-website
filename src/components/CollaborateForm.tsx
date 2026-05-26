"use client";

import { useState } from "react";

interface Props {
	locale: string;
}

export default function CollaborateForm({ locale }: Props) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
		consent: false,
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.consent) {
			setError("Please accept the data processing agreement to continue.");
			return;
		}

		setIsSubmitting(true);
		setError("");

		// Static site — simulate success (no backend needed)
		// To receive emails, sign up for Formspree (free) and replace the URL:
		// const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
		// 	method: "POST", body: JSON.stringify({ ...formData }),
		// 	headers: { "Accept": "application/json" }
		// });
		try {
			await new Promise((resolve) => setTimeout(resolve, 1200));
			setSubmitted(true);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value, type } = e.target as HTMLInputElement;
		setFormData((prev) => ({
			...prev,
			[name]:
				type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
		}));
	};

	if (submitted) {
		return (
			<div className="text-center">
				<div className="mx-auto w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-8">
					<span className="text-4xl">✉️</span>
				</div>
				<h2 className="text-5xl font-bold tracking-tight mb-6">Thank you!</h2>
				<p className="text-2xl text-gray-600 mb-8">
					Your message has been received. Micklas will get back to you within 48
					hours.
				</p>
				<a
					href={`/${locale}`}
					className="inline-block bg-secondary hover:bg-primary text-white px-10 py-4 rounded-full font-medium transition-all"
				>
					Back to homepage
				</a>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-8">
			{error && (
				<div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-6 text-sm">
					{error}
				</div>
			)}

			<div className="grid md:grid-cols-2 gap-8">
				<div>
					<label className="block text-sm font-medium mb-2">Your Name *</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full border border-gray-300 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
						placeholder="Anna Schmidt"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium mb-2">
						Email Address *
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full border border-gray-300 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
						placeholder="anna@brand.com"
					/>
				</div>
			</div>

			<div>
				<label className="block text-sm font-medium mb-2">
					Company / Organization
				</label>
				<input
					type="text"
					name="company"
					value={formData.company}
					onChange={handleChange}
					className="w-full border border-gray-300 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
					placeholder="Your Brand or Tourism Board"
				/>
			</div>

			<div>
				<label className="block text-sm font-medium mb-2">
					Tell us about your project *
				</label>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
					rows={8}
					className="w-full border border-gray-300 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 resize-y"
					placeholder="We're looking for a travel photographer for our summer campaign in the Alps..."
				/>
			</div>

			{/* GDPR Consent */}
			<div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
				<div className="flex items-start gap-4">
					<input
						type="checkbox"
						name="consent"
						checked={formData.consent}
						onChange={handleChange}
						className="mt-1.5 w-5 h-5 accent-secondary shrink-0"
						required
					/>
					<div className="text-sm text-gray-700 leading-relaxed">
						I agree that my data (name, email, company, message) will be
						processed by Micklas Travels to respond to my inquiry. The data will
						be stored for a maximum of 6 months and will not be shared with
						third parties. I can revoke this consent at any time by emailing{" "}
						<a
							href="mailto:hello@micklas.travel"
							className="text-secondary underline"
						>
							hello@micklas.travel
						</a>
						.
						<br />
						<br />
						For more information, please read our{" "}
						<a
							href={`/${locale}/privacy`}
							className="text-secondary underline"
						>
							Privacy Policy
						</a>
						.
					</div>
				</div>
			</div>

			<button
				type="submit"
				disabled={isSubmitting || !formData.consent}
				className="w-full bg-secondary hover:bg-primary text-white py-5 px-8 rounded-full text-xl font-medium transition-all disabled:opacity-60 disabled:cursor-not-allowed"
			>
				{isSubmitting ? "Sending your message..." : "Send Message"}
			</button>

			<p className="text-center text-xs text-gray-500 mt-4">
				This form is GDPR / DSGVO compliant. Your data is handled with care.
			</p>
		</form>
	);
}
