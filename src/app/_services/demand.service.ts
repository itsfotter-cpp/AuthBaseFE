import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeDemand } from '../model/type-demand';
import { HttpClient } from '@angular/common/http';
import { Demand } from '../model/demand';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  PATH_OF_API = "http://localhost:9090/api/demand";

  constructor(private httpClient: HttpClient) { }

  public getTypeDemand() : Observable<TypeDemand[]> {
    return this.httpClient.get<TypeDemand[]>(this.PATH_OF_API + "/type");
  }

  public insertNewDemandRequest(demand: Demand) : Observable<boolean> {
    return this.httpClient.post<boolean>(this.PATH_OF_API + "/insert-demand", demand);
  }

  public getDemandsFromUser(userName: string) : Observable<Demand[]> {
    return this.httpClient.get<Demand[]>(this.PATH_OF_API + "/manage-demands-by-user/" + userName);
  }

  public getAllDemands() : Observable<Demand[]> {
    return this.httpClient.get<Demand[]>(this.PATH_OF_API + "/manage-all-demands/");
  }

}
