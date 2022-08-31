import { HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url:string = "http://localhost:3000/"
  url:string = "https://backend-pharmatech.herokuapp.com/"

  private showRoutes = 0;
  private get headers() {
    return {
      'Content-Type': 'application/json',
      // 'x-auth': this.esl.evt.token,
    };
  }
  constructor(public https: HttpClient) {}
  private logRoutes(
    method: 'get' | 'post' | 'put' |'patch' | 'delete',
    route:any,
    ...extras:any[]
  ) {
    if (this.showRoutes) {
      console.log(method, route, ...extras);
    }
  }


  post<T>(route: string, body:any) {
    return this.https.post<T>(encodeURI(route), body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'x-auth': this.esl.evt.token,
      }),
      observe:'body',
      responseType: 'json',
    });
  }

  get = <T = any>(route: string, parameters?:any) => {
    const query = parameters ? route + '?' + Object.keys(parameters)
          .map((key) => `${key} = ${parameters[key]}`)
          .join('&')
      : route;
    this.logRoutes('get', route, parameters);
    return this.https.get<T>(query, {
      headers: new HttpHeaders(this.headers),
      responseType: 'json',
      observe:'body',
    });
  };

  put(route: string, body:any) {
    return this.https.put(route, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'x-auth': this.esl.evt.token,
      }),
      observe:'body',
      responseType: 'json',
    });
  }
  patch(route: string, body:any) {
    return this.https.patch(route, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'x-auth': this.esl.evt.token,
      }),
      observe:'body',
      responseType: 'json',
    });
  }
  delete(route: string, body?:any) {
    return this.https.request(
      new HttpRequest('DELETE', route, body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'x-auth': this.esl.evt.token,
        }),
        responseType: 'json',
        
      })
    );
  }
}
