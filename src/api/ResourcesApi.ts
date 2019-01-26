import * as request from "request-promise";
import * as fs from "fs";
import { DotmaApi } from "./DotmaApi";
import { Globals } from "../globals";
import { DotmaConfig } from "../config/DotmaConfig";
import { IExternalApi } from "./interfaces/IExternalApi";
import { DotmaResourceTypes } from "./enums/DotmaResourceTypes";
import { DotmaResourceUserGroupings } from "./enums/DotmaResourceUserGroupings";

export class ResourcesApi extends DotmaApi<fs.BinaryData> implements IExternalApi<{["User-Agent"]: string}> {

    private readonly config: DotmaConfig;

    public readonly externalApiUrl: string;

    public readonly ApiHeaders: {["User-Agent"]: string};

    public constructor(config: DotmaConfig, externalApiUrl?: string) {
        super(externalApiUrl === undefined ? Globals.RESOURCE_PATH : externalApiUrl);
        this.externalApiUrl = externalApiUrl === undefined ? Globals.RESOURCE_PATH : externalApiUrl;
        this.ApiHeaders = {
            "User-Agent": config.getGithubUserAgent(),
        };
        this.config = config;
    }

    public async getResources(type: DotmaResourceTypes, group: DotmaResourceUserGroupings, fileName: string): Promise<string | {}> {
        const resourceType = DotmaResourceTypes[type].toLowerCase();
        const resourceGroup = DotmaResourceUserGroupings[group].toLocaleLowerCase();
        let data;
        try {
            data = await request.get(
                `${this.externalApiUrl}/${resourceType}/${resourceGroup}/${fileName}`, {
                headers: this.ApiHeaders,
            });
        } catch (err) {
            throw new Error(err);
        }
        try {
            data = JSON.parse(data);
        } catch (err) {
            if (data === undefined) {
                throw new Error(err);
            }
        }
        return data;
    }

    public async getSound(soundName: string): Promise<fs.BinaryData> {
        return super.getData();
    }
}
