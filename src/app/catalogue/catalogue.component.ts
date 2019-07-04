import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  isbn: any;

  public getBooksByIsbn;
  constructor(private route: ActivatedRoute, private configService: ConfigService
  ) { }

  ngOnInit() {
    // this.configService.getBooks().subscribe((data) => {
    // console.log(data);
    let isbn = parseInt(this.route.snapshot.paramMap.get('isbn'))
    this.getBooksByIsbn = isbn;
    console.log(isbn);
    // }) 
  }

  // getBooksByIsbn() {
  //   this.configService.getBooksByIsbn(this.isbn).subscribe(data => {
  //     console.log(data)
  //   })
  // }

}
