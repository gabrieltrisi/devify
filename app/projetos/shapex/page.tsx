import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CalendarCheck,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Users,
} from 'lucide-react';

export default function ShapeXPage() {
  return (
    <main className='min-h-screen overflow-hidden bg-black text-white'>
      <section className='relative px-6 py-10 md:px-20'>
        <div className='absolute right-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-3xl' />
        <div className='absolute bottom-0 left-[-160px] h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl' />

        <a
          href='/'
          className='inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white'
        >
          <ArrowLeft size={18} />
          Voltar
        </a>

        <div className='mt-20 grid gap-12 lg:grid-cols-2 lg:items-center'>
          <div>
            <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
              ShapeX
            </p>

            <h1 className='mt-6 text-5xl font-black leading-tight md:text-7xl'>
              Acompanhamento fitness com{' '}
              <span className='bg-gradient-to-r from-cyan-300 via-white to-cyan-500 bg-clip-text text-transparent'>
                assistente virtual para cada paciente.
              </span>
            </h1>

            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300'>
              A ShapeX está sendo desenvolvida para transformar a rotina de
              profissionais da saúde, academias e pacientes, oferecendo uma
              experiência personalizada com dados, evolução e apoio inteligente.
            </p>

            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <a
                href='https://wa.me/5571991674248'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:bg-white'
              >
                Quero algo assim <ArrowRight size={20} />
              </a>

              <a
                href='#modulos'
                className='inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 font-bold hover:bg-white/10'
              >
                Ver módulos
              </a>
            </div>
          </div>

          <DashboardMock />
        </div>
      </section>

      <section className='grid gap-6 px-6 py-24 md:grid-cols-3 md:px-20'>
        <PainPoint
          title='Acompanhamento genérico'
          text='Muitos pacientes recebem planos iguais, sem acompanhamento real da evolução individual.'
        />
        <PainPoint
          title='Pouca retenção'
          text='Sem personalização, o paciente perde engajamento e abandona o processo com facilidade.'
        />
        <PainPoint
          title='Dados espalhados'
          text='Histórico, medidas, treinos, metas e evolução ficam desconectados.'
        />
      </section>

      <section className='px-6 py-24 md:px-20'>
        <div className='rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-white/[0.03] p-8 md:p-12'>
          <p className='font-semibold uppercase tracking-[0.3em] text-cyan-300'>
            Diferencial principal
          </p>

          <div className='mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
            <div>
              <h2 className='text-4xl font-black leading-tight md:text-6xl'>
                Um assistente virtual exclusivo para cada paciente.
              </h2>

              <p className='mt-6 text-lg leading-relaxed text-zinc-300'>
                A proposta da ShapeX é criar uma experiência individualizada,
                onde cada paciente recebe acompanhamento inteligente, lembretes,
                orientações e análise de evolução com base nos seus próprios
                dados.
              </p>
            </div>

            <div className='rounded-3xl border border-white/10 bg-black/50 p-6'>
              <p className='text-sm uppercase tracking-[0.25em] text-cyan-300'>
                Assistente virtual
              </p>

              <div className='mt-6 space-y-4'>
                <AssistantStep
                  number='01'
                  text='Entende o perfil, objetivo e histórico do paciente.'
                />
                <AssistantStep
                  number='02'
                  text='Acompanha evolução, frequência, metas e resultados.'
                />
                <AssistantStep
                  number='03'
                  text='Envia lembretes, orientações e insights personalizados.'
                />
                <AssistantStep
                  number='04'
                  text='Apoia o profissional com dados claros para decisão.'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='modulos' className='px-6 py-24 md:px-20'>
        <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
          Módulos da plataforma
        </p>

        <h2 className='mt-4 max-w-4xl text-4xl font-black md:text-6xl'>
          Uma experiência conectada entre profissional, paciente e evolução.
        </h2>

        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          <Module
            icon={<MessageCircle />}
            title='Assistente Virtual'
            text='Acompanhamento inteligente e personalizado para cada paciente.'
          />
          <Module
            icon={<UserRoundCheck />}
            title='Perfil do Paciente'
            text='Histórico, objetivos, dados físicos, rotina e preferências.'
          />
          <Module
            icon={<Activity />}
            title='Evolução'
            text='Acompanhamento de medidas, performance, frequência e progresso.'
          />
          <Module
            icon={<CalendarCheck />}
            title='Planos e Rotina'
            text='Organização de treinos, hábitos, metas e compromissos.'
          />
          <Module
            icon={<BrainCircuit />}
            title='Insights com IA'
            text='Análises inteligentes para apoiar decisões e ajustes.'
          />
          <Module
            icon={<BarChart3 />}
            title='Dashboard'
            text='Indicadores claros sobre pacientes, evolução e retenção.'
          />
          <Module
            icon={<HeartPulse />}
            title='Saúde e Bem-estar'
            text='Visão geral do progresso e consistência do paciente.'
          />
          <Module
            icon={<ShieldCheck />}
            title='Controle e Segurança'
            text='Organização de dados com estrutura segura e rastreável.'
          />
        </div>
      </section>

      <section className='px-6 py-24 md:px-20'>
        <div className='grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center'>
          <div>
            <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
              Painel do sistema
            </p>

            <h2 className='mt-4 text-4xl font-black md:text-6xl'>
              Dados para acompanhar evolução de verdade.
            </h2>

            <p className='mt-6 text-lg leading-relaxed text-zinc-300'>
              A ShapeX centraliza dados de pacientes, evolução, frequência,
              metas e insights em um painel visual para melhorar o
              acompanhamento e aumentar a retenção.
            </p>
          </div>

          <div className='rounded-[2rem] border border-white/10 bg-white/[0.04] p-5'>
            <div className='grid gap-4 md:grid-cols-2'>
              <Metric title='Pacientes ativos' value='248' />
              <Metric title='Assistentes ativos' value='248' />
              <Metric title='Adesão média' value='82%' />
              <Metric title='Insights gerados' value='1.4k' />
            </div>

            <div className='mt-6 rounded-3xl border border-white/10 bg-black/50 p-6'>
              <p className='text-sm text-zinc-400'>Alertas inteligentes</p>

              <div className='mt-5 space-y-4'>
                <Alert
                  title='Paciente com queda de frequência'
                  status='Atenção'
                />
                <Alert title='Meta semanal concluída' status='OK' />
                <Alert title='Evolução acima do esperado' status='Insight' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 py-24 md:px-20'>
        <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
          Benefícios
        </p>

        <div className='mt-10 grid gap-6 md:grid-cols-4'>
          <Benefit
            title='Mais personalização'
            text='Cada paciente recebe uma experiência mais próxima da sua realidade.'
          />
          <Benefit
            title='Mais retenção'
            text='Acompanhamento constante aumenta engajamento e continuidade.'
          />
          <Benefit
            title='Mais clareza'
            text='Dados organizados para profissionais e gestores.'
          />
          <Benefit
            title='Mais evolução'
            text='Decisões e ajustes baseados em indicadores reais.'
          />
        </div>
      </section>

      <section className='px-6 pb-24 md:px-20'>
        <div className='rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12'>
          <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
                Status
              </p>

              <h2 className='mt-4 text-4xl font-black'>
                Projeto em construção.
              </h2>

              <p className='mt-4 max-w-2xl text-zinc-400'>
                A ShapeX está sendo construída para unir tecnologia,
                personalização e inteligência de dados em uma plataforma de
                acompanhamento mais eficiente e humana.
              </p>
            </div>

            <a
              href='https://wa.me/5571991674248'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-black transition hover:bg-cyan-300'
            >
              Falar sobre a ShapeX <ArrowRight size={20} />
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
          app.shapex.com.br/dashboard
        </p>

        <h2 className='mt-5 text-3xl font-black'>Painel do Paciente</h2>

        <div className='mt-8 grid grid-cols-2 gap-4'>
          <Metric title='Paciente' value='Gabriel' />
          <Metric title='Meta semanal' value='82%' />
          <Metric title='Frequência' value='5/7' />
          <Metric title='Evolução' value='+12%' />
        </div>

        <div className='mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
          <p className='text-sm text-zinc-400'>Evolução do paciente</p>

          <div className='mt-5 space-y-4'>
            <Progress label='Treinos concluídos' value='82%' />
            <Progress label='Consistência semanal' value='74%' />
            <Progress label='Meta física' value='68%' />
          </div>
        </div>

        <div className='mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5'>
          <p className='font-bold text-cyan-300'>Assistente virtual ativo</p>
          <p className='mt-2 text-sm text-zinc-300'>
            “Gabriel, você está perto da sua meta semanal. Mantenha a
            consistência.”
          </p>
        </div>
      </div>
    </div>
  );
}

function PainPoint({ title, text }: { title: string; text: string }) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-8'>
      <p className='text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400'>
        Dor real
      </p>
      <h3 className='mt-4 text-2xl font-black'>{title}</h3>
      <p className='mt-4 leading-relaxed text-zinc-400'>{text}</p>
    </div>
  );
}

function AssistantStep({ number, text }: { number: string; text: string }) {
  return (
    <div className='flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4'>
      <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-black'>
        {number}
      </div>
      <p className='text-zinc-300'>{text}</p>
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
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='mt-3 text-sm leading-relaxed text-zinc-400'>{text}</p>
    </div>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className='rounded-2xl border border-white/10 bg-white/[0.04] p-4'>
      <p className='text-sm text-zinc-400'>{title}</p>
      <p className='mt-2 text-2xl font-black text-white'>{value}</p>
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

function Alert({ title, status }: { title: string; status: string }) {
  return (
    <div className='flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4'>
      <span className='text-sm text-zinc-300'>{title}</span>
      <span className='text-sm font-bold text-cyan-300'>{status}</span>
    </div>
  );
}

function Benefit({ title, text }: { title: string; text: string }) {
  return (
    <div className='rounded-3xl border border-white/10 bg-white/[0.03] p-6'>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='mt-3 text-sm leading-relaxed text-zinc-400'>{text}</p>
    </div>
  );
}
