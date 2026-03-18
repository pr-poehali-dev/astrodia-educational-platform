import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Methodology() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--parchment)' }}>
      <Header />

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #F5E8D0 0%, #FDF6E3 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div style={{ height: '1px', width: '40px', background: 'var(--gold)' }} />
            <span className="text-xs tracking-widest font-sans font-medium uppercase" style={{ color: 'var(--gold)' }}>Основа системы</span>
            <div style={{ height: '1px', width: '40px', background: 'var(--gold)' }} />
          </div>
          <h1 className="font-serif font-semibold mb-4" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--gold)' }}>
            Методология Астродеи
          </h1>
          <p className="font-sans text-lg leading-relaxed" style={{ color: 'var(--brown)', maxWidth: '600px', margin: '0 auto' }}>
            Целостная система, объединяющая три астрологические традиции в единое понимание человека, времени и пространства.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--parchment-light)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {[
              { emoji: '🌙', title: 'Древнерусская традиция', desc: 'Исконные знания о времени, природных циклах и небесных ритмах, закодированные в славянских праздниках и календарных системах.' },
              { emoji: '⭐', title: 'Западная система', desc: 'Классическая астрология от Птолемея до современности: натальная карта как карта судьбы, прогностика и психологический анализ.' },
              { emoji: '🌿', title: 'Медицинская ветвь', desc: 'Связь планетарных конфигураций с физиологией, конституцией и биологическими ритмами — традиция, уходящая корнями в античность.' },
            ].map((item) => (
              <div key={item.title} className="p-7 rounded-2xl text-center" style={{ backgroundColor: 'var(--parchment-card)', border: '1.5px solid rgba(212,175,55,0.35)' }}>
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: 'var(--gold)' }}>{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--brown)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif font-semibold text-center mb-8" style={{ fontSize: '32px', color: 'var(--gold)' }}>
              Принципы системы
            </h2>
            <div className="space-y-4">
              {[
                { n: '01', title: 'Системность', text: 'Три традиции изучаются не раздельно, а как единый организм — с общими корнями и взаимными связями.' },
                { n: '02', title: 'Первоисточники', text: 'Опора на оригинальные тексты и исторические источники, а не на популярные интерпретации.' },
                { n: '03', title: 'Постепенность', text: 'Знание раскрывается слоями: от базовых понятий к глубоким взаимосвязям, в темпе готовности исследователя.' },
                { n: '04', title: 'Целостность', text: 'Астрология как система понимания человека, а не инструмент предсказания — это принципиальная позиция платформы.' },
              ].map((p) => (
                <div key={p.n} className="flex gap-5 p-6 rounded-xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.25)' }}>
                  <div className="font-serif text-3xl font-semibold leading-none" style={{ color: 'rgba(212,175,55,0.3)', minWidth: '48px' }}>{p.n}</div>
                  <div>
                    <div className="font-serif font-semibold text-base mb-1" style={{ color: 'var(--gold)' }}>{p.title}</div>
                    <div className="font-sans text-sm leading-relaxed" style={{ color: 'var(--brown)' }}>{p.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/subscription" className="btn-gold px-8 py-3 text-base font-sans font-semibold inline-block">
                Получить доступ к платформе
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
