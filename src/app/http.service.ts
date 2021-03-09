import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly endpoint: string;

  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  };

  private headerOptions = {
    observe: 'response' as 'response'
  };

  constructor(private http: HttpClient) {
    this.endpoint = environment.APIEndpoint;
  }
  createQuery(parameters: object) {
    let query = '';
    if (typeof parameters !== 'object') {
      return '';
    }
    for (const key of Object.keys(parameters)) {
      const value = parameters[key];
      const prefix = query.length === 0 ? '?' : '&';

      query += `${prefix}${key}=${value}`;
    }

    return query;
  }

  public createURL(path: string, parameters: object) {
    const query = this.createQuery(parameters);
    return `${this.endpoint}${path}${query}`;
  }

  public get<T>(path: string, parameters?: object) {
    const url = this.createURL(path, parameters);
    return this.http.get<T>(url, this.headerOptions);
  }

  public post(path: string, body: object | string) {
    return this.http.post(this.endpoint + path, body, this.headerOptions);
  }

  public put(path: string, body: object) {
    return this.http.put(this.endpoint + path, body, this.headerOptions);
  }

  public delete(path: string) {
    return this.http.delete(this.endpoint + path, this.headerOptions);
  }
}
