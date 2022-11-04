import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig, AppConfiguration } from 'src/configuration';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {  
  constructor(@Inject(AppConfig) private readonly appConfig: AppConfiguration,private router: Router,private http : HttpClient) {}

  getList(): Observable<any> {
    return this.http
      .get<any>(this.appConfig.API + 'api/v1/product')
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  getImage(): Observable<any> {
    return this.http
      .get<any>(this.appConfig.API + 'api/v1/product/attribute/image')
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  getDetail(): Observable<any> {
    return this.http
      .get<any>(this.appConfig.API + 'api/v1/product/attribute/detail')
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  getColor(): Observable<any> {
    return this.http
      .get<any>(this.appConfig.API + 'api/v1/product/attribute/color')
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  insertImage(req: any): Observable<any> {
    return this.http
      .post<any>(this.appConfig.API + 'api/v1/product/attribute/image', req)
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  insertDetail(req: any): Observable<any> {
    return this.http
      .post<any>(this.appConfig.API + 'api/v1/product/attribute/detail', req)
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  insertColor(req: any): Observable<any> {
    return this.http
      .post<any>(this.appConfig.API + 'api/v1/product/attribute/color', req)
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  save(product: any): Observable<any> {
    return this.http
      .post<any>(this.appConfig.API + 'api/v1/product', product)
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  delete(id: any): Observable<any> {
    return this.http
      .delete<any>(this.appConfig.API + 'api/v1/product/' + id)
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  deleteImage(id: any): Observable<any> {
    return this.http
      .delete<any>(this.appConfig.API + 'api/v1/product/attribute/image/' + id)
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  deleteDetail(id: any): Observable<any> {
    return this.http
      .delete<any>(this.appConfig.API + 'api/v1/product/attribute/detail/' + id)
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  deleteColor(id: any): Observable<any> {
    return this.http
      .delete<any>(this.appConfig.API + 'api/v1/product/attribute/color/' + id)
      .pipe(
        map((z) => {
          return z;
        })
      );
  }
}
