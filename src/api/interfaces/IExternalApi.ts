export interface IExternalApi<HeaderType> {
    readonly externalApiUrl: string;
    readonly ApiHeaders: HeaderType;
}
