import { Component, OnInit } from '@angular/core';
import { userRegister } from '../interfaces';
import { generate } from 'rxjs';
import swal from 'sweetalert';
import {Router} from '@angular/router';
import {UserSignInPageComponent } from '../user-sign-in-page/user-sign-in-page.component';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private route:Router) { }

  first: string;
  last: string;
  dob: string;
  Address: string;
  num: string;
  email: string;
  qualify: string;
  Salary: string;
  PAN: string;
  TOE: string;
  Male: string;
  Female: string;
  Question: string;
  Ans: string;
  EMPT: string;

  count = 0; A = 0; B = 0; C = 0; D = 0; E = 0;
  items = ['$', '_', '#'];
  Validation() {
    var userType: string;
    var num: number;
    var userid: string;
    const userRegis: userRegister = {
      first: this.first,
      last: this.last,
      dob: this.dob,
      Address: this.Address,
      num: this.num,
      email: this.email,
      qualify: this.qualify,
      Salary: this.Salary,
      PAN: this.PAN,
      TOE: this.TOE,
      EMPT: this.EMPT,
      Question: this.Question,
      Ans: this.Ans,
      Male: this.Male,
      Female: this.Female

    }

    var d = new Date();
    var year1 = d.getFullYear();
    var month1 = d.getMonth();

    var d1 = new Date(this.dob);
    var year2 = d1.getFullYear();
    var month2 = d1.getMonth();

    var year = (year1 - year2) * 12;

    var month = Math.abs(month1 - month2);

    var result = (year + month) / 12;
      console.log(this.Salary);
    if (result > 18 && result < 60) {
      this.count++;
      if (Number(this.Salary) <= 500000) {
        alert(this.Salary);
        userType = "A";
        userid = userType + "-" + "120" + this.A;
        this.A++;
      } else if (Number(this.Salary) > 500000 && Number(this.Salary) <= 1000000) {
        userType = "B";
        userid = userType + "-" + "120" + this.B;
        this.B++;
      } else if (Number(this.Salary) > 1000000 && Number(this.Salary) <= 1500000) {
        userType = "C";
        userid = userType + "-" + "120" + this.C;
        this.C++;
      } else if (Number(this.Salary) > 1500000 && Number(this.Salary) <= 3000000) {
        userType = "D";
        userid = userType + "-" + "120" + this.D;
        this.D++;
      } else if (Number(this.Salary) > 3000000) {
        userType = "E";
        userid = userType + "-" + "120" + this.E;
        this.E++;
      }
      var date = new Date();
      var a = ((Math.random() * 1000) + 1);
      var ran;
      const monthNames = ["jan", "feb", "mar", "apr", "may", "jun",
        "jul", "aug", "sep", "oct", "nov", "dec"
      ];
      if (a > 99) {
        ran = a.toString().substring(0, 3);
      } else {
        ran = ((Math.random() * 1000) + 1).toString().substring(0, 3);
      }
      var password = ("0" + date.getDate()).slice(-2) + "" + monthNames[date.getMonth()] + "" + this.items[Math.floor(Math.random() * this.items.length)] + "" + ran;

      console.log(userid + "-----" + password);

      swal("Sucess !", "You have successfully complete the registration. Dear User The User Id is " + userid + " and password is " + password, "success");
       
      this.route.navigate(["Signin"]);
    } else {
      swal("Sorry !", "You are not eligible for registration because of Age Mis Match", "error");
     
    }
    document.forms[0].reset();



  }



  ngOnInit() {


  }


}
