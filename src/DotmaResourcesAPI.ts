import { BinaryData } from "fs";
import DotmaAPI from "./DotmaApi";
import { router as resourceApi } from "routes/resourceApi";

export default class DotmaResourcesAPI extends DotmaAPI<BinaryData> {
    public constructor() {
        super("/DotmaResourcesAPI", resourceApi);
    }

    public async getSound(soundName: string): Promise<BinaryData> {
        return super.getData();
    }
}
