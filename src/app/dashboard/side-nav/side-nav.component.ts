import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {Observable, of} from "rxjs";
import {ShareDataService} from "../../core/services/share-data.service";

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  sideNavItems = ['Shopping List', 'Recipes'];

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    public shareDataService: ShareDataService) { }

  ngOnInit(): void {

  }
}
