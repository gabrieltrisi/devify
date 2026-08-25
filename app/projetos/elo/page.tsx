import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  ClipboardList,
  FileText,
  LayoutDashboard,
  ShieldCheck,
  Users,
} from 'lucide-react';

const ELO_URL = 'https://elo-rh-system.vercel.app';

export default function EloPage() {
  return (
    <main className='min-h-screen overflow-hidden bg-black text-white'>
      <section className='relative px-6 py-10 md:px-20'>
        <div className='absolute right-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-3xl' />
        <div className='absolute bottom-0 left-[-160px] h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl' />

        <a
          href='/'
          className='relative z-10 flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white'
        >
          <ArrowLeft size={18} />
          Voltar
        </a>

        <div className='relative z-10 mt-20 grid items-center gap-12 lg:grid-cols-2'>
          <div>
            <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
              ELO System
            </p>

            <h1 className='mt-6 text-5xl font-black leading-tight md:text-7xl'>
              Gestão completa de pessoas com{' '}
              <span className='bg-gradient-to-r from-cyan-300 via-white to-cyan-500 bg-clip-text text-transparent'>
                controle total da operação.
              </span>
            </h1>

            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300'>
              O ELO System organiza toda a gestão de RH, colaboradores,
              documentos, processos internos, jornada, treinamentos e
              indicadores em uma única plataforma.
            </p>

            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <a
                href={ELO_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-white'
              >
                Acessar sistema <ArrowRight size={20} />
              </a>

              <a
                href='#modulos'
                className='inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 font-bold transition hover:bg-white/10'
              >
                Ver módulos
              </a>
            </div>
          </div>

          <DashboardMock />
        </div>
      </section>

      <section className='grid gap-6 px-6 py-24 md:grid-cols-3 md:px-20'>
        <Card
          title='Informação espalhada'
          text='Dados de colaboradores, documentos e processos ficam perdidos entre planilhas, pastas, e-mails e mensagens.'
        />
        <Card
          title='Falta de controle'
          text='O RH não consegue visualizar pendências, documentos, jornada, benefícios e processos em tempo real.'
        />
        <Card
          title='Retrabalho constante'
          text='Processos manuais aumentam erros, atrasos e esforço operacional dentro da gestão de pessoas.'
        />
      </section>

      <section className='px-6 py-24 md:px-20'>
        <div className='rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-white/[0.03] p-8 md:p-12'>
          <p className='font-semibold uppercase tracking-[0.3em] text-cyan-300'>
            Diferencial principal
          </p>

          <h2 className='mt-6 max-w-4xl text-4xl font-black md:text-6xl'>
            Tudo que o RH precisa em uma plataforma centralizada.
          </h2>

          <p className='mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300'>
            O ELO System conecta administração, pessoas, compliance, jornada,
            departamento pessoal e gestão em um único ambiente, trazendo mais
            organização, rastreabilidade e inteligência para a operação.
          </p>
        </div>
      </section>

      <section id='modulos' className='px-6 py-24 md:px-20'>
        <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
          Módulos
        </p>

        <h2 className='mt-4 max-w-4xl text-4xl font-black md:text-6xl'>
          Gestão completa de RH, pessoas e processos.
        </h2>

        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          <Module
            icon={<Users />}
            title='Colaboradores'
            text='Cadastro completo, histórico profissional, dados pessoais e gestão de equipes.'
          />
          <Module
            icon={<ClipboardList />}
            title='Pré-admissão & Onboarding'
            text='Fluxo completo desde a entrada do colaborador até sua integração.'
          />
          <Module
            icon={<FileText />}
            title='Documentos e arquivos'
            text='Centralização de contratos, registros, anexos e documentos importantes.'
          />
          <Module
            icon={<BadgeCheck />}
            title='Jornada e ponto'
            text='Folha de ponto, banco de horas, escalas e acompanhamento da rotina.'
          />
          <Module
            icon={<ShieldCheck />}
            title='Compliance'
            text='Atestados, advertências, suspensões, afastamentos e histórico disciplinar.'
          />
          <Module
            icon={<BookOpenCheck />}
            title='Treinamentos'
            text='Gestão de capacitação, desenvolvimento e evolução dos colaboradores.'
          />
          <Module
            icon={<LayoutDashboard />}
            title='Dashboard e relatórios'
            text='Indicadores estratégicos para decisões mais rápidas e organizadas.'
          />
          <Module
            icon={<Users />}
            title='Recrutamento e desempenho'
            text='Controle de vagas, candidatos, avaliações, desempenho e evolução interna.'
          />
        </div>
      </section>

      <section className='grid items-center gap-10 px-6 py-24 md:px-20 lg:grid-cols-2'>
        <div>
          <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
            Painel do sistema
          </p>

          <h2 className='mt-4 text-4xl font-black md:text-6xl'>
            Visual completo da operação de RH.
          </h2>

          <p className='mt-6 leading-relaxed text-zinc-300'>
            Tenha controle total dos colaboradores, pendências, documentos,
            treinamentos, jornada e indicadores em um único painel estratégico.
          </p>

          <a
            href={ELO_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-black transition hover:bg-cyan-300'
          >
            Abrir projeto pronto <ArrowRight size={20} />
          </a>
        </div>

        <div className='rounded-[2rem] border border-white/10 bg-white/[0.04] p-6'>
          <Metric title='Colaboradores ativos' value='124' />
          <Metric title='Documentos gerenciados' value='1.2k' />
          <Metric title='Treinamentos ativos' value='18' />
          <Metric title='Pendências operacionais' value='7' />
        </div>
      </section>

      <section className='grid gap-6 px-6 py-24 md:grid-cols-4 md:px-20'>
        <Benefit
          title='Organização'
          text='Informações centralizadas e estruturadas.'
        />
        <Benefit title='Controle' text='Visão completa da operação de RH.' />
        <Benefit
          title='Produtividade'
          text='Menos tarefas manuais e retrabalho.'
        />
        <Benefit
          title='Decisão'
          text='Indicadores claros para decisões melhores.'
        />
      </section>

      <section className='px-6 pb-24 md:px-20'>
        <div className='flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:flex-row md:p-12'>
          <div>
            <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
              Projeto pronto
            </p>

            <h2 className='mt-4 text-3xl font-black md:text-4xl'>
              Conheça o ELO System funcionando.
            </h2>

            <p className='mt-3 max-w-2xl text-zinc-400'>
              Acesse a plataforma publicada e veja como a solução foi pensada
              para modernizar a gestão de RH.
            </p>
          </div>

          <div className='flex flex-col gap-3 sm:flex-row'>
            <a
              href={ELO_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-white'
            >
              Acessar sistema <ArrowRight size={20} />
            </a>

            <a
              href='https://wa.me/5571991674248'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-4 font-bold text-white transition hover:bg-white/10'
            >
              Falar com a Devify
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function DashboardMock() {
  return (
    <div className='rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_80px_rgba(34,211,238,0.12)]'>
      <div className='mb-5 flex gap-2'>
        <span className='h-3 w-3 rounded-full bg-red-400' />
        <span className='h-3 w-3 rounded-full bg-yellow-400' />
        <span className='h-3 w-3 rounded-full bg-green-400' />
      </div>

      <div className='rounded-3xl border border-white/10 bg-black/60 p-6'>
        <p className='text-sm uppercase tracking-[0.25em] text-cyan-300'>
          elo-rh-system.vercel.app/dashboard
        </p>

        <h3 className='mt-5 text-3xl font-black'>Dashboard RH</h3>

        <div className='mt-8 grid grid-cols-2 gap-4'>
          <MetricBox title='Colaboradores' value='124' />
          <MetricBox title='Documentos' value='1.2k' />
          <MetricBox title='Pendências' value='7' />
          <MetricBox title='Treinamentos' value='18' />
        </div>

        <div className='mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5'>
          <p className='font-bold text-cyan-300'>Gestão centralizada</p>
          <p className='mt-2 text-sm text-zinc-300'>
            Pessoas, documentos, jornada e processos em uma visão única.
          </p>
        </div>
      </div>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-6'>
      <p className='text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400'>
        Dor real
      </p>
      <h3 className='mt-4 text-xl font-bold'>{title}</h3>
      <p className='mt-3 leading-relaxed text-zinc-400'>{text}</p>
    </div>
  );
}

function Module({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className='group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06]'>
      <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-black'>
        {icon}
      </div>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='mt-2 text-sm leading-relaxed text-zinc-400'>{text}</p>
    </div>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className='mb-5 rounded-2xl border border-white/10 bg-black/40 p-5 last:mb-0'>
      <p className='text-sm text-zinc-400'>{title}</p>
      <p className='mt-2 text-3xl font-black text-white'>{value}</p>
    </div>
  );
}

function MetricBox({ title, value }: { title: string; value: string }) {
  return (
    <div className='rounded-2xl border border-white/10 bg-white/[0.04] p-4'>
      <p className='text-sm text-zinc-400'>{title}</p>
      <p className='mt-2 text-2xl font-black text-white'>{value}</p>
    </div>
  );
}

function Benefit({ title, text }: { title: string; text: string }) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-6'>
      <h3 className='font-bold'>{title}</h3>
      <p className='mt-2 text-sm text-zinc-400'>{text}</p>
    </div>
  );
}
