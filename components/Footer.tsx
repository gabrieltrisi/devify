import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='border-t border-white/10 bg-black px-6 py-14 text-white md:px-20'>
      <div className='mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]'>
        <div>
          <a href='/' className='text-3xl font-black tracking-tight'>
            <span className='text-white'>DEVI</span>
            <span className='text-cyan-300'>FY</span>
          </a>

          <p className='mt-5 max-w-sm leading-relaxed text-zinc-400'>
            Software, automação e inteligência artificial para empresas que
            querem sair do manual e evoluir com tecnologia.
          </p>
        </div>

        <div>
          <h3 className='font-bold text-white'>Navegação</h3>

          <div className='mt-5 flex flex-col gap-3 text-zinc-400'>
            <a href='/#servicos' className='transition hover:text-white'>
              Serviços
            </a>
            <a href='/#projetos' className='transition hover:text-white'>
              Projetos
            </a>
            <a href='/#contato' className='transition hover:text-white'>
              Contato
            </a>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-white'>Projetos</h3>

          <div className='mt-5 flex flex-col gap-3 text-zinc-400'>
            <a href='/projetos/elo' className='transition hover:text-white'>
              ELO System
            </a>
            <a href='/projetos/engenia' className='transition hover:text-white'>
              EngenIA
            </a>
            <a href='/projetos/shapex' className='transition hover:text-white'>
              ShapeX
            </a>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-white'>Vamos conversar?</h3>

          <p className='mt-5 leading-relaxed text-zinc-400'>
            Tem uma ideia de sistema ou automação para sua empresa?
          </p>

          <div className='mt-6 flex flex-col gap-3'>
            <a
              href='https://wa.me/5571991674248'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-black transition hover:bg-cyan-300'
            >
              <MessageCircle size={18} />
              WhatsApp
              <ArrowRight size={16} />
            </a>

            <a
              href='mailto:emaildevify@gmail.com'
              className='inline-flex items-center gap-2 text-zinc-400 transition hover:text-white'
            >
              <Mail size={18} />
              emaildevify@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className='mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between'>
        <p>© 2026 Devify. Todos os direitos reservados.</p>
        <p>Construído com tecnologia, estratégia e inteligência.</p>
      </div>
    </footer>
  );
}
