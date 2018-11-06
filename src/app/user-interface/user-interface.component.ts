import { Component, OnInit } from '@angular/core';
import { searchPolicy } from '../interfaces';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {
  NOY:String;
  Cname:String;
  PType:String;
  PID:String;
  Pname:String;
  constructor() { }

  SearchPolicy(){
    const searchPoli : searchPolicy={
      NOY:this.NOY,
      Cname:this.Cname,
      PType:this.PType,
      PID:this.PID,
      Pname:this.Pname
    }
  }

  ngOnInit() {
  }

}
