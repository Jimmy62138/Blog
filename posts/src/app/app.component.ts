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
  content: 'La Cigale ayant chant� tout l��t� se trouva fort d�pourvue quand la bise fut venue. Pas un seul petit morceau de mouche ou de vermisseau. Elle alla crier famine chez la Fourmi sa voisine la priant de lui pr�ter quelque grain pour subsister jusqu � la saison nouvelle...',
  loveIts: 0,
  created_at: new Date()
  },
  {
  title: 'Mon deuxi�me post',
  content: 'La Cigale ayant chant� tout l��t� se trouva fort d�pourvue quand la bise fut venue. Pas un seul petit morceau de mouche ou de vermisseau. Elle alla crier famine chez la Fourmi sa voisine la priant de lui pr�ter quelque grain pour subsister jusqu � la saison nouvelle...',
  loveIts: 0,
  created_at: new Date()
  },
  {
  title: 'Encore un post',
  content: 'La Cigale ayant chant� tout l��t� se trouva fort d�pourvue quand la bise fut venue. Pas un seul petit morceau de mouche ou de vermisseau. Elle alla crier famine chez la Fourmi sa voisine la priant de lui pr�ter quelque grain pour subsister jusqu � la saison nouvelle...',
  loveIts: 0,
  created_at: new Date()
  }
  ];
  
}
