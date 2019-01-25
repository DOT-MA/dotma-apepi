import * as request from "request";
import * as fs from "fs";
import { DotmaApi } from "./DotmaApi";
import { Globals } from "../globals";

export class DotmaResourcesApi extends DotmaApi<fs.BinaryData> {
    public constructor() {
        super(Globals.RESOURCE_PATH);
    }

    public async getSound(soundName: string): Promise<fs.BinaryData> {
        return super.getData();
    }
}
