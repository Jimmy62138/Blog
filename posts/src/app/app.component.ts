import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'posts';
  
  posts = [
  {
  title: 'Mon premier post',
  content: 'La Cigale ayant chanté tout l’été se trouva fort dépourvue quand la bise fut venue. Pas un seul petit morceau de mouche ou de vermisseau. Elle alla crier famine chez la Fourmi sa voisine la priant de lui prêter quelque grain pour subsister jusqu à la saison nouvelle...',
  loveIts: 0,
  created_at: new Date()
  },
  {
  title: 'Mon deuxième post',
  content: 'La Cigale ayant chanté tout l’été se trouva fort dépourvue quand la bise fut venue. Pas un seul petit morceau de mouche ou de vermisseau. Elle alla crier famine chez la Fourmi sa voisine la priant de lui prêter quelque grain pour subsister jusqu à la saison nouvelle...',
  loveIts: 0,
  created_at: new Date()
  },
  {
  title: 'Encore un post',
  content: 'La Cigale ayant chanté tout l’été se trouva fort dépourvue quand la bise fut venue. Pas un seul petit morceau de mouche ou de vermisseau. Elle alla crier famine chez la Fourmi sa voisine la priant de lui prêter quelque grain pour subsister jusqu à la saison nouvelle...',
  loveIts: 0,
  created_at: new Date()
  }
  ];
}
