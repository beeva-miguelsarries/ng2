import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.sass';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private api: ApiService) { }
}
