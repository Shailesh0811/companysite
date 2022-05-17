import { animate, state, style, transition, trigger } from '@angular/animations';

import { ASTWithSource } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as AOS from 'aos';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  alert : boolean=false;
  constructor(private http:HttpClient) { }
  
  
  ngOnInit(): void {
    
    AOS.init();
  }
  
  
  onSubmit(data:any){
    var uuid1 = uuid();
    data.contactId= uuid1;
    this.http.post('https://aslt53tk16.execute-api.us-east-1.amazonaws.com/prod/contactusdetails' ,data)
    .subscribe((result)=>{
      console.warn('result',result)
    })
    console.warn(data);
    this.alert=true;
    
    console.warn(data.contactId);
  }
  closeAlert(){
    this.alert=false;
  }

}
