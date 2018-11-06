import { Component, OnInit } from '@angular/core';
import { policyRegister } from '../interfaces';

@Component({
  selector: 'app-policy-register',
  templateUrl: './policy-register.component.html',
  styleUrls: ['./policy-register.component.css']
})
export class PolicyRegisterComponent implements OnInit {
  Pname: String;
  Sdate: String;
  DIY: String;
  InitialDeposit: String;
  Cname: String;
  PType: String;
  Utype: String;
  TPY: String;
  TAmount: String;
  Interest: String;
  constructor() { }
  
  PolicyRegister() {
    const policyRegis: policyRegister = {
      Pname: this.Pname,
      Sdate: this.Sdate,
      DIY: this.DIY,
      InitialDeposit: this.InitialDeposit,
      Cname: this.Cname,
      PType: this.PType,
      Utype: this.Utype,
      TPY: this.TPY,
      TAmount: this.TAmount,
      Interest: this.Interest
    }

    console.log(this.Pname + " and " + this.Cname);
  }
  ngOnInit() {
  }

}
