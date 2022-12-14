import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavorisService {
  items = [] as any;
  constructor() {}
  addToFavoris(addedLodge: any) {
    this.items.push(addedLodge);
    this.saveFavoris();
  }
  LodgeInFavoris(lodge: any): boolean {
    return (
      this.items.findIndex((element: any) => element._id === lodge._id) > -1
    );
  }
  loadFavoris(): void {
    this.items = JSON.parse(localStorage.getItem('favoris_items')!);
  }
  getItems() {
    return this.items;
  }
  saveFavoris(): void {
    localStorage.setItem('favoris_items', JSON.stringify(this.items));
  }
  removeFavoris(lodge: any) {
    console.log(this.items);
    const index = this.items.findIndex(
      (element: any) => element._id === lodge._id
    );
    if (index > -1) {
      this.items.splice(index, 1);
      this.saveFavoris();
    }
  }
}
