import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { BookNewComponent } from './book-new/book-new.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard implements CanDeactivate<BookNewComponent> {
  canDeactivate(component: BookNewComponent): boolean {
    if (!component.isSaved()) {
      return confirm('Echt jetzt???');
    }
    return true;
  }
}
