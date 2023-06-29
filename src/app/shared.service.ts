import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public Subject = new Subject();

  constructor() {}

  passValue(data: any) {
    //passing the data as the next observable

    this.Subject.next(data);
  }

  getFormValue() {
    return this.Subject.asObservable();
  }
}
