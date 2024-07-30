import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myStyles]'
})
export class MyStylesDirective {

  @Input()
  fontSize!: string;

  constructor(private elementRef:ElementRef) { 
    elementRef.nativeElement.style.color='red';
    elementRef.nativeElement.style.backgroundColor='yellow';
    elementRef.nativeElement.style.fontSize='30px';
  }

  ngAfterViewInit():void{
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
