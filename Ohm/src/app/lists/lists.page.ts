import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
songs: Object;
 
  constructor(   public _apiService: ApiService,
                 private router: Router
    ) { }
   
  ngOnInit() {
    this._apiService.getSongs().subscribe((response) => {
      this.songs = response;
      console.log(this.songs)
    });
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