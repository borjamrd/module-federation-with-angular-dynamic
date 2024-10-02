import { Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit } from '@angular/core';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector: Injector) { }

  //) { }

  search() {
    alert('Not implemented for this demo!');
  }

  async terms() {

    const { LazyComponent } = await import('../lazy/lazy.component');

    this.viewContainer.createComponent(LazyComponent, { injector: this.injector });
  }


}
