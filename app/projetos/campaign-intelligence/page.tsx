import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Database,
  LineChart,
  ShieldCheck,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';

export default function CampaignPage() {
  return (
    <main className='min-h-screen overflow-hidden bg-black text-white'>
      {/* HERO */}
      <section className='relative overflow-hidden px-6 py-10 md:px-20'>
        <div className='absolute right-[-200px] top-10 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-3xl' />
        <div className='absolute bottom-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl' />

        <a
          href='/'
          className='relative z-10 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white'
        >
          <ArrowLeft size={18} />
          Voltar para Devify
        </a>

        <div className='relative z-10 mt-20 grid gap-14 lg:grid-cols-2 lg:items-center'>
          <div>
            <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
              Campaign Intelligence Platform
            </p>

            <h1 className='mt-6 text-5xl font-black leading-tight md:text-7xl'>
              Inteligência de marketing com{' '}
              <span className='bg-gradient-to-r from-cyan-300 via-white to-cyan-500 bg-clip-text text-transparent'>
                visão real de lucro.
              </span>
            </h1>

            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300'>
              Plataforma desenvolvida para transformar campanhas, métricas e
              investimentos em decisões estratégicas orientadas por dados.
            </p>

            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <a
                href='https://wa.me/5571991674248'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-white'
              >
                Quero algo assim
                <ArrowRight size={20} />
              </a>

              <a
                href='https://campaign-intelligence.vercel.app'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-4 font-bold text-white transition hover:bg-white/10'
              >
                Acessar plataforma
              </a>
            </div>
          </div>

          <DashboardMock />
        </div>
      </section>

      {/* DORES */}
      <section className='px-6 py-24 md:px-20'>
        <div className='grid gap-6 md:grid-cols-3'>
          <Pain
            title='Dados descentralizados'
            text='Informações espalhadas entre plataformas e planilhas.'
          />

          <Pain
            title='Métricas confusas'
            text='Empresas investem sem visualizar lucro real.'
          />

          <Pain
            title='Baixa previsibilidade'
            text='Decisões sem clareza estratégica e sem visão financeira.'
          />
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className='px-6 py-24 md:px-20'>
        <div className='rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-white/[0.03] p-8 md:p-14'>
          <p className='font-semibold uppercase tracking-[0.3em] text-cyan-300'>
            Solução Devify
          </p>

          <h2 className='mt-6 text-4xl font-black md:text-6xl'>
            Dashboard inteligente para operações de marketing.
          </h2>

          <p className='mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300'>
            Centralizamos campanhas, métricas, ROI, lucro e indicadores
            estratégicos em uma única plataforma moderna e escalável.
          </p>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className='px-6 py-24 md:px-20'>
        <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
          Recursos
        </p>

        <h2 className='mt-4 max-w-4xl text-4xl font-black md:text-6xl'>
          Inteligência estratégica em tempo real.
        </h2>

        <div className='mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          <Module
            icon={<BarChart3 />}
            title='Dashboard'
            text='KPIs e métricas organizadas em tempo real.'
          />

          <Module
            icon={<TrendingUp />}
            title='ROAS Inteligente'
            text='Análise automatizada de retorno sobre investimento.'
          />

          <Module
            icon={<BrainCircuit />}
            title='Insights'
            text='Decisões orientadas por comportamento e performance.'
          />

          <Module
            icon={<Database />}
            title='Centralização'
            text='Dados conectados em uma única operação.'
          />

          <Module
            icon={<Target />}
            title='Campanhas'
            text='Gestão estratégica de campanhas e canais.'
          />

          <Module
            icon={<LineChart />}
            title='Analytics'
            text='Visualização clara de lucro e crescimento.'
          />

          <Module
            icon={<ShieldCheck />}
            title='Segurança'
            text='Autenticação e arquitetura profissional.'
          />

          <Module
            icon={<Zap />}
            title='Performance'
            text='Sistema rápido, moderno e escalável.'
          />
        </div>
      </section>

      {/* STACK */}
      <section className='px-6 py-24 md:px-20'>
        <div className='grid gap-10 lg:grid-cols-2 lg:items-center'>
          <div>
            <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
              Stack utilizada
            </p>

            <h2 className='mt-4 text-4xl font-black md:text-6xl'>
              Engenharia fullstack moderna.
            </h2>

            <p className='mt-6 text-lg leading-relaxed text-zinc-300'>
              Plataforma construída com foco em performance, escalabilidade e
              arquitetura SaaS profissional.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            {[
              'Node.js',
              'TypeScript',
              'React',
              'Prisma',
              'JWT',
              'Recharts',
              'CI/CD',
              'GitHub Actions',
            ].map((item) => (
              <div
                key={item}
                className='rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center font-semibold'
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='px-6 pb-24 md:px-20'>
        <div className='rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12'>
          <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
                Devify
              </p>

              <h2 className='mt-4 text-4xl font-black'>
                Quer um sistema inteligente assim?
              </h2>

              <p className='mt-4 max-w-2xl text-zinc-400'>
                Criamos plataformas modernas para empresas que precisam crescer
                com dados, automação e inteligência.
              </p>
            </div>

            <a
              href='https://wa.me/5571991674248'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-black transition hover:bg-cyan-300'
            >
              Falar com a Devify
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function DashboardMock() {
  return (
    <div className='rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_80px_rgba(34,211,238,0.15)]'>
      <div className='grid grid-cols-2 gap-4'>
        <Metric title='Receita' value='R$ 278K' />
        <Metric title='Lucro' value='R$ 183K' />
        <Metric title='ROAS' value='2.92' />
        <Metric title='Campanhas' value='12' />
      </div>

      <div className='mt-6 rounded-3xl border border-white/10 bg-black/50 p-6'>
        <p className='text-sm text-zinc-400'>Performance</p>

        <div className='mt-4 h-44 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-transparent' />
      </div>
    </div>
  );
}

function Pain({ title, text }: any) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-8'>
      <h3 className='text-2xl font-black'>{title}</h3>
      <p className='mt-4 leading-relaxed text-zinc-400'>{text}</p>
    </div>
  );
}

function Module({ icon, title, text }: any) {
  return (
    <div className='group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-2 hover:border-cyan-400/40'>
      <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300'>
        {icon}
      </div>

      <h3 className='text-xl font-bold'>{title}</h3>

      <p className='mt-3 text-sm leading-relaxed text-zinc-400'>{text}</p>
    </div>
  );
}

function Metric({ title, value }: any) {
  return (
    <div className='rounded-2xl border border-white/10 bg-black/40 p-5'>
      <p className='text-sm text-zinc-400'>{title}</p>
      <p className='mt-2 text-3xl font-black'>{value}</p>
    </div>
  );
}
