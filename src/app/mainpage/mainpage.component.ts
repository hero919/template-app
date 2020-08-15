import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/api/test').subscribe(data => {
        console.log(data);
    });
  }

}
