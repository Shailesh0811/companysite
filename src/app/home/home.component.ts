import { animate, state, style, transition, trigger } from '@angular/animations';
import { ASTWithSource } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('fade',[
      transition('void=>*' ,[
        style({opacity:0}),
        animate(2000)
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
