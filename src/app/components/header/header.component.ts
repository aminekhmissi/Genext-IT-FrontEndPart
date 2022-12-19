import { Component } from '@angular/core';
import { FavorisService } from 'src/app/services/favoris.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items = [] as any;
  constructor(private favorisservice: FavorisService) {}
  ngOnInit(): void {
    this.favorisservice.loadFavoris();
    this.items = this.favorisservice.getItems();
  }
}
