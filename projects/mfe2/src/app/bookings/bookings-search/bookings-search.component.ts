import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';

@Component({
  selector: 'app-bookings-search',
  templateUrl: './bookings-search.component.html'
})
export class BookingsSearchComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector: Injector
  ) { }

  search() {
    alert('Not implemented for this demo!');
  }

  async terms() {
    const { LazyComponent } = await import('../lazy/lazy.component');
    this.viewContainer.createComponent(LazyComponent, { injector: this.injector });
  }


}