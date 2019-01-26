export class DotmaApi<T> {

    protected readonly RESOURCE_URL: string;

    public constructor(url: string) {
        this.RESOURCE_URL = url;
    }

    public getApiUrl(): string {
        return this.RESOURCE_URL;
    }

    public getData(): T {
        //
        return "temp" as any as T;
    }
}
