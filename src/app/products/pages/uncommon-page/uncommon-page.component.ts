import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select

  public name: string = 'Abner Josue';
  public gender: 'male'|'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female'
  }

  // i18nPlural

  public clients: string[] = ['Maria', 'Abner', 'Josue', 'Estrada', 'Pedri','Luis']
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
  deleteClient(): void {
    this.clients.shift();
  }

  // keyValue Pipe 

  public person = {
    name: 'Josue',
    age: 24,
  }

  // async pipe

  public myObservableTime: Observable<number> = interval( 200 ).pipe(
    tap( value => console.log(value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  })

}
