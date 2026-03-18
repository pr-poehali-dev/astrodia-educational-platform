import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AUTHOR_IMG = 'https://cdn.poehali.dev/projects/a6a93ef8-7320-4985-8f46-a67d4aaa4015/files/b2e1aede-719b-4254-9b98-e42b2cfc53b1.jpg';

export default function Author() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--parchment)' }}>
      <Header />

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #F5E8D0 0%, #FDF6E3 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div style={{ height: '1px', width: '40px', background: 'var(--gold)' }} />
            <span className="text-xs tracking-widest font-sans font-medium uppercase" style={{ color: 'var(--gold)' }}>Основатель</span>
            <div style={{ height: '1px', width: '40px', background: 'var(--gold)' }} />
          </div>
          <h1 className="font-serif font-semibold mb-4" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--gold)' }}>
            Автор и основатель системы
          </h1>
          <p className="font-serif italic text-xl" style={{ color: 'var(--brown-light)' }}>
            «Система не возникает сама. За ней стоит человек, который прошёл путь.»
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--parchment-light)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="sticky top-20">
                <div className="rounded-2xl overflow-hidden shadow-xl mb-5" style={{ border: '2px solid rgba(212,175,55,0.35)' }}>
                  <img src={AUTHOR_IMG} alt="Автор Астродеи" className="w-full object-cover" style={{ height: '360px' }} />
                </div>
                <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.3)' }}>
                  <div className="font-serif font-semibold text-lg mb-2" style={{ color: 'var(--gold)' }}>Основатель Астродеи</div>
                  <div className="space-y-1">
                    {['25+ лет исследований', 'Три традиции в единой системе', 'Автор методологии'].map((f) => (
                      <div key={f} className="font-sans text-sm flex items-center gap-2" style={{ color: 'var(--brown-light)' }}>
                        <span style={{ color: 'var(--gold)' }}>✦</span> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="font-serif font-semibold mb-4" style={{ fontSize: '28px', color: 'var(--gold)' }}>
                  О пути
                </h2>
                <p className="font-sans text-base leading-relaxed mb-4" style={{ color: 'var(--brown)' }}>
                  Более двадцати пяти лет системного изучения астрологии — от западной классики до забытых пластов древнерусской традиции и медицинских методик античности. Этот путь не был линейным: вопросы порождали новые вопросы, а ответы открывали связи там, где их не видели другие.
                </p>
                <p className="font-sans text-base leading-relaxed" style={{ color: 'var(--brown-light)' }}>
                  Астродея — не просто платформа с контентом. Это попытка передать системное видение, которое формировалось десятилетиями.
                </p>
              </div>

              <div>
                <h2 className="font-serif font-semibold mb-4" style={{ fontSize: '28px', color: 'var(--gold)' }}>
                  Подход к работе
                </h2>
                <div className="space-y-3">
                  {[
                    { title: 'Первоисточники', text: 'Работа с оригинальными текстами, а не с популярными пересказами. Каждое утверждение проверяется через историческую традицию.' },
                    { title: 'Системность', text: 'Три традиции изучаются как единый организм — с общими корнями, взаимными влияниями и общей логикой.' },
                    { title: 'Честность', text: 'Там, где данные неоднозначны — это признаётся. Астрология как система требует строгости, а не красивых схем.' },
                  ].map((p) => (
                    <div key={p.title} className="p-5 rounded-xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.25)' }}>
                      <div className="font-serif font-semibold text-base mb-1" style={{ color: 'var(--gold)' }}>{p.title}</div>
                      <div className="font-sans text-sm leading-relaxed" style={{ color: 'var(--brown)' }}>{p.text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link to="/methodology" className="btn-gold px-8 py-3 text-base font-sans font-semibold inline-block">
                  Изучить методологию
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
