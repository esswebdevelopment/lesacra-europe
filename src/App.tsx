/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

import logoSrc from './assets/logoUP.svg';
import modelo01 from './assets/Group 13.png';
import modelo02 from './assets/Group 14.png';
import modelo03 from './assets/Group 15.png';
import modelo04 from './assets/Group 18.png';
import modelo05 from './assets/Group 19.png';
import modelo06 from './assets/Group 20.png';
import monograma from './assets/Monograma.svg';
import monogramaWhite from './assets/MonogramaWhite.svg';

import bg from './assets/bg.png';
import bg2 from './assets/bg2.png';
import bg3 from './assets/bg3.png';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center justify-center text-ink ${className}`}>
    <img
      src={logoSrc}
      alt="Lé Sacra Atelier"
      className="w-auto h-12 md:h-12 object-contain" // Ajuste o tamanho conforme necessário
    />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-700 flex justify-center items-center ${isScrolled
        ? 'bg-bg/90 backdrop-blur-md py-4 shadow-sm'
        : 'bg-transparent py-8'
        }`}
    >
      <Logo className={`scale-75 md:scale-90 transition-all duration-500 ${!isScrolled ? 'invert brightness-0' : ''}`} />
    </nav>
  );
};

const Hero = () => {
  const images = [
    bg,
    bg2,
    bg3,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Troca a cada 3 segundos
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Overlay para garantir contraste */}
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const IntroSection = () => {
  return (
    <section className="flex flex-col items-center px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="font-serif text-[14px] md:text-[20px] uppercase tracking-[0.12em] md:tracking-[0.10em] mb-10 font-normal">
          TUTTO CIÒ CHE IL TUO MATRIMONIO MERITA — DALL'INVITO ALLA TAVOLA APPARECCHIATA.
        </h1>
        {/* <p className="font-times text-[10px] md:text-[12px] uppercase tracking-[0.2em] leading-[1.8] opacity-80 max-w-2xl mx-auto px-4">
          A Lé Savra criou uma coleção pensada para você: convites sofisticados e exclusivos, prontos em minutos — sem depender de designer.
        </p> */}
        <h1 className="font-serif text-[14px] md:text-[20px] uppercase tracking-[0.12em] md:tracking-[0.10em] mb-10 font-normal">
          SETTE PEZZI DI CARTOTECNICA PENSATI PER MATRIMONI DI ALTO LIVELLO. MODIFICABILI SU CANVA. PRONTI PER DIVENTARE TUOI.
        </h1>
      </motion.div>
    </section>
  );
};

const ProjectGrid = ({ items, className = "" }: { items: any[], className?: string }) => {
  return (
    <section className={`px-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {items.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-square overflow-hidden mb-8 border border-black/[0.03] flex items-center justify-center p-12 transition-colors duration-500">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[12px] font-serif uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--color-dark-red)' }}>{project.title}</h3>
              {/* <p className="text-[14px] leading-relaxed opacity-50 max-w-[240px] mx-auto font-serif uppercase tracking-wider" style={{ color: 'var(--color-dark-red)' }}>
                {project.description}
              </p> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="px-6 py-12 md:py-24 flex justify-center">
      <div className="max-w-4xl w-full border border-ink/30 p-1.5 md:p-2">
        <div className="border border-ink/10 p-8 md:p-16 text-center flex flex-col items-center gap-12">
          <h2 className="font-serif text-[14px] md:text-[20px] uppercase tracking-[0.12em] md:tracking-[0.15em] leading-[1.8] opacity-90 font-normal" style={{ color: 'var(--color-dark-red)' }}>
            LA COLLEZIONE LE SACRA È STATA CREATA PER LA SPOSA CHE SA ESATTAMENTE COSA VUOLE — E NON RINUNCIA AL DETTAGLIO. OGNI PEZZO È STATO PENSATO COME PARTE DI UN INSIEME COERENTE: DALLA 
            PRIMA COMUNICAZIONE CON GLI INVITATI ALL'ULTIMO ELEMENTO DECORATIVO DEL RICEVIMENTO. NIENTE DI ISOLATO. TUTTO ORCHESTRATO.
          </h2>
          <img
            src={monograma}
            alt="Monograma"
            className="w-12 h-12 object-contain transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

const BrideProfileSection = () => {
  const points = [
    "— Sa che il dettaglio non è un capriccio — ma una firma",
    "— Ha già scelto la palette, gli allestimenti, il profumo del ricevimento. La cartotecnica non può essere da meno",
    "— Non ha bisogno di spiegare perché vuole che sia bello. Lo vuole e basta",
    "— Riconosce un design di alto livello al primo sguardo — e non accetta di meno",
    "— Vuole gestire tutto in autonomia, senza rinunciare a un millimetro di eleganza"
  ];

  return (
    <section className="bg-dark-red text-bg px-6 py-20 md:py-32 flex flex-col items-center">
      <div className="max-w-4xl w-full border border-bg/20 p-1.5 md:p-2 mb-20">
        <div className="border border-bg/10 p-8 md:p-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-[14px] md:text-[24px] uppercase tracking-[0.12em] md:tracking-[0.15em] leading-[1.6] mb-12" style={{ color: 'var(--color-bg)' }}>
              L'INVITO ARRIVA PRIMA DI TE. <br /> E RACCONTA GIÀ CHI SEI.
            </h2>

            <img
              src={monogramaWhite}
              alt="Monograma Lé Sacra"
              className="w-12 h-12 md:w-16 md:h-16 object-contain mx-auto opacity-40"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>

      {/* List Section - Outside the box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-4xl w-full flex flex-col items-center text-center"
      >
        <p className="font-serif text-[14px] md:text-[24px] uppercase tracking-[0.12em] md:tracking-[0.15em] leading-[1.6] mb-12 text-center">
          QUESTA COLLEZIONE È PER LA SPOSA CHE:
        </p>
        <ul className="space-y-16 w-full max-w-2xl px-4">
          {points.map((point, i) => (
            <li key={i} className="flex flex-col items-center gap-4 group text-center">
              {/* Monograma pequeno como marcador acima do texto */}
              <img
                src={monogramaWhite}
                alt="Marker"
                className="w-4 h-4 md:w-8 md:h-8 object-contain opacity-30 group-hover:opacity-100 transition-opacity shrink-0"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif font-thin text-[12px] md:text-[18px] tracking-[0.02em] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

    </section>
  );
};

const SystemSection = () => {
  const row1 = ["Invito", "Save the Date", "Menu", "Carta dei Drink", "Cartellini per il Buffet"];
  const row2 = ["Numero del Tavolo", "Segnaposto con Piega"];

  return (
    <section className="px-6 py-24 md:py-40 flex flex-col items-center bg-bg">
      <h2 className="font-times text-[14px] md:text-[20px] uppercase tracking-[0.12em] md:tracking-[0.15em] text-center mb-20 opacity-90 text-ink font-normal">
        SETTE PEZZI. DALL'INVITO ALLA TAVOLA APPARECCHIATA.
      </h2>

      <div className="max-w-6xl w-full border border-ink/20">
        {/* Row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-5 border-b border-ink/20">
          {row1.map((item, i) => (
            <div
              key={i}
              className={`py-12 px-4 flex items-center justify-center text-center font-serif text-[12px] md:text-[18px] tracking-[0.02em] opacity-60 text-ink
                ${i % 2 === 0 && i !== row1.length - 1 ? 'border-r border-ink/20' : ''}
                ${i % 2 !== 0 && i !== row1.length - 1 ? 'md:border-r border-ink/20' : ''}
                ${i === 4 ? 'col-span-2 md:col-span-1' : 'col-span-1'}
              `}
            >
              {item}
            </div>
          ))}
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {row2.map((item, i) => (
            <div
              key={i}
              className={`py-12 px-4 flex items-center justify-center text-center font-serif text-[12px] md:text-[18px] tracking-[0.02em] opacity-60 text-ink
                ${i === 0 ? 'md:border-r border-ink/20 border-b md:border-b-0' : ''}
              `}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  return (
    <section className="px-6 py-40 flex flex-col items-center">
      {/* Top Text */}
      <div className="text-center mb-12 space-y-2">
        <p className="font-serif text-[14px] md:text-[20px] uppercase tracking-[0.15em] font-normal" style={{ color: 'var(--color-dark-red)' }}>
          ACQUISTATI SEPARATAMENTE,
        </p>
        <p className="font-serif text-[14px] md:text-[20px] uppercase tracking-[0.15em] font-normal" style={{ color: 'var(--color-dark-red)' }}>
          QUESTI MODELLI COSTEREBBERO <span className="font-bold">€ 149</span>
        </p>
        <p className="font-serif text-[14px] md:text-[20px] uppercase tracking-[0.15em] font-normal" style={{ color: 'var(--color-dark-red)' }}>
          IN QUESTA COLLEZIONE, LI OTTIENI TUTTI E SEI — MODIFICABILI
        </p>
      </div>

      {/* Pricing Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="border border-ink/30 max-w-2xl w-full p-2 text-center mb-12"
      >
        <div className="border border-ink/10 p-12 md:p-20">
          <div className="space-y-8">
            <div className="py-4">
              <p className="font-serif text-[18px] md:text-[22px] uppercase tracking-[0.2em]" style={{ color: 'var(--color-dark-red)' }}>A UN PREZZO UNICO DI:</p>
            </div>

            <div>
              <p className="font-times text-[48px] md:text-[96px] leading-none uppercase tracking-tight mb-4" style={{ color: 'var(--color-dark-red)' }}>€ 37</p>
              <p className="font-serif text-[14px] md:text-[22px] uppercase tracking-[0.2em] md:tracking-[0.3em]" style={{ color: 'var(--color-dark-red)' }}>PAGAMENTO UNICO</p>
            </div>

            <div className="space-y-4 font-serif text-[12px] md:text-[18px] tracking-[0.03em]">
              <p>Invito · Save the Date · Menu · Carta dei Drink</p>
              <p>Numero del Tavolo · Cartellini per il Buffet · Segnaposto con Piega</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Action Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative p-1.5 transition-all duration-300"
      >
        {/* Outer Boiserie Border (visible on hover) */}
        <div className="absolute inset-0 border border-dark-red opacity-0 group-hover:opacity-100 transition-opacity rounded-[5px]" />

        {/* Inner Button Content */}
        <a
          href="https://pay.cakto.com.br/ahn5556_877581"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative bg-dark-red text-bg px-6 md:px-12 py-5 rounded-[5px] border border-transparent group-hover:bg-bg group-hover:text-dark-red group-hover:border-dark-red/30 transition-all duration-300 font-times text-[12px] md:text-[16px] uppercase tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap">
            VOGLIO LA MIA COLLEZIONE LE SACRA
          </div>
        </a>
      </motion.button>
    </section>
  );
};

const FAQSection = () => {
  const steps = [
    "Effettui l'acquisto",
    "Ricevi l'accesso ai file",
    "Modifichi su Canva a modo tuo",
    "Salvi e invii ai tuoi invitati",
    "Acquisto 100% sicuro",
    "Accesso immediato dopo il pagamento",
    "Modifica quante volte vuoi",
    "Nessun canone mensile"
  ];

  const faqs = [
    {
      q: "Devo avere Canva Pro?",
      a: "No. La personalizzazione funziona anche con un account Canva gratuito."
    },
    {
      q: "Posso modificare dal cellulare?",
      a: "Sì. Puoi modificare sia dal cellulare che dal computer."
    },
    {
      q: "Fate voi le modifiche al posto mio?",
      a: "No. Il prodotto è 100% modificabile e non include assistenza personalizzata."
    },
    {
      q: "Il pagamento è sicuro?",
      a: "Sì. Il pagamento viene elaborato da piattaforme sicure e crittografate — il tuo acquisto è totalmente protetto."
    },
    {
      q: "C'è una garanzia?",
      a: "Sì. Offriamo 7 giorni di garanzia dopo l'acquisto. Se per qualsiasi motivo non sei soddisfatta, ti rimborsiamo l'intero importo — senza complicazioni."
    }
  ];

  return (
    <section className="px-6 pt-10 pb-32 flex flex-col items-center">
      {/* Como Funciona Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="border border-ink/30 max-w-3xl w-full p-2 text-center mb-35"
      >
        <div className="border border-ink/10 p-12 md:p-16">
          <h2 className="font-serif text-[20px] md:text-[24px] uppercase tracking-[0.2em] mb-12 font-semibold" style={{ color: 'var(--color-dark-red)' }}>
            COME FUNZIONA:
          </h2>
          <ol className="space-y-4 text-left w-fit mx-auto">
            {steps.map((step, i) => (
              <li key={i} className="font-serif text-[13px] md:text-[16px] uppercase tracking-[0.12em] md:tracking-[0.15em] flex gap-4" style={{ color: 'var(--color-dark-red)' }}>
                <span className="opacity-40 shrink-0">{i < 4 ? `${i + 1}.` : "•"}</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </motion.div>

      {/* Dúvidas Frequentes */}
      <div className="max-w-3xl w-full text-center space-y-12 mb-20">
        <h2 className="font-serif text-[24px] md:text-[32px] uppercase tracking-[0.2em] font-semibold" style={{ color: 'var(--color-dark-red)' }}>
          DOMANDE FREQUENTI:
        </h2>

        <div className="space-y-10">
          {faqs.map((faq, i) => (
            <div key={i} className="space-y-1">
              <h4 className="font-serif text-[14px] md:text-[16px] uppercase tracking-[0.15em] font-normal" style={{ color: 'var(--color-dark-red)' }}>
                {faq.q}
              </h4>
              <p className="font-serif text-[12px] md:text-[14px] uppercase tracking-[0.1em] leading-relaxed opacity-80" style={{ color: 'var(--color-dark-red)' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative p-1.5 transition-all duration-300"
      >
        <div className="absolute inset-0 border border-dark-red opacity-0 group-hover:opacity-100 transition-opacity rounded-[5px]" />

        <a
          href="https://pay.cakto.com.br/ahn5556_877581"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative bg-dark-red text-bg px-6 md:px-12 py-5 rounded-[5px] border border-transparent group-hover:bg-bg group-hover:text-dark-red group-hover:border-dark-red/30 transition-all duration-300 font-times text-[12px] md:text-[16px] uppercase tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap">
            VOGLIO LA MIA COLLEZIONE LE SACRA
          </div>
        </a>
      </motion.button>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="px-6 py-20 border-t border-black/5">
      <div className="flex flex-col items-center gap-12 text-center">
        <div>
          <h2 className="text-[12px] font-serif uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--color-dark-red)' }}>Instagram —</h2>
          <a href="https://www.instagram.com/atelierlesacra/" className="text-[16px] md:text-[20px] font-serif hover:opacity-50 transition-opacity uppercase tracking-[0.15em]" style={{ color: 'var(--color-dark-red)' }}>@atelierlesacra</a>
        </div>
        <div>
          <h2 className="text-[12px] font-serif uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--color-dark-red)' }}>CONTATTO —</h2>
          <a href="mailto:esscorpcontact@gmail.com" className="text-[16px] md:text-[20px] font-serif hover:opacity-50 transition-opacity uppercase tracking-[0.15em]" style={{ color: 'var(--color-dark-red)' }}>esscorpcontact@gmail.com</a>
        </div>

        <Logo className="scale-75 opacity-80" />

        <div className="font-serif text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--color-dark-red)' }}>
          LE SACRA — © 2020
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const allProjects = [
    {
      title: "SCARLET",
      image: modelo01,
    },
    {
      title: "EMERALD",
      image: modelo02,
    },
    {
      title: "BORDEAUX",
      image: modelo03,
    },
    {
      title: "RIVIERA",
      image: modelo04,
    },
    {
      title: "IVOIRE",
      image: modelo05,
    },
    {
      title: "SAPHIR",
      image: modelo06,
    }
  ];

  return (
    <div className="bg-bg min-h-screen selection:bg-ink selection:text-bg">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <ProjectGrid items={allProjects.slice(0, 3)} className="pb-12" />
        <AboutSection />
        <ProjectGrid items={allProjects.slice(3, 6)} className="pt-12 pb-32" />
        <BrideProfileSection />
        <SystemSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
