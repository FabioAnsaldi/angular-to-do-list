import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})

export class ToolbarService {

  private titleSubject: Subject<string> = new Subject();

  public observerTitle = this.titleSubject.asObservable();

  public getObserverTitle() {
    return this.observerTitle;
  }

  public updateTitle(title: string) {
    return this.titleSubject.next(title);
  }
}
