import { bootstrapApplication } from '@angular/platform-browser';
import { vuConfig } from './vu/vu.config';
import { BaseComponent } from './vu/base.component';

bootstrapApplication(BaseComponent, vuConfig)
  .catch((err) => console.error(err));
