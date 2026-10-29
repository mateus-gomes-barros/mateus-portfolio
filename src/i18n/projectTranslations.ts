import type { Project } from '@/types'

export const projectTranslations: Record<string, Pick<Project, 'title' | 'role' | 'description' | 'features' | 'impact' | 'imageAlt'>> = {
  'minimal-productivity-app': {
    title: 'Focus — Aplicativo de produtividade multiplataforma',
    role: 'Desenvolvedor Full Stack · Criador do produto',
    description: 'Criei o Focus para organizar minha rotina e transformar planos em trabalho concentrado. Após utilizá-lo diariamente e aprimorar a experiência com base em necessidades reais, expandi o projeto para web, iOS, Android, macOS, Windows e Wear OS. O Focus reúne planejamento, sessões de foco e acompanhamento de progresso numa experiência conectada.',
    features: [
      'Dashboard personalizado com planejamento diário, prioridades, tarefas e prazos',
      'Pomodoro vinculado às tarefas, com registro automático do tempo de foco',
      'Projetos e tarefas com agendamento e acompanhamento de progresso',
      'Metas, análises de produtividade, sequências e insígnias de conquistas',
      'Experiência integrada na web, celular, desktop e Wear OS',
      'Focus Pulse: timer dedicado para smartwatch com integração Android',
      'Interfaces responsivas, opções de idioma e notificações por plataforma',
    ],
    impact: 'Desenvolvido e aprimorado continuamente a partir do uso pessoal diário, evoluindo de uma ferramenta de concentração para um produto multiplataforma com gerenciamento de tarefas, acompanhamento de tempo e experiências adaptadas a cada dispositivo.',
    imageAlt: 'Prévia do dashboard do aplicativo Focus',
  },
  turbgen: {
    title: 'TurbGen',
    role: 'Desenvolvedor Frontend · Responsável pelo projeto',
    description: 'Projetei e desenvolvi uma plataforma que gera códigos JavaScript prontos para produção a partir de formulários simples, permitindo que clientes da VTurb configurem comportamentos avançados do player de vídeo sem precisar programar.',
    features: ['Gerador de atraso de vídeo', 'Comportamento em tela cheia', 'Formulários dinâmicos', 'Geração de chamadas para ação (CTA)', 'Interações personalizadas com o player'],
    impact: 'Adotado por quase 200 clientes nos dois primeiros meses, reduzindo em aproximadamente 40% as reclamações de suporte relacionadas a implementações em JavaScript.',
    imageAlt: 'Plataforma de geração de código JavaScript TurbGen',
  },
  'vturb-marketing-website': {
    title: 'Site de marketing da VTurb',
    role: 'Desenvolvedor Frontend',
    description: 'Contribuí para o desenvolvimento do site de marketing da VTurb, uma plataforma SaaS com mais de 10 mil clientes no mundo, criando funcionalidades escaláveis voltadas à aquisição e ao engajamento de clientes.',
    features: ['Chatbot com inteligência artificial', 'Fluxos de descontos personalizados', 'Rastreamento de visitantes para remarketing'],
    impact: 'Contribuí para um aumento aproximado de 10% na retenção de clientes com recursos voltados ao engajamento e marketing.',
    imageAlt: 'Prévia do site de marketing da VTurb',
  },
}

export const otherProjectTranslations: Record<string, { role: string; description: string }> = {
  madev: {
    role: 'Desenvolvedor Full Stack',
    description: 'MaDev — combinação de “Mateus” e “Development” — é uma plataforma de evolução profissional que responde à pergunta: o que estudar agora? Ela separa conhecimento, prática, evidências e preparação profissional, reunindo jornadas de carreira, habilidades, projetos, conquistas e recomendações de IA em um caminho de desenvolvimento personalizado.',
  },
  'music-player': {
    role: 'Desenvolvedor iOS',
    description: 'Um player de música pessoal para iOS, pensado para organizar e aproveitar uma biblioteca com mais de mil músicas. Inspirado no Apple Music e no Spotify Canvas, combina reprodução offline, estatísticas, filtros inteligentes, páginas imersivas de artistas e álbuns e capas animadas disponíveis apenas quando há conexão.',
  },
  'reading-app': {
    role: 'Desenvolvedor Full Stack',
    description: 'Um aplicativo pessoal para acompanhar leituras com a simplicidade das minhas ferramentas de produtividade. Reúne descoberta automática de livros, sessões e progresso de leitura, sequências, estatísticas, calendário visual, anotações, conquistas e compartilhamento social numa experiência tranquila para o dia a dia.',
  },
}
