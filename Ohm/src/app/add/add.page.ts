import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(
    public _apiService: ApiService
  ) { }

  sName;
  gName;
  aName;
  genre;
  duration;

  addSong() {
    let data = {
      sName: this.sName,
      gName: this.gName,
      aName: this.aName,
      genre: this.genre,
      duration: this.duration
      
    }
    this._apiService.addSong(data).subscribe((response) => {
      console.log(response);
  });
  console.log(data.sName,data.gName,data.aName,data.genre,data.duration)
  }
  
  ngOnInit() {
  }

}
