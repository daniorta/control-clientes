import { Component,  } from '@angular/core';
import { Cliente } from '../../modelo/cliente.modelo';
import { ClienteService } from '../../servicios/cliente.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm} from '@angular/forms'

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {


  clientes: Cliente[] | null = null;

  cliente: Cliente = {
    nombre:'',
    apellido: '',
    email: '',
    saldo: undefined
  };

  constructor(private clienteServicio: ClienteService) { }

  ngOnInit() {
    this.clienteServicio.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  // getSaldoTotal(): number {
  //   let saldoTotal = 0;

  //   if (this.clientes) {
  //     this.clientes.forEach(cliente => {
  //       if (cliente.saldo !== undefined) {
  //         saldoTotal += cliente.saldo
  //       }

  //     });
  //   }
  //   return saldoTotal;
  // }
// metodo moderno en js y ts, reduce
  getSaldoTotal(): number{
    return this.clientes?.reduce((saldoTotal, cliente) => saldoTotal + (cliente.saldo ?? 0) , 0) ?? 0;
  }


  // metodo agregar cliente
  agregar(clienteForm: NgForm) {  
       const {value, valid} = clienteForm;//recibimos el valor del formulario y si es valido

       if(valid){
        //agregamos la logica para guardar el cliente

        // limpiamos el formulario
        clienteForm.resetForm()
       }
    }

}
