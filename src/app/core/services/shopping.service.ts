import { Injectable } from '@angular/core';
import {ProductItem} from "../models/product-item";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  productItemUrl = 'https://63c9e84b904f040a96666655.mockapi.io/api/v1/';
  // @ts-ignore
  private _productItems: BehaviorSubject<ProductItem[]>;

  private dataStore: {
    productItems: ProductItem[];
  }

  constructor(private http: HttpClient) {
    this.dataStore = {productItems: []};
  }

  get productItems(): Observable<ProductItem[]> {
      return this._productItems.asObservable();
  }

  loadAll() {
    return this.http.get<ProductItem[]>(this.productItemUrl)
      .subscribe({
        next: (res) => {
          this.dataStore.productItems = res;
          this._productItems.next(Object.assign({}, this.dataStore).productItems);
        },
        error: (err) => console.error(err),
        complete: () => console.info('Done')
      })
  }

}
