import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Trainee Desktop Developer",
        p:"Asimov Jr. | mai 2026 - Present"
      },
      text: "Trainee na Asimov Jr., atuando no desenvolvimento de projetos desktop, com foco em programação, trabalho em equipe e desenvolvimento de soluções tecnológicas."
    },

    {
      summary: {
        strong: "Marketing",
        p:"Fundação Asimo | jul 2025 - Present"
      },
      text: "Integrante da equipe de Marketing da Fundação Asimo, projeto de extensão da UNIFEI voltado ao ensino de robótica em escolas públicas, atuando na divulgação de atividades, produção de conteúdo e apoio às ações do projeto."
    },

    {
      summary: {
        strong: "Representante Discente",
        p:"Diretório Academico de Computação | jul 2025 - Present"
      },
      text: "Representante discente no DACOMP, contribuindo para a representação dos estudantes, organização de eventos e fortalecimento da comunicação entre os alunos e a instituição."
    },

    {
      summary: {
        strong: "Secretária",
        p:"Amanda Neves Regularização de imóveis | set 2024 - fev 2025"
      },
      text: "Secretária no escritório Amanda Neves Regularização de Imóveis, responsável pelo atendimento ao cliente, organização de documentos e apoio às rotinas administrativas do escritório."
    }
  ]) 

}
