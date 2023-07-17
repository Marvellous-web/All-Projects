import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoApp';

  v1="Submit";

  fun(){
    alert("This is event Binding")
  }
  TwoWaytext:any="";//property binding

  demo:any=" "
  datasend="Hi i am Parent Component"
 

}
