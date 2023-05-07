import { Injectable } from '@angular/core';
import { NavData } from 'src/app/models/nav';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  private data: NavData[] | null = null;
  private selectedIdUpdated = new Subject<number>();
  public selectedIdEvent$ = this.selectedIdUpdated.asObservable();

  constructor() {}

  setNavData(newData: NavData[] | null) {
    this.data = newData;
  }

  getNavData(): NavData[] | null {
    return this.data;
  }
}
