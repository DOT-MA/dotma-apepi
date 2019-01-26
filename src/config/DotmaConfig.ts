export class DotmaConfig {
    private readonly GITHUB_USER_AGENT: string;
    public constructor(githubUserAgent: string) {
        this.GITHUB_USER_AGENT = githubUserAgent;
    }
    public getGithubUserAgent(): string {
        return this.GITHUB_USER_AGENT;
    }
}
