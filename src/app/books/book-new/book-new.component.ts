import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  saved = false;
  form: FormGroup = new FormGroup({});
  fields = [
    'title',
    'subtitle',
    'isbn',
    'abstract',
    'numPages',
    'author',
    'publisher',
    'price',
    'cover',
  ];

  constructor(
    private service: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fields.forEach((field) => {
      const value = field === 'numPages' ? 0 : '';
      this.form.addControl(field, new FormControl(value));
    });

    this.form.controls.title.valueChanges.subscribe((data) => {
      if (data.length >= 1) {
        this.form.controls.isbn.setValidators(Validators.required);
      } else {
        this.form.controls.isbn.clearValidators();
      }
    });
    // this.form = this.formBuilder.group({
    //   title: ['', []],
    //   subtitle: ['', []],
    //   isbn: ['', []],
    //   abstract: ['', []],
    //   numPages: [0],
    //   author: ['', []],
    //   publisher: ['', []],
    //   price: ['', []],
    //   cover: ['', []],
    // });
  }

  saveBook() {
    this.service.createBook(this.form.value).subscribe((data) => {
      this.router.navigate(['..', data.isbn], { relativeTo: this.route });
    });
  }
  isSaved() {
    return this.saved || this.form.pristine;
  }
}
