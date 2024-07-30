import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective {

  constructor(private templateRef:TemplateRef<any>,private containerRef:ViewContainerRef) { }

  @Input("myIf")
  set myIfFun(condition:boolean){
    if(condition){
      this.containerRef.createEmbeddedView(this.templateRef);
    }else{
      this.containerRef.clear();
    }
  }

}
