import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public message: String;
  public recievermessage:String;
  public messageArray=[];
  constructor(private chatservice: ChatService) {
    
    
    // this.chatservice.newMessagereceived().subscribe().
  }
  sendMessage() {
    this.chatservice.sendData(this.message);
    console.log("message--------", this.message);

    this.message = '';
    console.log("message--------", this.message);

  }
  ngOnInit() {
    this.recievermessage='';
    this.chatservice.getMessages().subscribe(data=> {
      this.recievermessage=data;
      this.messageArray.push(this.recievermessage);
      console.log("upcoming message--------------", data);
      console.log(this.recievermessage);
    })
    //this.sendMessage();
    // this.chatservice.getMessages().subscribe(data=> {
    //   console.log("data----------------", data);
    // })
     
   }
   




}
