import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
song: Object;
  constructor(
    public http: HttpClient
  ) { }
  addSong(data){
    return this.http.post('http://localhost:90/phpFiles/insert.php', data, {responseType: 'text'});
  }
  getSongs(data){
    return this.http.post('http://localhost:90/phpFiles/testR.php', data);
  }
  deleteSong(data){
    return this.http.post('http://localhost:90/phpFiles/delete.php',data);
  }
  modSong(data){
    return this.http.post('http://localhost:90/phpFiles/update.php', data, {responseType: 'text'});
  }
  edit(song) {
    this.song = song;
  }
  getId(){
    return this.song;
  }

}
