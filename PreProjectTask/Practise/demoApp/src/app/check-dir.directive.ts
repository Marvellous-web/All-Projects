import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCheckDir]'
})
export class CheckDirDirective {

  constructor(private templetRef:TemplateRef<any>,private viewContainer:ViewContainerRef) { }

  @Input() set check(data:boolean){}
 
}
