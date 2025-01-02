import { Injectable } from '@angular/core';
import { Cliente } from '../modelo/cliente.modelo';
import { Observable } from 'rxjs';
import { collection, collectionData, docData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc, updateDoc,  } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes: Observable<Cliente[]>;

  private clientesRef: any;

  constructor(private firestore: Firestore) { 
    // Realizamos una consulta para obtener el listado de clientes
    this.clientesRef = collection(this.firestore, 'clientes');
    const consulta = query(this.clientesRef, orderBy('nombre', 'asc'));
    this.clientes = collectionData(consulta, {idField: 'id'}) as Observable<Cliente[]>;
  }

  getClientes(): Observable<Cliente[]>{
    return this.clientes;
  }

  agregarCliente(cliente: Cliente){
    // agregar un nuevo documento a nuetra coleccion addDoc
    return addDoc(this.clientesRef, cliente )
  }

  getCliente(id: string): Observable<Cliente | null>{
    const clienteDocRef = doc(this.firestore, `cliente/${id}`); // con el 'doc', recuperamos la referencia del documento
    return docData(clienteDocRef, {idField: 'id'}) as Observable<Cliente>;
  }

  modificarCliente(cliente:Cliente){
      const clienteDoc = doc(this.firestore, `clientes/${cliente.id}`);
      return updateDoc(clienteDoc, {...cliente});
  }

  eliminarCliente(cliente: Cliente){
    const clienteDoc = doc(this.firestore, `clientes/${cliente.id}`);
    return deleteDoc(clienteDoc);
  }

}
