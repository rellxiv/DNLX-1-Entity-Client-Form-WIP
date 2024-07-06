import { Injectable } from '@angular/core';
import { Entityfr } from '../models/entity-fr'
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class EntityFrService {
  private url = "Entityfr";

  constructor(private http: HttpClient) { }

  public getEntities() : Observable<Entityfr[]> {
    
    return this.http.get<Entityfr[]>(`${environment.apiUrl}/${this.url}`);
  }
}
