import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from './produto.model';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:5001/produto"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isErro: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isErro ? ["msg-erro"] : ["msg-sucesso"]
    })
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!!", true);
    return EMPTY;
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl)
  }

  readById(id: any): Observable<Produto> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Produto>(url)
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }

  delete(id: any): Observable<Produto> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Produto>(url)
  }

}
