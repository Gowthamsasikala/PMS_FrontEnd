import { Component, OnInit } from '@angular/core';
import { editPolicy } from '../interfaces';

@Component({
  selector: 'app-edit-policy',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.css']
})
export class EditPolicyComponent implements OnInit {
  Pname:String;
  DIY:String;
  PType:String;
  TAmount:String;

  constructor() { }

  EditPolicy(){
    const editPoll : editPolicy = {
      Pname:this.Pname,
      DIY:this.DIY,
      PType:this.PType,
      TAmount:this.TAmount
    }
    console.log(this.Pname+"-----"+this.DIY+"------"+this.PType+"--------"+this.TAmount);
  }
  ngOnInit() {
  }

}
