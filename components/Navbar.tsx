'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-black/75 py-3 backdrop-blur-2xl'
          : 'border-b border-white/5 bg-black/35 py-5 backdrop-blur-xl'
      }`}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10'>
        {/* LOGO ANIMADA */}
        <AnimatedLogo />

        {/* MENU DESKTOP */}
        <nav className='hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex'>
          <a href='/#servicos' className='transition hover:text-white'>
            Serviços
          </a>
          <a href='/#projetos' className='transition hover:text-white'>
            Projetos
          </a>
          <a href='/#contato' className='transition hover:text-white'>
            Contato
          </a>
        </nav>

        {/* CTA */}
        <a
          href='https://wa.me/5571991674248'
          target='_blank'
          rel='noopener noreferrer'
          className='hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-cyan-300 md:inline-flex'
        >
          Iniciar projeto <ArrowRight size={16} />
        </a>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white md:hidden'
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className='border-t border-white/10 bg-black/95 px-6 py-6 backdrop-blur-xl md:hidden'>
          <nav className='flex flex-col gap-5 text-zinc-300'>
            <a href='/#servicos' onClick={() => setOpen(false)}>
              Serviços
            </a>
            <a href='/#projetos' onClick={() => setOpen(false)}>
              Projetos
            </a>
            <a href='/#contato' onClick={() => setOpen(false)}>
              Contato
            </a>

            <a
              href='https://wa.me/5571991674248'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-black'
            >
              Iniciar projeto <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
