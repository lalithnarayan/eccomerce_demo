import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbCollapseModule, NgbDatepickerModule, NgbTimepickerModule, NgbDropdownModule, NgbCarouselModule, NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { HorizontalCarouselComponent } from './horizontal_carousel/horizontal_carousel.component';
import { FilterComponent } from './filter/filter.component';
import { Ng5SliderModule } from 'ng5-slider';
import { BreadCrumbPopupComponent } from './breadcrumb_popup/breadcrumb_popup.component';

@NgModule({
  declarations: [PagetitleComponent, HorizontalCarouselComponent, FilterComponent, BreadCrumbPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    NgbCarouselModule,
    Ng5SliderModule,
    NgbAccordionModule
  ],
  exports: [PagetitleComponent, HorizontalCarouselComponent, FilterComponent, BreadCrumbPopupComponent]
})
export class UIModule { }
