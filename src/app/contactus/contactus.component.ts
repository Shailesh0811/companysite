import { animate, state, style, transition, trigger } from '@angular/animations';

import { ASTWithSource } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
