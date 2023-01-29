import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-breakpoints-a',
  templateUrl: './breakpoints-a.component.html',
  styleUrls: ['./breakpoints-a.component.scss']
})
export class BreakpointsAComponent {
  title = "Breakpoints";
  hideLogo = false;
  isMobile = false;

  cols = '3';
  displayMap = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '1'],
    [Breakpoints.Medium, '2'],
    [Breakpoints.Large, '3'],
    [Breakpoints.XLarge, '3']
  ]);

  constructor(private breakpointService: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointService
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((res) => {
        this.hideLogo = false;
        this.isMobile = false;

        if (res.breakpoints[Breakpoints.Small]) {
          this.hideLogo =  true;
        }

        if (res.breakpoints[Breakpoints.XSmall]) {
          this.hideLogo = true;
          this.isMobile = true;
        }
      });
  }

  handleBreakpointwithMap() {
    this.breakpointService
      .observe([
        Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge
      ]).subscribe(res => {
        for (const query of Object.keys(res.breakpoints)) {
          if (res.breakpoints[query]) {
            this.cols = this.displayMap.get(query) as string;
          }
        }
    })
  }

}
