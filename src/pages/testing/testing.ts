import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Vibration } from 'ionic-native';

/*
  Generated class for the Testing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-testing',
  templateUrl: 'testing.html'
})
export class TestingPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController
  ) {
    menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestingPage');
    Vibration.vibrate([2000,1000,2000]);
  }

  openPage() {
    Vibration.vibrate([2000,1000,2000]);
  }

}
