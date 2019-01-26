import * as request from "request-promise";
import { ResourcesApi } from "../src/api/ResourcesApi";
import { DotmaConfig } from "../src/config/DotmaConfig";
import { DotmaResourceTypes } from "../src/api/enums/DotmaResourceTypes";
import { DotmaResourceUserGroupings } from "../src/api/enums/DotmaResourceUserGroupings";

describe("DOTMA resources API", async () => {

    it("Gets basic resources", async () => {
        try {
             const config = new DotmaConfig("aXises");
             const api = new ResourcesApi(config);
             const data = await api.getResources(DotmaResourceTypes.SOUNDS, DotmaResourceUserGroupings.ALEX, "api.mp3");
             console.log(data);
        } catch (err) {
            console.log(err);
        }
    });

});
