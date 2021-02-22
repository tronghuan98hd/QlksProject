import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { QlksProjectSharedModule } from 'app/shared/shared.module';
import { QlksProjectCoreModule } from 'app/core/core.module';
import { QlksProjectAppRoutingModule } from './app-routing.module';
import { QlksProjectHomeModule } from './home/home.module';
import { QlksProjectEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    QlksProjectSharedModule,
    QlksProjectCoreModule,
    QlksProjectHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    QlksProjectEntityModule,
    QlksProjectAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class QlksProjectAppModule {}
