import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { UIModule } from '../shared/ui/ui.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';
import { HorizontaltopbarComponent } from './horizontaltopbar/horizontaltopbar.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [LayoutComponent, SidebarComponent, TopbarComponent, FooterComponent, HorizontalComponent, VerticalComponent, HorizontaltopbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    ClickOutsideModule,
    UIModule,
    PerfectScrollbarModule
  ],
})
export class LayoutsModule { }
