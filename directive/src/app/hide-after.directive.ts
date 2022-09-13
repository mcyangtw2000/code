import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideAfter]'
})
export class HideAfterDirective implements OnInit {

  constructor(
    private viewContainerRef:ViewContainerRef,
     private template:TemplateRef<any>) { }
     
  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

}

