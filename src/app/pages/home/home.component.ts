import { Component } from '@angular/core';
import copy from 'copy-text-to-clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   CopyBTNText: string = 'Copy';
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
     try {
       return String(eval(expression));
     } catch (error) {
       return 'Error';
     }
   }

   Copy() {
    copy(this.Final);
   }
}
