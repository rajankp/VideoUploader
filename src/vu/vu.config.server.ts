import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { provideServerRendering } from "@angular/platform-server";
import { vuConfig } from "./vu.config";

const serverSideConfig: ApplicationConfig = {
    providers: [provideServerRendering()]
}

export const config = mergeApplicationConfig(vuConfig, serverSideConfig);