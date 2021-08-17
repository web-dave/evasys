import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  book!: IBook;
  sub = new Subscription();
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    console.log(this.route);

    // this.route.params.subscribe((params) => {
    // this.service.getBook(params.isbn).subscribe((data) => (this.book = data));
    // });
    this.sub = this.service
      .getBook(this.route.snapshot.params.isbn)
      .subscribe((data) => {
        console.log(data);

        this.book = data;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
