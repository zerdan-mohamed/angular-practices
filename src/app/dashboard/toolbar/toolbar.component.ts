import {Component, ElementRef, EventEmitter, Output, Renderer2} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ShareDataService} from "../../core/services/share-data.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  menuStatus = false;
//
  constructor(private shareDataService: ShareDataService) { }

  toggleMenu() {
    this.menuStatus = !this.menuStatus;
    this.shareDataService.updateSideMenuStatus(this.menuStatus);
  }
}
