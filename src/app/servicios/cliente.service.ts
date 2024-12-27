import { Injectable } from '@angular/core';
import { Cliente } from '../modelo/cliente.modelo';
import { Observable } from 'rxjs';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes: Observable<Cliente[]>;

  constructor(private firestore: Firestore) { 
    // Realizamos una consulta para obtener el listado de clientes
    const clientesRef = collection(this.firestore, 'clientes');
    const consulta = query(clientesRef, orderBy('nombre', 'asc'));
    this.clientes = collectionData(consulta, {idField: 'id'}) as Observable<Cliente[]>;
  }

  getClientes(): Observable<Cliente[]>{
    return this.clientes;
  }
}
