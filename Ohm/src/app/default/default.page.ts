import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.page.html',
  styleUrls: ['./default.page.scss'],
})
export class DefaultPage implements OnInit {

  constructor(private route: Router) { }
  goHome() {
    this.route.navigate(['tabs/home']);
  }
  ngOnInit() {
  }

}
