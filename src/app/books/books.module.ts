import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { PreviewComponent } from './preview/preview.component';
import { DetailsComponent } from './details/details.component';
import { FilterPipe } from './filter.pipe';
import { BookNewComponent } from './book-new/book-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { bookFeatureName } from './store/book.store';
import { bookReducer } from './store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffect } from './store/book.effect';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    PreviewComponent,
    DetailsComponent,
    FilterPipe,
    BookNewComponent,
  ],
  exports: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(bookFeatureName, bookReducer),
    EffectsModule.forFeature([BookEffect]),
  ],
})
export class BooksModule {}
