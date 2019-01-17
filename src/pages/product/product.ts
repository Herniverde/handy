import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
 item:any = {name: '', price: '', category: '', description: ''};
     
  postData.append('item_name', this.item.name);
      postData.append('item_quantity', this.item.quantity);
      postData.append('item_description', this.item.description);
      postData.append('item_price', this.item.price);
      postData.append('location', this.item.location);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
buy() {
    this.autProvider.buy(this.item.name, this.item.quantity, this.item.description, this.item.price, this.item.location).then(success => {
      if(success) {
        this.navCtrl.setRoot('MenuPage');
      } else {
        let alert = this.alertCtrl.create({
          title: 'Invalid sell',
          message: 'Please check your input',
          buttons: ['OK']
        });
        alert.present();
      }
    }
cancel() {
    this.autProvider.buy(this.item.name, this.item.quantity, this.item.description, this.item.price, this.item.location).then(success => {
      if(success) {
        this.navCtrl.setRoot('MenuPage');
      } else {
        let alert = this.alertCtrl.create({
          title: 'Invalid action',
          message: 'Error',
          buttons: ['OK']
        });
        alert.present();
      }                                                                                                                              
}
