import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

/**  ненужный модуль
showConfig() {
  this.configService.getConfig()
    .subscribe((data: Config) => this.config = {
        heroesUrl: data['dataUrl'],
        textfile:  data['textfile']
    });
}
**/
  constructor() { }

  ngOnInit() {
  }

}
