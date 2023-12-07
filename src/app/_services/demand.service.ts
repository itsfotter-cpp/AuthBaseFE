import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeDemand } from '../model/type-demand';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  PATH_OF_API = "http://localhost:9090/api/demand";

  constructor(private httpClient: HttpClient) { }

  public getTypeDemand() : Observable<TypeDemand[]> {
    return this.httpClient.get<TypeDemand[]>(this.PATH_OF_API + "/type");
  }

}
