import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(
    public _apiService: ApiService,
    public alertController: AlertController
  ) { }

  song;
  album;
  group;
  genre;
  duration;
  image;

  selectedFile(event){
    this.image = event.target.files[0];
  }

  addSong() {
    if (!this.song || !this.album || !this.group || !this.genre || !this.duration || !this.image) {this.presentAlert(); return};

    var data = new FormData();

    data.append('song',this.song);
    data.append('album',this.album);
    data.append('group',this.group);
    data.append('genre',this.genre);
    data.append('duration',this.duration);
    data.append('image',this.image)


    this._apiService.addSong(data).subscribe((response) => {
      console.log(response);
  });
  console.log(data);
  this.presentAlert2();
  }
  async presentAlert() {
    
    const alert = await this.alertController.create({
      header:'All fields required',
      cssClass:'alertB',
      buttons: [
        {
          text: 'Ok',
          cssClass:'alertButton'
        }
      ]
    });
    
    await alert.present();

  }
  async presentAlert2() {
    
    const alert = await this.alertController.create({
      header:'Song added correctly',
      cssClass:'alertB',
      buttons: [
        {
          text: 'Nice',
          cssClass:'alertButton',
          handler: () => {
            location.reload()
          }
        }
      ]
    });
    
    await alert.present();

  }
  
  ngOnInit() {
  }

}
