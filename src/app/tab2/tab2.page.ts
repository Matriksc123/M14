import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  casaH;
  chars: Object;
  id;
  fav;

  constructor(public _apiService: ApiService) {}

  filterHouse(){
    var data = new FormData();
    data.append('casa',this.casaH);
    this._apiService.getFilteredData(data).subscribe((response) => {
      this.chars = response;
      console.log(response)
    });
  }
  delete(i) {
    this.id = this.chars[i].id;
    this._apiService.delete(this.id).subscribe((response) => {
      console.log(response);
    });
    location.reload();
  }
  favs(i) {
    var data = new FormData();
    this.fav = this.chars[i]['favs'];
    this.id = this.chars[i]['id'];
    data.append('id',this.id);
    data.append('fav',this.fav);

    this._apiService.modify(data).subscribe((response) => {
      console.log(response);
  });
  location.reload();
  }
  ngOnInit() {
    this._apiService.getData().subscribe((response) => {
      this.chars = response;
      console.log(this.chars)
    });
  }
}
