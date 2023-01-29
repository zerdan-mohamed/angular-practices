import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private sideMenu$= new BehaviorSubject<boolean>(false);

  constructor() { }

  updateSideMenuStatus(isMenuOpen: boolean) {
    this.sideMenu$.next(isMenuOpen);
  }

  getSideMenuStatus() {
    return this.sideMenu$.getValue();
  }

}
