import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exer04';

    compra(): void{
      alert('Compra Efetuada Com Sucesso!!!!')
    }

}
