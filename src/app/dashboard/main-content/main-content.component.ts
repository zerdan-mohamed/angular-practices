import {Component, ElementRef, Renderer2} from '@angular/core';
import {ShareDataService} from "../../core/services/share-data.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    public shareDataService: ShareDataService) { }


}
