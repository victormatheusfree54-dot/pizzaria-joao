'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('.fade-in-section');
        sections.forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            {/* Header / Nav */}
            <nav className="fixed w-full z-50 bg-dark/90 backdrop-blur-md border-b border-brand-red/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        <div className="flex-shrink-0 flex items-center gap-1 md:gap-2">
                            <span className="text-2xl md:text-3xl spin-pizza">🍕</span>
                            <span className="font-playfair font-black text-lg md:text-2xl tracking-tighter text-white uppercase">San's <span className="text-brand-red">Forneria</span></span>
                        </div>
                        <div>
                            <a href="https://wa.me/5521967780422" target="_blank" rel="noopener noreferrer" className="bg-brand-red hover:bg-red-700 text-white font-bold py-2 px-3 md:py-3 md:px-6 text-xs md:text-base rounded-none uppercase tracking-wider md:tracking-widest transition-all shadow-glow-red hover:scale-105 active:scale-95 flex items-center gap-1 md:gap-2">
                                <span className="hidden sm:inline">PEÇA AGORA</span>
                                <span className="sm:hidden">PEDIR</span> 🛵
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative h-screen flex items-center justify-center hero-bg pt-20 overflow-hidden">
                {/* Efeito de Vapor */}
                <div className="steam-container">
                    <div className="steam"></div>
                    <div className="steam"></div>
                    <div className="steam"></div>
                    <div className="steam"></div>
                </div>

                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto fade-in-section">
                    <h1 className="text-brand-gold font-bold tracking-[0.3em] text-sm md:text-base uppercase mb-6 drop-shadow-lg">
                        Pizza Artesanal Delivery Rio de Janeiro 📍
                    </h1>
                    
                    <h2 className="font-playfair font-black text-5xl md:text-7xl lg:text-8xl leading-none uppercase mb-8 text-white drop-shadow-2xl">
                        ARTESANAL DE VERDADE.<br />
                        <span className="text-brand-red">ENTREGA NA SUA PORTA.</span>
                    </h2>
                    
                    <p className="text-gray-300 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light">
                        Esqueça a dieta. Massa de longa fermentação, ingredientes frescos e aquele cheiro de forno a lenha invadindo a sua casa hoje.
                    </p>
                    
                    <a href="https://wa.me/5521967780422" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-brand-red text-white font-black text-xl md:text-2xl py-5 px-10 uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all duration-300 shadow-glow-red hover:scale-105">
                        MATAR MINHA FOME AGORA 🔥
                    </a>
                </div>
            </header>

            {/* Cardápio Section */}
            <section className="relative py-24 bg-dark" id="cardapio">
                {/* Efeito Queijo Derretendo */}
                <div className="cheese-melt-container">
                    <div className="drip"></div>
                    <div className="drip"></div>
                    <div className="drip"></div>
                    <div className="drip"></div>
                    <div className="drip"></div>
                    <div className="drip"></div>
                    <div className="drip"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                    <div className="text-center mb-20 fade-in-section">
                        <h2 className="font-playfair font-black text-4xl md:text-6xl uppercase text-white mb-4">
                            O QUE VAI SALVAR SUA NOITE? 🤤
                        </h2>
                        <p className="text-brand-gold font-bold tracking-widest uppercase">Sem miséria. Muito recheio.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Item 1 */}
                        <div className="bg-dark-card border-l-4 border-brand-red p-8 hover:shadow-glow-red transition-all duration-300 fade-in-section group">
                            <div className="overflow-hidden mb-6 relative h-64 w-full">
                                <Image src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop" alt="Pizza Família Artesanal de Calabresa e Queijo" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                            </div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-playfair font-black text-3xl uppercase text-white">PIZZA FAMÍLIA 35cm 🍕</h3>
                                <span className="bg-brand-red text-white font-bold px-4 py-1 text-xl">R$ 29,90</span>
                            </div>
                            <p className="text-gray-400 text-lg">O clássico que não tem erro. Massa fininha, crocante por fora, macia por dentro. Perfeita para dividir (ou comer sozinho, a gente não julga).</p>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-dark-card border-l-4 border-brand-gold p-8 hover:shadow-glow-gold transition-all duration-300 fade-in-section md:translate-y-16 group">
                            <div className="overflow-hidden mb-6 relative h-64 w-full">
                                <Image src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop" alt="Borda recheada de pizza derretendo" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                            </div>
                            <h3 className="font-playfair font-black text-3xl uppercase text-brand-gold mb-4">BORDAS RECHEADAS ✨</h3>
                            <p className="text-gray-400 text-lg mb-6">O gran finale de cada fatia. Escolha entre o verdadeiro Catupiry original, Cheddar cremoso ou afunde no Chocolate.</p>
                            <a href="https://wa.me/5521967780422" target="_blank" rel="noopener noreferrer" className="inline-block text-brand-gold font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-white hover:border-white transition-colors">
                                ADICIONAR À MINHA PIZZA +
                            </a>
                        </div>

                        {/* Item 3 */}
                        <div className="bg-dark-card border-l-4 border-white p-8 hover:bg-[#1a1a1a] transition-all duration-300 fade-in-section group">
                            <div className="overflow-hidden mb-6 relative h-64 w-full">
                                <Image src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop" alt="Combo de Pizza com Refrigerante" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                            </div>
                            <h3 className="font-playfair font-black text-3xl uppercase text-white mb-4">COMBOS DA CASA 🏆</h3>
                            <p className="text-gray-400 text-lg">Pizza + Refri gelado + Sobremesa. O pacote completo para resolver o seu jantar em um clique.</p>
                        </div>

                        {/* Item 4 */}
                        <div className="bg-dark-card border-l-4 border-[#8B4513] p-8 hover:bg-[#1a1a1a] transition-all duration-300 fade-in-section md:translate-y-16 group">
                            <div className="overflow-hidden mb-6 relative h-64 w-full">
                                <Image src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop" alt="Pizza Doce de Chocolate e Morango" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                            </div>
                            <h3 className="font-playfair font-black text-3xl uppercase text-white mb-4">PIZZAS DOCES 🍫</h3>
                            <p className="text-gray-400 text-lg">Pecado em forma de disco. Chocolate ao leite derretido, morangos frescos e muita vontade de repetir.</p>
                        </div>
                    </div>
                    
                    <div className="text-center mt-32 fade-in-section">
                        <a href="https://wa.me/5521967780422" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-red text-white font-black text-xl py-4 px-12 uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all duration-300 shadow-glow-red">
                            VER CARDÁPIO COMPLETO NO ZAP 📱
                        </a>
                    </div>
                </div>
            </section>

            {/* Área de Entrega */}
            <section className="py-24 bg-brand-red relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 fade-in-section">
                        <h2 className="font-playfair font-black text-5xl md:text-7xl uppercase text-white mb-6 leading-none">
                            CHEGA ESTALANDO DE QUENTE 🛵
                        </h2>
                        <p className="text-white text-xl md:text-2xl font-bold mb-8 uppercase tracking-wide">
                            Região da Tijuca • Recreio • Jacarepaguá
                        </p>
                        <p className="text-white/90 text-lg mb-8">
                            Nossa logística é bruta. Saiu do forno, foi pra bag térmica e parou na sua porta. Sem enrolação, sem pizza fria.
                        </p>
                        <a href="https://wa.me/5521967780422" target="_blank" rel="noopener noreferrer" className="inline-block bg-dark text-white font-black text-lg py-4 px-8 uppercase tracking-widest hover:bg-brand-gold hover:text-dark transition-all duration-300">
                            CONSULTAR MEU CEP 📍
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 fade-in-section relative h-[400px] md:h-[500px]">
                        <Image src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" alt="Pizza Delivery" fill className="object-cover border-4 border-dark shadow-2xl transition-all duration-500" referrerPolicy="no-referrer" />
                    </div>
                </div>
            </section>

            {/* Prova Social / História */}
            <section className="py-24 bg-dark relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
                    <span className="text-6xl mb-6 block">🔥</span>
                    <h2 className="font-playfair font-black text-4xl md:text-6xl uppercase text-white mb-8">
                        6 ANOS ASSANDO HISTÓRIAS
                    </h2>
                    <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-12">
                        Não começamos ontem. São <strong className="text-brand-gold">6 anos de mercado</strong>, milhares de fornadas e clientes que não trocam a nossa massa por nada. A gente sabe o que faz e garante: você vai viciar na primeira mordida.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-dark-card p-6 border-t-2 border-brand-red">
                            <p className="text-brand-gold text-2xl mb-2">⭐⭐⭐⭐⭐</p>
                            <p className="text-gray-400 italic">"A melhor da Região, sem dúvidas. A borda de catupiry é surreal de boa. Chegou super rápido!"</p>
                            <p className="text-white font-bold mt-4 uppercase">— Marcos T.</p>
                        </div>
                        <div className="bg-dark-card p-6 border-t-2 border-brand-red">
                            <p className="text-brand-gold text-2xl mb-2">⭐⭐⭐⭐⭐</p>
                            <p className="text-gray-400 italic">"Massa leve, não pesa no estômago. Peço toda sexta-feira pro pessoal aqui de casa no Recreio."</p>
                            <p className="text-white font-bold mt-4 uppercase">— Juliana R.</p>
                        </div>
                        <div className="bg-dark-card p-6 border-t-2 border-brand-red">
                            <p className="text-brand-gold text-2xl mb-2">⭐⭐⭐⭐⭐</p>
                            <p className="text-gray-400 italic">"Preço justo e qualidade de pizzaria cara. O combo salva muito no final de semana."</p>
                            <p className="text-white font-bold mt-4 uppercase">— Diego F.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA & Infos */}
            <footer className="bg-[#050505] pt-20 pb-10 border-t border-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
                        <div className="text-center md:text-left">
                            <h2 className="font-playfair font-black text-4xl md:text-5xl uppercase text-white mb-4">
                                A FOME NÃO ESPERA.
                            </h2>
                            <p className="text-gray-400 text-xl">Chama no Zap que a gente resolve agora.</p>
                        </div>
                        <div>
                            <a href="https://wa.me/5521967780422" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-brand-red text-white font-black text-2xl py-6 px-12 uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all duration-300 shadow-glow-red animate-pulse">
                                PEÇA AGORA 🍕
                            </a>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl spin-pizza">🍕</span>
                            <span className="font-playfair font-black text-xl tracking-tighter text-white uppercase">San's <span className="text-brand-red">Forneria</span></span>
                        </div>
                        
                        <div className="flex gap-8 text-gray-400 font-bold uppercase tracking-widest">
                            <a href="https://wa.me/5521967780422" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">WhatsApp: (21) 96778-0422</a>
                            <a href="https://instagram.com/sansforneria" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">Instagram: @sansforneria</a>
                        </div>
                    </div>
                    
                    <div className="text-center mt-10 text-gray-600 text-sm">
                        <p>&copy; 2026 San's Forneria. Todos os direitos reservados. Pizza Artesanal Delivery Rio de Janeiro.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
