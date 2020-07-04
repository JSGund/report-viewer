import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-report-viewer';

  viewerContainerStyle = {
    position: 'absolute',
    left: '5px',
    right: '5px',
    top: '40px',
    bottom: '5px',
    overflow: 'hidden',
    clear: 'both',
    ['font-family']: 'ms sans serif'
};
}
