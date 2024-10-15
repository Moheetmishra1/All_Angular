import { Component, ContentChild, effect, ElementRef, HostBinding, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None  ,
  host:{
    class:'control',
    '(click)':'onClick()  '
  }

})
export class ControlComponent {

// @HostBinding('class')  className='control'
title= input.required<string>()
private el= inject(ElementRef);
@ContentChild('input') private control ?:ElementRef<HTMLInputElement|HTMLTextAreaElement>  ; 


onClick(){
  console.log(this.el);
  console.log(this.el.nativeElement);
  console.log(this.control?.nativeElement.value);
  
  
}
}
 