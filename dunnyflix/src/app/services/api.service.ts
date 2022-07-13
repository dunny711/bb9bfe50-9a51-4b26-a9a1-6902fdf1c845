import { Inject, Injectable, Optional }  from '@angular/core';
import { HttpClient, HttpHeaders}  from '@angular/common/http';

import { Observable, of }   from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/model/movie';
import { Data } from "./data";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected basePath = 'https://0.0.0.0/v1';
  public defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient) {
      if (environment.basePath) {
          this.basePath = environment.basePath;
      }
  }

  public getProjects(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

    let headers = this.defaultHeaders;
    // to determine the Accept header
    headers = headers.set('Accept', 'application/json');

    // to determine the Content-Type header
    const consumes: string[] = [
    ];
    // return of(Data)
    return this.httpClient.request<Array<Movie>>('get',`${this.basePath}/events/uk/london`,
        {
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
    );
  }
}
