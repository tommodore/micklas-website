// GitHub OAuth handler for Decap CMS on Cloudflare Pages
// 
// To set up:
// 1. Go to https://github.com/settings/developers → OAuth Apps → New OAuth App
// 2. Set Homepage URL: https://micklas-website.pages.dev
// 3. Set Callback URL: https://micklas-website.pages.dev/auth/github/callback
// 4. Create the app, copy Client ID and Client Secret
// 5. Add GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET as env vars in Cloudflare Pages
// 6. Redeploy

export async function onRequest(context) {
	const { request, env } = context;
	const url = new URL(request.url);
	const path = url.pathname.replace(/\/$/, "");

	// GET /auth/github → redirect to GitHub authorization
	if (path === "/auth/github" && request.method === "GET") {
		const clientId = env.GITHUB_CLIENT_ID;
		if (!clientId) {
			return new Response(
				"GitHub OAuth not configured. Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in Pages env vars.",
				{ status: 500 },
			);
		}

		const redirectUri = `${url.origin}/auth/github/callback`;
		const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo&response_type=code`;

		return Response.redirect(githubAuthUrl, 302);
	}

	// GET /auth/github/callback → handle the callback from GitHub
	if (path === "/auth/github/callback" && request.method === "GET") {
		const code = url.searchParams.get("code");
		if (!code) {
			return new Response("Missing authorization code", { status: 400 });
		}

		const clientId = env.GITHUB_CLIENT_ID;
		const clientSecret = env.GITHUB_CLIENT_SECRET;

		if (!clientId || !clientSecret) {
			return new Response(
				"GitHub OAuth not configured. Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in Pages env vars.",
				{ status: 500 },
			);
		}

		// Exchange the code for an access token
		const tokenResponse = await fetch(
			"https://github.com/login/oauth/access_token",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					client_id: clientId,
					client_secret: clientSecret,
					code,
				}),
			},
		);

		const data = await tokenResponse.json();

		if (data.error) {
			return new Response(
				`GitHub OAuth error: ${data.error_description || data.error}`,
				{ status: 400 },
			);
		}

		// Return HTML page with the token (Decap CMS reads it from the page)
		const html = `<!doctype html>
<html><body>
<script>
	const authResult = ${JSON.stringify({
		token: data.access_token,
		provider: "github",
	})};
	window.opener.postMessage(authResult, "${url.origin}");
	window.close();
</script>
</body></html>`;

		return new Response(html, {
			headers: { "Content-Type": "text/html" },
		});
	}

	// 404 for any other path
	return new Response("Not found", { status: 404 });
}
