import { animate, state, style, transition, trigger } from '@angular/animations';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})

export class HeaderFooterComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
