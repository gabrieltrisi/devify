import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  CircleDollarSign,
  FileText,
  HardHat,
  PackageCheck,
  ShieldAlert,
  Users,
} from 'lucide-react';

export default function EngeniaPage() {
  return (
    <main className='min-h-screen bg-black text-white overflow-hidden'>
      {/* HERO */}
      <section className='relative px-6 py-10 md:px-20'>
        <div className='absolute right-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-3xl' />
        <div className='absolute bottom-0 left-[-160px] h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl' />

        <a
          href='/'
          className='text-sm text-zinc-400 flex items-center gap-2 hover:text-white'
        >
          <ArrowLeft size={18} />
          Voltar
        </a>

        <div className='mt-20 grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <p className='uppercase tracking-[0.3em] text-cyan-400 font-semibold'>
              EngenIA
            </p>

            <h1 className='mt-6 text-5xl md:text-7xl font-black leading-tight'>
              Gestão de obras com{' '}
              <span className='text-cyan-400'>inteligência real.</span>
            </h1>

            <p className='mt-6 text-zinc-300 text-lg max-w-2xl'>
              A EngenIA centraliza toda a operação de obras e utiliza
              inteligência artificial para gerar orçamentos, prever riscos,
              identificar atrasos e dar suporte na tomada de decisão.
            </p>

            <div className='mt-10 flex gap-4 flex-col sm:flex-row'>
              <a
                href='https://wa.me/5571991674248'
                target='_blank'
                className='bg-cyan-400 text-black px-6 py-4 rounded-xl font-bold hover:bg-white transition'
              >
                Quero isso na minha empresa
              </a>

              <a
                href='https://engenia-app.vercel.app/login'
                target='_blank'
                className='border border-white/20 px-6 py-4 rounded-xl font-bold hover:bg-white/10 transition'
              >
                Acessar sistema <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <DashboardMock />
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className='px-6 md:px-20 py-24 grid md:grid-cols-3 gap-6'>
        <Card
          title='Orçamentos demorados'
          text='Horas ou dias para montar um orçamento completo manualmente.'
        />
        <Card
          title='Falta de controle da obra'
          text='Informações espalhadas e dificuldade de acompanhar evolução real.'
        />
        <Card
          title='Problemas surgem tarde'
          text='Atrasos e custos aparecem quando já impactaram o resultado.'
        />
      </section>

      {/* DIFERENCIAL */}
      <section className='px-6 md:px-20 py-24'>
        <div className='bg-white/[0.03] border border-cyan-400/20 rounded-3xl p-10'>
          <p className='uppercase text-cyan-400 tracking-[0.3em] font-semibold'>
            Diferencial
          </p>

          <h2 className='mt-6 text-4xl md:text-6xl font-black'>
            IA que antecipa problemas antes de virar prejuízo.
          </h2>

          <p className='mt-6 text-zinc-300 max-w-3xl'>
            A EngenIA utiliza inteligência artificial para gerar orçamentos,
            analisar riscos da obra, prever atrasos e alertar a equipe antes que
            o problema cresça.
          </p>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className='px-6 md:px-20 py-24'>
        <p className='uppercase text-cyan-400 tracking-[0.3em] font-semibold'>
          Módulos
        </p>

        <h2 className='mt-4 text-4xl md:text-6xl font-black max-w-4xl'>
          Gestão completa do início ao fim da obra.
        </h2>

        <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Module
            icon={<BrainCircuit />}
            title='Orçamento com IA'
            text='Criação automática de orçamentos com apoio inteligente.'
          />
          <Module
            icon={<HardHat />}
            title='Gestão de Obras'
            text='Controle completo de todas as obras em andamento.'
          />
          <Module
            icon={<CalendarDays />}
            title='Cronograma'
            text='Planejamento e acompanhamento das etapas.'
          />
          <Module
            icon={<CircleDollarSign />}
            title='Financeiro'
            text='Custos previstos vs realizados em tempo real.'
          />
          <Module
            icon={<PackageCheck />}
            title='Suprimentos'
            text='Controle de materiais, compras e fornecedores.'
          />
          <Module
            icon={<ShieldAlert />}
            title='Riscos com IA'
            text='IA detecta atrasos, desvios e possíveis problemas.'
          />
          <Module
            icon={<FileText />}
            title='Documentos'
            text='Centralização de contratos e arquivos.'
          />
          <Module
            icon={<Users />}
            title='Equipe'
            text='Gestão de responsáveis e times da obra.'
          />
        </div>
      </section>

      {/* DASHBOARD */}
      <section className='px-6 md:px-20 py-24 grid lg:grid-cols-2 gap-10 items-center'>
        <div>
          <p className='uppercase text-cyan-400 tracking-[0.3em] font-semibold'>
            Painel inteligente
          </p>

          <h2 className='mt-4 text-4xl md:text-6xl font-black'>
            Visão completa da operação.
          </h2>

          <p className='mt-6 text-zinc-300'>
            Tenha controle total de custos, prazos, evolução e riscos em um
            único painel estratégico.
          </p>
        </div>

        <div className='bg-white/[0.04] border border-white/10 rounded-3xl p-6'>
          <Metric title='Obras ativas' value='12' />
          <Metric title='Orçamentos gerados' value='38' />
          <Metric title='Atrasos detectados' value='3' />
          <Metric title='Economia gerada' value='R$ 245K' />
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className='px-6 md:px-20 py-24 grid md:grid-cols-4 gap-6'>
        <Benefit title='Velocidade' text='Orçamentos em minutos.' />
        <Benefit title='Previsibilidade' text='Antecipe problemas.' />
        <Benefit title='Controle' text='Tudo centralizado.' />
        <Benefit title='Decisão' text='Dados em tempo real.' />
      </section>

      {/* CTA */}
      <section className='px-6 md:px-20 pb-24'>
        <div className='bg-white/[0.03] border border-white/10 rounded-3xl p-10 flex flex-col md:flex-row justify-between items-center gap-6'>
          <div>
            <h2 className='text-3xl md:text-4xl font-black'>
              Quer modernizar sua operação?
            </h2>
            <p className='text-zinc-400 mt-2'>
              A EngenIA pode transformar sua empresa.
            </p>
          </div>

          <a
            href='https://wa.me/5571991674248'
            target='_blank'
            className='bg-white text-black px-6 py-4 rounded-xl font-bold hover:bg-cyan-300 transition'
          >
            Falar com a Devify
          </a>
        </div>
      </section>
    </main>
  );
}

/* COMPONENTES */

function DashboardMock() {
  return (
    <div className='bg-white/[0.04] border border-white/10 rounded-3xl p-6'>
      <h3 className='text-2xl font-bold'>Dashboard EngenIA</h3>
      <p className='text-zinc-400 mt-2'>Controle de obras + IA de risco</p>
    </div>
  );
}

function Card({ title, text }: any) {
  return (
    <div className='bg-white/[0.03] border border-white/10 rounded-3xl p-6'>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='text-zinc-400 mt-3'>{text}</p>
    </div>
  );
}

function Module({ icon, title, text }: any) {
  return (
    <div className='bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:border-cyan-400 transition'>
      <div className='mb-4 text-cyan-400'>{icon}</div>
      <h3 className='font-bold text-lg'>{title}</h3>
      <p className='text-zinc-400 mt-2 text-sm'>{text}</p>
    </div>
  );
}

function Metric({ title, value }: any) {
  return (
    <div className='mb-4'>
      <p className='text-zinc-400 text-sm'>{title}</p>
      <p className='text-2xl font-black'>{value}</p>
    </div>
  );
}

function Benefit({ title, text }: any) {
  return (
    <div className='bg-white/[0.03] border border-white/10 rounded-3xl p-6'>
      <h3 className='font-bold'>{title}</h3>
      <p className='text-zinc-400 text-sm mt-2'>{text}</p>
    </div>
  );
}
