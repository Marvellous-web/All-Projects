import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent {

  constructor(private demoService:DemoServiceService){
    this.demoService.getData();

  }
  loginForm=new FormGroup(
    {
      email:new FormControl,
      password:new FormControl
}
  )
  
data:any;
  userLogin(){
    console.log(this.loginForm.value);
  }

  @Input() sendDataToChild:any;

  @Output() outputTextSerch:EventEmitter<string>=new EventEmitter();

  searchText:any="send data to parent component";
  search(){
    this.outputTextSerch.emit(this.searchText);
  }
  // getService(){
  //   this.demoService.getData();
  // }
}

