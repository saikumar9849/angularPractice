import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myLoop]'
})
export class MyLoopDirective {

  constructor(private templateRef: TemplateRef<any>, private container:ViewContainerRef) { }

  @Input()
  set myLoop(num: number){
    for(var i=0;i<num;i++){
      this.container.createEmbeddedView(this.templateRef);
    }
  }

}
