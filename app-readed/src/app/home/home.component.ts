import { Component, OnInit } from '@angular/core';
import { Rss2jsonService } from '../rss2json.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: Rss2jsonService) { }

  ngOnInit() {

  }

  getData(url) {
    this.service.fetchURL(url).subscribe();
  }

}
