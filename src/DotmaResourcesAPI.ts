import { BinaryData } from "fs";
import DotmaAPI from "./DotmaApi";

export default class DotmaResourcesAPI extends DotmaAPI<BinaryData> {
    public constructor() {
        super("/DotmaResourcesAPI");
    }

    public async getSound(soundName: string): Promise<BinaryData> {
        return super.getData();
    }
}
