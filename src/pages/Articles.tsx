import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = ['Все', 'Древнерусская', 'Западная', 'Медицинская', 'Методология'];

const articles = [
  { id: 1, title: 'Лунные узлы в медицинской астрологии', excerpt: 'Как северный и южный узлы Луны влияют на конституцию человека и предрасположенность к определённым состояниям здоровья.', category: 'Медицинская', date: '12 марта 2024', readTime: '8 мин' },
  { id: 2, title: 'Перунов день и астрологический цикл', excerpt: 'Исследование связи между древнерусскими праздничными циклами и астрологическими конфигурациями неба.', category: 'Древнерусская', date: '8 марта 2024', readTime: '12 мин' },
  { id: 3, title: 'Прогрессии: метод вторичных дирекций', excerpt: 'Подробное руководство по работе с вторичными прогрессиями в западной астрологии. Теория и практические примеры.', category: 'Западная', date: '3 марта 2024', readTime: '15 мин' },
  { id: 4, title: 'Целостная методология: три традиции', excerpt: 'Как три астрологические традиции — древнерусская, западная и медицинская — образуют единую систему понимания.', category: 'Методология', date: '25 февраля 2024', readTime: '10 мин' },
  { id: 5, title: 'Марс в системе управления телом', excerpt: 'Планета войны как архетип энергии, воспаления и действия. Медицинская интерпретация Марса в натальной карте.', category: 'Медицинская', date: '18 февраля 2024', readTime: '9 мин' },
  { id: 6, title: 'Коляда и солнечный поворот', excerpt: 'Древнерусский праздник зимнего солнцестояния в контексте астрологической системы годового цикла.', category: 'Древнерусская', date: '10 февраля 2024', readTime: '11 мин' },
];

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filtered = activeCategory === 'Все' ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--parchment)' }}>
      <Header />

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #F5E8D0 0%, #FDF6E3 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div style={{ height: '1px', width: '40px', background: 'var(--gold)' }} />
            <span className="text-xs tracking-widest font-sans font-medium uppercase" style={{ color: 'var(--gold)' }}>Публикации</span>
            <div style={{ height: '1px', width: '40px', background: 'var(--gold)' }} />
          </div>
          <h1 className="font-serif font-semibold mb-4" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--gold)' }}>
            Статьи и блог
          </h1>
          <p className="font-sans text-lg leading-relaxed" style={{ color: 'var(--brown)', maxWidth: '560px', margin: '0 auto' }}>
            Исследования, разборы и аналитика по всем трём направлениям астрологической системы.
          </p>
        </div>
      </section>

      <section className="py-12" style={{ backgroundColor: 'var(--parchment-light)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-sans font-medium transition-all"
                style={{
                  backgroundColor: activeCategory === cat ? 'var(--gold)' : 'var(--parchment-card)',
                  color: activeCategory === cat ? 'var(--brown-dark)' : 'var(--brown-light)',
                  border: activeCategory === cat ? '1.5px solid var(--gold)' : '1.5px solid rgba(212,175,55,0.3)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <div key={article.id} className="card-hover p-6 rounded-2xl flex flex-col" style={{ backgroundColor: 'var(--parchment-card)', border: '1.5px solid rgba(212,175,55,0.3)', boxShadow: '0 4px 20px rgba(92,61,46,0.06)' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-sans font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(212,175,55,0.12)', color: 'var(--gold)' }}>
                    {article.category}
                  </span>
                  <span className="text-xs font-sans" style={{ color: 'var(--brown-light)' }}>{article.readTime}</span>
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3 leading-snug" style={{ color: 'var(--brown)' }}>
                  {article.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--brown-light)' }}>
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs" style={{ color: 'var(--brown-light)', opacity: 0.7 }}>{article.date}</span>
                  <a href="#" className="font-sans text-sm font-semibold hover:underline" style={{ color: 'var(--gold)' }}>
                    Читать →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
