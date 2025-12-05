import { Octokit } from "@octokit/core";

export async function getRepoCount() {
    try {
        if (process.env.GITHUB_TOKEN) {
            const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN, });
            const res = await octokit.request('GET /user/repos?per_page=99', {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });
            if (res.status === 200) {
                const privateRepos = res.data.filter((repo: any) => repo.private).length || 0;
                const publicRepos = res.data.filter((repo: any) => !repo.private).length || 0;
                return publicRepos + privateRepos;
            }
        }
        console.log('No token or token failed');

        // Fallback to public profile if no token or token failed
        const res = await fetch('https://api.github.com/users/Mateus-Felipe', { next: { revalidate: 3600 } });
        if (!res.ok) return 90; // Fallback
        const data = await res.json();
        return data.public_repos;

    } catch (error) {
        console.error('Error fetching repo count:', error);
        return 90; // Fallback
    }
}
