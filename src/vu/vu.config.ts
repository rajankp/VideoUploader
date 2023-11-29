import { ApplicationConfig } from "@angular/core";
import { vuRoutes } from "./vu.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { provideAnimations } from '@angular/platform-browser/animations';

export const vuConfig: ApplicationConfig = {
    providers: [provideRouter(vuRoutes), provideClientHydration(), provideAnimations()]
}