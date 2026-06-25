import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/GitHub-Logo.png',
      alt: 'Perfil GitHub',
      title: 'Meu perfil no GitHub',
      with: '100px',
      height: '51px',
      description:
        '<p> De uma olhada em meus projetos e acompanhe minha trajetória de aprendizado no GitHub, onde compartilho aplicações, estudos e experiências desenvolvidas ao longo da minha formação em tecnologia.</p> <p>Busco constantemente aprimorar meus conhecimentos em programação, desenvolvimento de software e novas tecnologias, utilizando cada projeto como uma oportunidade para aprender, evoluir e transformar ideias em soluções práticas.</p>',
      links: [
        {
          name: 'Conheça o meu perfil',
          href: 'https://github.com/Gifroess',
        },
      ],
    },

    {
      src: 'assets/img/projects/resume-7.png',
      alt: 'Projeto Currículo',
      title: 'Currículo Profissional',
      with: '100px',
      height: '51px',
      description:
        '<p>Projeto desenvolvido durante a primeira semana de capacitação da área de Projetos Desktop da Asimov Jr.</p><p>A atividade teve como objetivo aplicar, na prática, os conhecimentos adquiridos em Git e GitHub por meio da personalização, versionamento e publicação de um currículo online, utilizando ferramentas amplamente empregadas no desenvolvimento de software.</p>',
      links: [
        {
          name: 'Confira o meu currículo',
          href: 'https://github.com/Gifroess/Gifroess.github.io',
        },
      ],
    },

    {
      src: 'assets/img/projects/portfolio.png',
      alt: 'Projeto Portfólio',
      title: 'Portfólio Profissional',
      with: '100px',
      height: '51px',
      description:
        '<p>Projeto desenvolvido durante a segunda semana de capacitação da área de Projetos Desktop da Asimov Jr.</p><p>A atividade teve como objetivo aprofundar os conhecimentos em HTML e CSS por meio do desenvolvimento de um portfólio online do zero, aplicando conceitos de estruturação, estilização e organização de páginas web para a apresentação de informações e projetos.</p>',
      links: [
        {
          name: 'Confira o meu portfólio',
          href: 'https://github.com/Gifroess/Portfolio-semana2',
        },
      ],
    },

    {
      src: 'assets/img/projects/listaTarefas.png',
      alt: 'Projeto Lista de Tarefas',
      title: 'Lista de Tarefas',
      with: '100px',
      height: '51px',
      description:
        '<p>Projeto desenvolvido durante a terceira semana de capacitação da área de Projetos Desktop da Asimov Jr.</p><p>A atividade teve como objetivo aplicar os conhecimentos em TypesScript por meio do desenvolvimento de uma lista de tarefas interativa, utilizando conceitos de programação funcional e orientada a objetos.</p>',
      links: [
        {
          name: 'Confira a Lista de Tarefas',
          href: 'https://github.com/Gifroess/Projeto-Semana3',
        },
      ],
    },

  ]);

   public openDialog(data: IProjects) {
      this.#dialog.open(DialogProjectsComponent, {
        data,
        panelClass: EDialogPanelClass.PROJECTS,
      });
    }  
}
