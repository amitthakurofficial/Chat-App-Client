import { Injectable } from '@angular/core';
import  * as io from 'socket.io-client'
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket;
  constructor() { 
    this.socket=io('http://localhost:3000/');

  }

  // newMessagereceived() {
  //   this.socket.on('newMessage' , (data) => 
  //   console.log("new data--------------",data));
  //  // return Observable;
  // }
  sendData(message) {
    console.log("service message",message);
    this.socket.emit('new-message' , message)
  }


  public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('new-message', (message) => {
            observer.next(message);
        });
    });
}
}
