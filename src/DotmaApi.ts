import * as express from "express";

export default class DotmaAPI<T> {

    protected readonly API_URL: string;

    protected router: express.Router;

    public constructor(url: string, router: express.Router) {
        this.API_URL = url;
        this.setRouter(router);
    }

    public getApiUrl(): string {
        return this.API_URL;
    }

    public getData(): T {
        //
        return "temp" as any as T;
    }

    public setRouter(router: express.Router): void {
        this.router = router;
    }

    public getRouter(): express.Router {
        return this.router;
    }
}
