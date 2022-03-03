import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor( public _apiService: ApiService) {}
  
  nom;
  interpret;
  casa;
  image;

  addCharacter() {

    var data = new FormData();

    data.append('nom',this.nom);
    data.append('interpret',this.interpret);
    data.append('casa',this.casa);

    this._apiService.add(data).subscribe((response) => {
      console.log(response);
    });
  };
  ngOnInit(){
  };
}