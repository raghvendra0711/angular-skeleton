import { enableProdMode }    from '@angular/core';
import { platformBrowser }   from '@angular/platform-browser';

import { LazyTabModuleNgFactory } from './lazy-tab.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(LazyTabModuleNgFactory).catch((e) => console.log(e));