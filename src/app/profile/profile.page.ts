import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  hide = false;
  constructor(
    private router: Router
  ) {
    console.log('hide constructor', this.router.getCurrentNavigation().extras.state.intro);

   }

  ngOnInit() {
    console.log('hide ngOnInit', this.router.getCurrentNavigation().extras.state.intro);
  }

  ionViewWillEnter() {
    console.log('hide', this.router.getCurrentNavigation().extras.state.intro);
    this.hide = this.router.getCurrentNavigation().extras.state.intro;
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }

}
