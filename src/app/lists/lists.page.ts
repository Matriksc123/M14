import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
songs: any = [];
offset: any;
limit: any;

  constructor(   public _apiService: ApiService,
                 private router: Router
    ) { }
  
  ngOnInit() {
    this.offset = 0;
    this.limit = 4;
    this.getSongs(this.limit, this.offset);
  }
  getSongs(limit, offset) {
    var data = new FormData();
    data.append('offset', offset);
    data.append('limit', limit);
    this._apiService.getSongs(data).subscribe((response) => {
      this.songs = this.songs.concat(response['data']['album']['tracks']['items']);
    });
  }

  loadData(event) {
    setTimeout(() => {
      this.offset = parseInt(this.offset) + parseInt(this.limit);
      this.getSongs(this.limit, this.offset);
      event.target.complete();
    }, 500);
  }


  remove(i) { 
    i = this.songs[i].id;
    this._apiService.deleteSong(i).subscribe((response) => {
      console.log(response);
    });
    location.reload();
  }
  goMod(i) {
    let song = this.songs[i];
    this._apiService.edit(song);
    this.router.navigate(['/modifica']);
  }
  
}