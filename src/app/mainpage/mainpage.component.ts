import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  persons: any = [];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.refresh();
  }

  removeUserById(id): void {
    const deleteUrl = `/api/persons/${id}`;
    this.http.delete(deleteUrl).subscribe(result => {
      this.refresh();
    });
  }

  addUser(user): void {
    console.log(user);
    this.http.post('/api/persons/', user).subscribe(result => {
      console.log(result);
      this.refresh();
    });
  }


  refresh(): void {
    this.http.get('/api/persons').subscribe(data => {
      this.persons = data;
    });
  }

}
