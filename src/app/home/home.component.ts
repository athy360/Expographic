import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  books;

  constructor(private configService: ConfigService, private router: Router) { }



  ngOnInit() {
    this.configService.getBooks().subscribe((data) => {
      console.log(data);
      this.books = data['books']
    })

  }

  onSelect(book){
    this.router.navigate(['/catalogue', book.isbn ])
  }

}
