import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UIComponent  {
title = "ui";
elements = ["","","","","","","","",""];
rows = ["","","","","","","","",""];


}
