import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import {  HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CocktailService {



  constructor(public http : HttpClient) { 

  }

  public getCocktails():Observable<any> {
    const obs = this.http.get('/assets/cocktails.json')

    const treatment = (param_data: any) => {
      return param_data.cocktails as []
    }

    return obs.pipe(map(treatment));
  }
}


