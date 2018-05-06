import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-bar-indicator',
  templateUrl: './bar-indicator.component.html',
  styleUrls: ['./bar-indicator.component.scss']
})
export class BarIndicatorComponent implements OnInit {
  @Input () strengthRule: number;
  circles = new Array(12);
  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  private renderIndicator(index) {
    const barCol = [];
    barCol.fill('gray', 0, 11);
    for (let i = 0; i < this.strengthRule; i++) {
      if (index < 4) { barCol[i] = '#FF1E34';
      } else if (index < 8) { barCol[i] = '#fed149';
        } else if (index < 12) { barCol[i] = '#20B942'; }
    }
    return barCol[index];
  }

}
