'use client';

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  ChartNoAxesCombined,
  Database,
  GitBranch,
  Globe,
  LayoutDashboard,
  LineChart,
  LockKeyhole,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

export default function CampaignPage() {
  return (
    <main className='min-h-screen overflow-hidden bg-black text-white'>
      {/* HERO */}
      <section className='relative overflow-hidden px-6 py-10 md:px-20'>
        <div className='absolute right-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-3xl' />
        <div className='absolute bottom-0 left-[-160px] h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl' />

        <a
          href='/'
          className='relative z-10 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white'
        >
          <ArrowLeft size={18} />
          Voltar para Devify
        </a>

        <div className='relative z-10 mt-20 grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center'>
          <div>
            <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
              Campaign Intelligence Platform
            </p>

            <h1 className='mt-6 text-5xl font-black leading-tight md:text-7xl'>
              Transformamos dados em{' '}
              <span className='bg-gradient-to-r from-cyan-300 via-white to-cyan-500 bg-clip-text text-transparent'>
                inteligência de marketing.
              </span>
            </h1>

            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300'>
              Plataforma fullstack desenvolvida para empresas que precisam
              visualizar lucro real, métricas estratégicas e performance de
              campanhas em um único dashboard inteligente.
            </p>

            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <a
                href='https://wa.me/5571991674248'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-white'
              >
                Quero um sistema assim <ArrowRight size={20} />
              </a>

              <a
                href='https://campaign-intelligence-platform-roan.vercel.app/'
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

      {/* PROBLEMAS */}
      <section className='px-6 py-24 md:px-20'>
        <div className='grid gap-6 md:grid-cols-3'>
          <PainPoint
            title='Dados descentralizados'
            text='Métricas espalhadas entre plataformas dificultam decisões rápidas.'
          />

          <PainPoint
            title='ROAS sem contexto'
            text='Empresas investem em tráfego sem visualizar lucro real da operação.'
          />

          <PainPoint
            title='Baixa previsibilidade'
            text='Sem inteligência centralizada, o crescimento vira tentativa e erro.'
          />
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className='px-6 py-24 md:px-20'>
        <div className='rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-white/[0.03] p-8 md:p-12'>
          <p className='font-semibold uppercase tracking-[0.3em] text-cyan-300'>
            Solução criada
          </p>

          <div className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            <Feature icon={<LayoutDashboard />} title='Dashboard inteligente' />

            <Feature
              icon={<ChartNoAxesCombined />}
              title='KPIs em tempo real'
            />

            <Feature icon={<BrainCircuit />} title='Insights estratégicos' />

            <Feature icon={<LineChart />} title='ROAS automatizado' />
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className='px-6 py-24 md:px-20'>
        <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
          Tecnologias
        </p>

        <h2 className='mt-4 max-w-4xl text-4xl font-black md:text-6xl'>
          Arquitetura moderna e escalável.
        </h2>

        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          <Tech title='Node.js' />
          <Tech title='TypeScript' />
          <Tech title='React' />
          <Tech title='Prisma ORM' />
          <Tech title='JWT Auth' />
          <Tech title='Recharts' />
          <Tech title='CI/CD' />
          <Tech title='GitHub Actions' />
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className='px-6 py-24 md:px-20'>
        <div className='grid gap-6 md:grid-cols-3'>
          <Highlight
            icon={<LockKeyhole />}
            title='Autenticação JWT'
            text='Segurança moderna para acesso e proteção dos dados.'
          />

          <Highlight
            icon={<Workflow />}
            title='API RESTful'
            text='Estrutura preparada para integração e escalabilidade.'
          />

          <Highlight
            icon={<Rocket />}
            title='Deploy moderno'
            text='Pipeline automatizado com CI/CD e monitoramento.'
          />
        </div>
      </section>

      {/* RESULTADOS */}
      <section className='px-6 py-24 md:px-20'>
        <div className='rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12'>
          <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
            Resultado
          </p>

          <h2 className='mt-4 text-4xl font-black md:text-6xl'>
            Clareza financeira e decisões orientadas por dados.
          </h2>

          <div className='mt-12 grid gap-6 md:grid-cols-4'>
            <Metric value='ROI' label='mais previsível' />
            <Metric value='KPIs' label='centralizados' />
            <Metric value='ROAS' label='automatizado' />
            <Metric value='Dados' label='em tempo real' />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='px-6 pb-24 md:px-20'>
        <div className='rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-white/[0.03] p-8 md:p-12'>
          <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='font-semibold uppercase tracking-[0.3em] text-cyan-300'>
                Devify
              </p>

              <h2 className='mt-4 text-4xl font-black'>
                Quer um sistema inteligente para sua empresa?
              </h2>

              <p className='mt-4 max-w-2xl text-zinc-400'>
                Desenvolvemos plataformas modernas, escaláveis e com foco em
                resultado real.
              </p>
            </div>

            <a
              href='https://wa.me/5571991674248'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-black transition hover:bg-cyan-300'
            >
              Falar com a Devify <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* COMPONENTES */

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
          Campaign Intelligence
        </p>

        <h2 className='mt-5 text-3xl font-black'>
          Marketing Analytics Dashboard
        </h2>

        <div className='mt-8 grid grid-cols-2 gap-4'>
          <Metric value='R$ 420K' label='investimento total' />
          <Metric value='5.8x' label='ROAS médio' />
          <Metric value='38%' label='lucro líquido' />
          <Metric value='92%' label='assertividade' />
        </div>

        <div className='mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
          <p className='text-sm text-zinc-400'>Performance das campanhas</p>

          <div className='mt-5 space-y-4'>
            <Progress label='Meta Ads' value='84%' />
            <Progress label='Google Ads' value='71%' />
            <Progress label='TikTok Ads' value='63%' />
          </div>
        </div>
      </div>
    </div>
  );
}

function PainPoint({ title, text }: { title: string; text: string }) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-8'>
      <h3 className='text-2xl font-black'>{title}</h3>
      <p className='mt-4 leading-relaxed text-zinc-400'>{text}</p>
    </div>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className='rounded-3xl border border-white/10 bg-black/40 p-6'>
      <div className='mb-4 text-cyan-300'>{icon}</div>
      <h3 className='text-lg font-bold'>{title}</h3>
    </div>
  );
}

function Tech({ title }: { title: string }) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center font-bold transition hover:border-cyan-400/40 hover:bg-white/[0.05]'>
      {title}
    </div>
  );
}

function Highlight({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-8'>
      <div className='mb-5 text-cyan-300'>{icon}</div>

      <h3 className='text-2xl font-black'>{title}</h3>

      <p className='mt-4 leading-relaxed text-zinc-400'>{text}</p>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className='rounded-2xl border border-white/10 bg-white/[0.04] p-4'>
      <p className='text-2xl font-black'>{value}</p>
      <p className='mt-2 text-sm text-zinc-400'>{label}</p>
    </div>
  );
}

function Progress({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className='mb-2 flex justify-between text-sm'>
        <span className='text-zinc-300'>{label}</span>
        <span className='text-cyan-300'>{value}</span>
      </div>

      <div className='h-2 rounded-full bg-white/10'>
        <div
          className='h-2 rounded-full bg-cyan-400'
          style={{ width: value }}
        />
      </div>
    </div>
  );
}
