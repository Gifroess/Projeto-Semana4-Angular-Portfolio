import { Component, signal } from '@angular/core';

import { IKnowledge } from '../../interface/IKnowledge.inteface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class Knowledge {
 public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
    },

  ]);

}
