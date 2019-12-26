import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Demo1';
  name = 'sarah';
  cnt = 0;
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = '!!!The Sarah Web';
    }
  }
  ChangeCnt($event)
  {
    this.cnt = $event.target.value.length+1;
    console.log($event);
    console.log($event.target);
    console.log($event.target.value);
    console.log($event.target.value.length);
  }
  ResetCnt($event){
    this.cnt = 0;
    $event.target.value='';
  }
}
