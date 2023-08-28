import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   Final: string = '';

   Count(value: string) {
     if (value === '=') {
       try {
         this.Final = this.calculate(this.Final);
       } catch (error) {
         this.Final = 'Error';
       }
     } else {
       this.Final += value;
     }
   }

   calculate(expression: string): string {
     return eval(expression);
   }
}
