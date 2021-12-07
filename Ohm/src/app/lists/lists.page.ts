import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {
  songs =  [{"name": "Still waiting",
                "group": "Sum 41",
                "album": "Underclass Hero",
                "genre": "punk/rock",
                "duration": 251
              },{"name": "Jessica kill",
                "group": "Sum 41",
                "album": "Underclass Hero",
                "genre": "punk/rock",
                "duration": 263
              },{"name": "Walking disaster",
                "group": "Sum 41",
                "album": "Underclass Hero",
                "genre": "punk/rock",
                "duration": 208
              },{"name": "Speak of the devil",
                "group": "Sum 41",
                "album": "Underclass Hero",
                "genre": "punk/rock",
                "duration": 234
              },{"name": "Dear father",
                "group": "Sum 41",
                "album": "Underclass Hero",
                "genre": "punk/rock",
                "duration": 241
              },{"name": "The jester",
                "group": "Sum 41",
                "album": "Underclass Hero",
                "genre": "punk/rock",
                "duration": 224
              },{"name": "Ma poubelle",
                "group": "Sum 41",
                "album": "Underclass Hero",
                "genre": "punk/rock",
                "duration": 271
            }];
  constructor() { }
  
  ngOnInit() {
  }
  remove(i){
    console.log(i);
    this.songs.splice(i,1);
  }

}
