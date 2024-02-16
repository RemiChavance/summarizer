import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  onClick(id: string){
    const text = document.getElementById(id)!.textContent!;
    navigator.clipboard.writeText(text);
  }
  
}
