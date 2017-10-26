import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { RootModule } from './root-module/root.module';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RootModule);
