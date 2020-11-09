import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  socket: any;

  constructor() {
    console.log("initiating the connection");
    try {
      this.socket = io('https://test.peekabid.com', {
        path: "/socket.io/"
      });
    } catch(e) { console.log(e); }

    (window as any).socket = this.socket;

    this.socket.on('connect', (data:any) => {
      console.log('connected');
    })

    this.socket.on('bid', (data: any) => {
      console.log(data);
      console.log('bid');
    });
  }

}
