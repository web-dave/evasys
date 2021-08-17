import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  @Input() book!: IBook;
  @Output() bookSeleted = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selectThisBook() {
    this.bookSeleted.emit(this.book);
  }
}
