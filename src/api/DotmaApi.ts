export class DotmaApi<T> {

    protected readonly API_URL: string;

    public constructor(url: string) {
        this.API_URL = url;
    }

    public getApiUrl(): string {
        return this.API_URL;
    }

    public getData(): T {
        //
        return "temp" as any as T;
    }
}
