import { Routes } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';

export const routes: Routes = [
    {path:"", component: TableroComponent},
    {path:"login", component: LoginComponent},
    {path:"cliente/editar/:id", component: EditarClienteComponent},//visualizamos los detalles del cliente en concreto.
    {path:"**", component: NoEncontradoComponent}
   
];
