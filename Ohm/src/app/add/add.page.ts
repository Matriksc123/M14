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

  song;
  album;
  group;
  genre;
  duration;

  addSong() {
    let data = {
      song: this.song,
      album: this.album,
      group: this.group,
      genre: this.genre,
      duration: this.duration
    }
    this._apiService.addSong(data).subscribe((response) => {
      console.log(response);
  });
  console.log(data.song,data.album,data.group,data.genre,data.duration)
  }
  
  ngOnInit() {
  }

}
