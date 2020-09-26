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
    this.socket = io.connect('https://test.peekabid.com/socket.io/');

    this.socket.on('bid', (data: any) => {
      console.log(data);
      console.log('bid');
    });
  }

}
