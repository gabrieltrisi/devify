'use client';

import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  DatabaseZap,
  Mail,
  ShieldCheck,
  Sparkles,
  Zap,
  Rocket,
  Workflow,
} from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <main className='min-h-screen overflow-hidden bg-black text-white'>
      <Navbar />

      <section className='relative flex min-h-screen items-center overflow-hidden px-6 pt-32 md:px-20'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.24),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.09),transparent_30%)]' />

        <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:90px_90px] opacity-10' />

        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.85))]' />

        <motion.div
          animate={{ y: [0, -36, 0], opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 8, repeat: Infinity }}
          className='absolute right-[-180px] top-20 h-[560px] w-[560px] rounded-full bg-cyan-400/20 blur-3xl'
        />

        <motion.div
          animate={{ x: [0, 40, 0], opacity: [0.18, 0.45, 0.18] }}
          transition={{ duration: 10, repeat: Infinity }}
          className='absolute bottom-[-120px] left-[-160px] h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl'
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className='relative z-10 grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]'
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className='mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.12)]'
            >
              <Sparkles size={16} />
              Software house para empresas modernas
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9 }}
              className='max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-8xl'
            >
              Sistemas inteligentes para empresas que querem{' '}
              <span className='bg-gradient-to-r from-cyan-300 via-white to-cyan-500 bg-clip-text text-transparent'>
                dominar a própria operação.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className='mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl'
            >
              A Devify cria softwares sob medida, automações e soluções com
              inteligência artificial para transformar processos manuais em
              sistemas escaláveis, bonitos e prontos para gerar resultado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className='mt-10 flex flex-col gap-4 sm:flex-row'
            >
              <a
                href='https://wa.me/5571991674248'
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-black shadow-[0_0_50px_rgba(255,255,255,0.18)] transition hover:bg-cyan-300'
              >
                Criar meu sistema
                <ArrowRight
                  className='transition group-hover:translate-x-1'
                  size={20}
                />
              </a>

              <a
                href='#projetos'
                className='inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-zinc-200 transition hover:bg-white/10'
              >
                Ver projetos
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className='mt-14 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4'
            >
              <MetricBox value='IA' label='aplicada ao negócio' />
              <MetricBox value='SaaS' label='sob medida' />
              <MetricBox value='APIs' label='e integrações' />
              <MetricBox value='UX/UI' label='premium' />
            </motion.div>
          </div>

          <HeroOrbit />
        </motion.div>
      </section>

      <section className='border-y border-white/10 px-6 py-8 md:px-20'>
        <div className='grid gap-4 text-center md:grid-cols-4'>
          <Stat value='Software' label='sob medida' />
          <Stat value='IA' label='aplicada ao negócio' />
          <Stat value='Automação' label='de processos' />
          <Stat value='Dashboards' label='inteligentes' />
        </div>
      </section>

      <section id='servicos' className='relative px-6 py-28 md:px-20'>
        <SectionHeader
          eyebrow='O que criamos'
          title='Tecnologia para tirar empresas do manual.'
          text='A Devify cria produtos digitais com foco em eficiência, controle e crescimento. Cada sistema nasce a partir de uma dor real do negócio.'
        />

        <div className='mt-14 grid gap-6 md:grid-cols-3'>
          <Card
            icon={<Code2 />}
            title='Sistemas sob medida'
            text='Plataformas personalizadas para centralizar dados, organizar fluxos e criar uma operação mais inteligente.'
          />
          <Card
            icon={<Workflow />}
            title='Automações'
            text='Processos automatizados para reduzir retrabalho, acelerar tarefas e aumentar produtividade.'
          />
          <Card
            icon={<BrainCircuit />}
            title='IA aplicada'
            text='Inteligência artificial em orçamentos, atendimento, análise de dados, assistentes virtuais e tomada de decisão.'
          />
        </div>
      </section>

      <section className='px-6 py-28 md:px-20'>
        <motion.div
          initial={{ opacity: 0, y: 70, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 md:p-14'
        >
          <div className='absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl' />

          <div className='relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center'>
            <div>
              <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
                Método Devify
              </p>

              <h2 className='mt-4 text-4xl font-black leading-tight md:text-6xl'>
                Do problema ao sistema pronto para operar.
              </h2>

              <p className='mt-6 text-lg leading-relaxed text-zinc-400'>
                Entendemos a dor da empresa, desenhamos a solução, criamos a
                experiência, desenvolvemos o sistema e entregamos uma tecnologia
                que resolve de verdade.
              </p>
            </div>

            <div className='grid gap-4'>
              <ProcessStep
                number='01'
                title='Diagnóstico'
                text='Entendemos os gargalos e processos manuais da empresa.'
              />
              <ProcessStep
                number='02'
                title='Estratégia'
                text='Desenhamos a solução ideal para gerar controle e eficiência.'
              />
              <ProcessStep
                number='03'
                title='Desenvolvimento'
                text='Criamos o sistema com interface moderna, dados e automação.'
              />
              <ProcessStep
                number='04'
                title='Evolução'
                text='Acompanhamos melhorias e novas oportunidades de otimização.'
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className='px-6 py-28 md:px-20'>
        <SectionHeader
          eyebrow='Por que escolher'
          title='Uma parceira de tecnologia para construir soluções reais.'
          text='A Devify combina visão de negócio, design moderno e desenvolvimento para criar sistemas que podem crescer junto com a empresa.'
        />

        <div className='mt-14 grid gap-6 md:grid-cols-3'>
          <Feature
            icon={<DatabaseZap />}
            title='Dados centralizados'
            text='Menos informação espalhada e mais clareza para decidir.'
          />
          <Feature
            icon={<ShieldCheck />}
            title='Controle operacional'
            text='Processos rastreáveis, organizados e com menos margem para erro.'
          />
          <Feature
            icon={<Rocket />}
            title='Escalabilidade'
            text='Soluções pensadas para evoluir conforme a empresa cresce.'
          />
        </div>
      </section>

      <section id='projetos' className='px-6 py-28 md:px-20'>
        <SectionHeader
          eyebrow='Projetos'
          title='Soluções em construção com foco em impacto real.'
          text='Cada projeto Devify nasce de uma necessidade prática e evolui para um produto digital com módulos, automação e inteligência.'
        />

        <div className='mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          <Project
            tag='Gestão de RH'
            title='ELO System'
            text='Gestão de pessoas, documentos, jornada, processos internos, relatórios e inteligência operacional.'
            href='/projetos/elo'
          />

          <Project
            tag='Gestão de Obras'
            title='EngenIA'
            text='Gestão de obras com orçamento por IA, riscos, custos, suprimentos, cronograma e controle operacional.'
            href='/projetos/engenia'
          />

          <Project
            tag='Saúde e Performance'
            title='ShapeX'
            text='Plataforma com assistente virtual para cada paciente, evolução individual e insights inteligentes.'
            href='/projetos/shapex'
          />

          <Project
            tag='Marketing Intelligence'
            title='Campaign Intelligence'
            text='Plataforma inteligente para análise de campanhas, lucro real, ROAS automatizado e métricas estratégicas em tempo real.'
            href='/projetos/campaign-intelligence'
          />
        </div>
      </section>

      <section
        id='contato'
        className='relative px-6 pb-24 pt-10 md:px-20 md:pb-32'
      >
        <motion.div
          initial={{ opacity: 0, y: 70, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='relative overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-white/[0.03] p-8 md:p-14'
        >
          <div className='absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl' />

          <div className='relative z-10'>
            <p className='font-semibold uppercase tracking-[0.3em] text-cyan-300'>
              Vamos construir?
            </p>

            <h2 className='mt-4 max-w-4xl text-4xl font-black md:text-6xl'>
              Tem uma ideia de sistema, automação ou IA para sua empresa?
            </h2>

            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300'>
              Fale com a Devify e transforme sua ideia em uma solução digital
              com visual moderno, tecnologia real e foco em resultado.
            </p>

            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <a
                href='https://wa.me/5571991674248'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-black transition hover:bg-cyan-300'
              >
                Chamar no WhatsApp <ArrowRight size={20} />
              </a>

              <a
                href='mailto:emaildevify@gmail.com'
                className='inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:bg-white/10'
              >
                <Mail size={20} />
                emaildevify@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

function HeroOrbit() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25 }}
      className='hidden lg:block'
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className='relative mx-auto flex h-[560px] w-[560px] items-center justify-center'
      >
        <div className='absolute inset-0 rounded-full border border-white/10' />
        <div className='absolute inset-12 rounded-full border border-cyan-400/20' />
        <div className='absolute inset-24 rounded-full border border-white/10' />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          className='absolute inset-0'
        >
          <FloatingBadge
            className='absolute left-8 top-24'
            icon={<Code2 />}
            text='Software'
          />
          <FloatingBadge
            className='absolute right-4 top-48'
            icon={<Bot />}
            text='IA'
          />
          <FloatingBadge
            className='absolute bottom-20 left-24'
            icon={<Cpu />}
            text='Automação'
          />
        </motion.div>

        <div className='relative z-10 w-[360px] rounded-[2rem] border border-white/10 bg-black/70 p-6 shadow-[0_0_90px_rgba(34,211,238,0.15)] backdrop-blur'>
          <p className='text-sm uppercase tracking-[0.3em] text-cyan-300'>
            Devify Core
          </p>

          <h3 className='mt-4 text-3xl font-black'>Operação inteligente</h3>

          <div className='mt-8 grid gap-4'>
            <DashboardRow label='Processos automatizados' value='82%' />
            <DashboardRow label='Retrabalho reduzido' value='64%' />
            <DashboardRow label='Dados centralizados' value='100%' />
          </div>

          <div className='mt-8 grid grid-cols-3 gap-3'>
            <MiniCard title='IA' text='Insights' />
            <MiniCard title='API' text='Integrações' />
            <MiniCard title='BI' text='Dados' />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FloatingBadge({
  icon,
  text,
  className,
}: {
  icon: React.ReactNode;
  text: string;
  className: string;
}) {
  return (
    <div
      className={`${className} flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-white backdrop-blur`}
    >
      <span className='text-cyan-300'>{icon}</span>
      {text}
    </div>
  );
}

function MetricBox({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 250 }}
      className='rounded-2xl border border-white/10 bg-white/[0.04] p-5'
    >
      <p className='text-xl font-black text-cyan-300'>{value}</p>
      <p className='mt-1 text-sm text-zinc-400'>{label}</p>
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className='max-w-4xl'>
      <p className='font-semibold uppercase tracking-[0.3em] text-cyan-400'>
        {eyebrow}
      </p>
      <h2 className='mt-4 text-4xl font-black md:text-6xl'>{title}</h2>
      <p className='mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400'>
        {text}
      </p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className='rounded-2xl border border-white/10 bg-white/[0.03] p-5'
    >
      <p className='text-xl font-black text-white'>{value}</p>
      <p className='mt-1 text-sm text-zinc-400'>{label}</p>
    </motion.div>
  );
}

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      className='flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5'
    >
      <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-black'>
        {number}
      </div>

      <div>
        <h3 className='font-bold text-white'>{title}</h3>
        <p className='mt-1 text-sm leading-relaxed text-zinc-400'>{text}</p>
      </div>
    </motion.div>
  );
}

function DashboardRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className='mb-2 flex items-center justify-between text-sm'>
        <span className='text-zinc-400'>{label}</span>
        <span className='font-bold text-cyan-300'>{value}</span>
      </div>

      <div className='h-2 overflow-hidden rounded-full bg-white/10'>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: value }}
          transition={{ duration: 1.3, delay: 0.8 }}
          className='h-full rounded-full bg-cyan-400'
        />
      </div>
    </div>
  );
}

function MiniCard({ title, text }: { title: string; text: string }) {
  return (
    <div className='rounded-2xl border border-white/10 bg-white/[0.04] p-4'>
      <p className='text-lg font-black text-cyan-300'>{title}</p>
      <p className='mt-1 text-xs text-zinc-400'>{text}</p>
    </div>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/40 hover:bg-white/[0.06]'
    >
      <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-black'>
        {icon}
      </div>

      <h3 className='text-2xl font-bold'>{title}</h3>
      <p className='mt-4 leading-relaxed text-zinc-400'>{text}</p>
    </motion.div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ x: 6 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='rounded-3xl border border-white/10 bg-white/[0.03] p-8'
    >
      <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-cyan-300'>
        {icon}
      </div>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='mt-3 leading-relaxed text-zinc-400'>{text}</p>
    </motion.div>
  );
}

function Project({
  tag,
  title,
  text,
  href,
}: {
  tag: string;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 70, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 transition hover:border-cyan-400/40'
    >
      <div className='absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20' />

      <p className='text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400'>
        {tag}
      </p>

      <h3 className='mt-4 text-4xl font-black'>{title}</h3>

      <p className='mt-4 leading-relaxed text-zinc-400'>{text}</p>

      <div className='mt-8 flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:translate-x-2'>
        Ver projeto <ArrowRight size={18} />
      </div>
    </motion.a>
  );
}
