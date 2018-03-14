import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paraFlag:boolean;
  dateText:String;
  hoverFlag:boolean;
  hobbies:string[];
  textProp:string;
  per:number;
  newHobby:string;

  constructor(){
    this.paraFlag = true;
    this.dateText="Hover on your button to see current date";
    this.hobbies=['reading','cricket','soccer','swimming']
  }

  seeDate(){
    this.hoverFlag=true;
    this.textProp="text-warning";
    this.dateText = new Date().toString();
  }

  resetText(){
    this.hoverFlag=false;
    this.textProp="";
    this.dateText = "Hover on your button to see current date";
    this.per=0;
  }

  togglePara(){
    this.paraFlag = !this.paraFlag;
  }

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }

  addHobby(){
    this.hobbies.push(this.newHobby);
  }
  resetHobby(){
    this.hobbies=['reading','cricket','soccer','swimming'];

  }

  increaseBar(){
    (this.per<100) ? this.per+=25 : this.per;
  }
}
