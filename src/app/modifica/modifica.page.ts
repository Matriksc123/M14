import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.page.html',
  styleUrls: ['./modifica.page.scss'],
})
export class ModificaPage implements OnInit {
song: Object;
  constructor(
    public _apiService: ApiService,
    private router: Router
  ) { }

  songN: any;
  album: any;
  group: any;
  genre: any;
  duration: any;

  modSong() {
    let data = {
      id: this.song['id'],
      songN: this.songN,
      album: this.album,
      group: this.group,
      genre: this.genre,
      duration: this.duration
    }
    this._apiService.modSong(data).subscribe((response) => {
      console.log(response);
  });
  this.router.navigate(['tabs/lists']);
  }
  
  ngOnInit() {
    this.song = this._apiService.getId();
    this.songN = this.song['nombre'];
    this.album = this.song['album'];
    this.group = this.song['grupo'];
    this.duration = this.song['duracion'];
    this.genre = this.song['genero'];
    console.log(this.song);
  }

}
