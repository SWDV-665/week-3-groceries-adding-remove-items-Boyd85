import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List";

  items = [
    {
      name: "Milk",
      quantity: 2,
    },
    {
      name: "Banana",
      quantity: 3,
    },
    {
      name: "Apple",
      quantity: 4,
    },
    {
      name: "Bread",
      quantity: 2,
    },
  ];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController) {

  }
  removeItem(item, index) {
    const toast = this.toastCtrl.create({
      message: "Removing " + item.name + "...",
      duration: 3000
    });
    toast.present();

    this.items.splice(index, 1);
  }


  addItem(){
    this.showAddItemPrompt();
  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Grocery Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

  }


