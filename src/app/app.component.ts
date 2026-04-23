import { Component } from '@angular/core';

class NavItem {
  constructor(
    public readonly label: string,
    public readonly target: string
  ) {}
}

class SocialLink {
  constructor(
    public readonly platform: string,
    public readonly url: string
  ) {}
}

class ProjectItem {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly tags: string[]
  ) {}
}

class ServiceItem {
  constructor(
    public readonly title: string,
    public readonly description: string
  ) {}
}

class ContactItem {
  constructor(
    public readonly label: string,
    public readonly value: string
  ) {}
}

class SiteProfile {
  constructor(
    public readonly name: string,
    public readonly role: string,
    public readonly specialties: string[],
    public readonly photo: string,
    public readonly about: string[],
    public readonly technologies: string[],
    public readonly projects: ProjectItem[],
    public readonly services: ServiceItem[],
    public readonly contacts: ContactItem[],
    public readonly navItems: NavItem[],
    public readonly socialLinks: SocialLink[]
  ) {}
}

class SiteProfileFactory {
  public static create(): SiteProfile {
    return new SiteProfile(
      'Arthur Gustavo da Cruz',
      'Desenvolvedor FUll Stack',
      ['Angular', 'C#', 'Python', 'VBA', 'SQL Server'],
      '/foto.jpg',
      [
        'Sou desenvolvedor de software com foco em aplicações corporativas e automação de processos.',
        'Tenho experiência no desenvolvimento de APIs em .NET, aplicações frontend em Angular, bancos SQL Server e Cloudera e arquitetura baseada em boas práticas como Clean Architecture, SOLID e DDD.',
        'Também atuo na modernização de sistemas legados, integração entre aplicações e criação de soluções voltadas para produtividade empresarial.'
      ],
      [
        'C#',
        '.Net Core',
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'SCSS',
        'Git',
        'RPA',
        'VBA',
        'Automações',
        'Python'
      ],
      [
        new ProjectItem(
          'Portal Institucional',
          'Landing page completa para apresentação de marca, com foco em velocidade e SEO técnico.',
          ['Angular', 'SSR', 'SCSS']
        ),
        new ProjectItem(
          'Dashboard Comercial',
          'Interface para acompanhamento de indicadores e ações da equipe de vendas.',
          ['TypeScript', 'UX', 'Componentização']
        ),
        new ProjectItem(
          'Site de Portfólio',
          'Site pessoal com seções de projetos, serviços e contato para presença digital profissional.',
          ['Angular', 'Responsivo', 'Acessível']
        )
      ],
      [
        new ServiceItem(
          'Criação de Sites',
          'Construção de sites institucionais, e-commerces, workflows e páginas de apresentação.'
        ),
        new ServiceItem(
          'Criação de APIs',
          'Criação e manutenção de APIs e microsserviços para manter regras de negócio.'
        ),
        new ServiceItem(
          'Automatização de Rotinas e Processos',
          'Mapeamento de processos e automatização de rotinas periódicas, relatórios gerenciais e analítcos.'
        ),
        new ServiceItem(
          'Ferramentas Desktop',
          'Criação de ferramentas para Windows.'
        )
      ],
      [
        new ContactItem('E-mail', 'devarthurcruz@outlook.com'),
        new ContactItem('WhatsApp', '+55 (11) 95293-0304'),
        new ContactItem('Localização', 'São Paulo, Brasil')
      ],
      [
        new NavItem('Sobre', '#sobre'),
        new NavItem('Tecnologias', '#tecnologias'),
        new NavItem('Projetos', '#projetos'),
        new NavItem('Serviços', '#servicos'),
        new NavItem('Contato', '#contato')
      ],
      [
        new SocialLink('LinkedIn', 'https://www.linkedin.com/in/arthur-gustavo-da-cruz-120493128/'),
        new SocialLink('GitHub', 'https://github.com/')
      ]
    );
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public readonly profile = SiteProfileFactory.create();
  public isMenuOpen = false;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public closeMenu(): void {
    this.isMenuOpen = false;
  }
}
