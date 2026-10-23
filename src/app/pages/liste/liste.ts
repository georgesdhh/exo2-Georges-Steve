import { Component } from '@angular/core';

interface Film {
  titre: string;
  affiche: string;
}

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {
  films: Film[] = [
    { titre: 'Le Roi Lion', affiche: 'affiches/le-roi-lion.jpg' },
    { titre: 'Toy Story', affiche: 'affiches/toy-story.jpg' },
    { titre: 'Shrek', affiche: 'affiches/shrek.jpg' },
    { titre: 'Kung Fu Panda', affiche: 'affiches/kung-fu-panda.jpg' },
    { titre: 'Le Voyage de Chihiro', affiche: 'affiches/chihiro.jpg' }
  ];

  filmChoisi: Film | null = null;

  choisirFilm(film: Film) {
    this.filmChoisi = film;
  }
}