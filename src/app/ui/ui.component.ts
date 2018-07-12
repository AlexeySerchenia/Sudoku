import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UIComponent implements OnInit  {

	constructor(private configService : ConfigService) {}

	ngOnInit() {
		debugger;
		this.configService.fetchdata()
			.subscribe( res => {
				debugger;
			},err => {
				debugger;
			}
			)
	}
title = "ui";
elements = [
["11 ","21 ","31 ","41 ","51 ","61 ","71 ","81 ","91 "],
["12 ","22 ","32 ","42 ","52 ","62 ","72 ","82 ","92 "],
["13 ","23 ","33 ","43 ","53 ","63 ","73 ","83 ","93 "],
["14 ","24 ","34 ","44 ","54 ","64 ","74 ","84 ","94 "],
["15 ","25 ","35 ","45 ","55 ","65 ","75 ","85 ","95 "],
["16 ","26 ","36 ","46 ","56 ","66 ","76 ","86 ","96 "],
["17 ","27 ","37 ","47 ","57 ","67 ","77 ","87 ","97 "],
["18 ","28 ","38 ","48 ","58 ","68 ","78 ","88 ","98 "],
["19 ","29 ","39 ","49 ","59 ","69 ","79 ","89 ","99 "],
];

}
