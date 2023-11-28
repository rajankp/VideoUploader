import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './vu/vu.config.server';
import { BaseComponent } from './vu/base.component';

const bootstrap = () => bootstrapApplication(BaseComponent, config);

export default bootstrap;
