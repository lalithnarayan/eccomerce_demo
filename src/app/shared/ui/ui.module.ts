import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng5SliderModule } from 'ng5-slider';
import { HorizontalCarouselComponent } from './horizontal_carousel/horizontal_carousel.component';
import { NgbCollapseModule, NgbDropdownModule, NgbAccordionModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { FilterComponent } from './filter/filter.component';
import { PagetitleComponent } from './pagetitle/pagetitle.component';

@NgModule({
  declarations: [PagetitleComponent, FilterComponent, HorizontalCarouselComponent],
  imports: [
    CommonModule,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbAccordionModule,
    Ng5SliderModule,
    NgbCarouselModule
  ],
  exports: [PagetitleComponent, FilterComponent, HorizontalCarouselComponent]
})
export class UIModule { }
