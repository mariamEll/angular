import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fisrt';
  name='Imen';
  agenda=[{date:"10/2/2022",message:"ab"  },
            {date:"12/3/2022",message:"ba"},];
}
