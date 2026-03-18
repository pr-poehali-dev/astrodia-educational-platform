import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HERO_IMG = 'https://cdn.poehali.dev/projects/a6a93ef8-7320-4985-8f46-a67d4aaa4015/files/c93078b5-4118-4a18-afe9-2325055f3e0f.jpg';
const AUTHOR_IMG = 'https://cdn.poehali.dev/projects/a6a93ef8-7320-4985-8f46-a67d4aaa4015/files/b2e1aede-719b-4254-9b98-e42b2cfc53b1.jpg';

const directions = [
  {
    emoji: '🌙',
    title: 'Древнерусская астрология',
    desc: 'Исконные календарные системы, природные циклы и древняя традиция наблюдения за небом в русской культуре.',
    path: '/ancient-russian',
  },
  {
    emoji: '⭐',
    title: 'Западная астрология',
    desc: 'Натальная карта, транзиты, прогрессии и прогностика — полная система западной астрологической традиции.',
    path: '/western',
  },
  {
    emoji: '🌿',
    title: 'Медицинская астрология',
    desc: 'Влияние планетарных циклов на здоровье, конституцию и биологические ритмы человека.',
    path: '/medical',
  },
];

const tariffs = [
  {
    period: '1 месяц',
    price: '2 900 ₽',
    perMonth: '2 900 ₽/мес',
    popular: false,
    features: ['Все разделы платформы', 'Статьи и лекции', 'Личный кабинет'],
  },
  {
    period: '6 месяцев',
    price: '12 000 ₽',
    perMonth: '2 000 ₽/мес',
    popular: true,
    features: ['Все разделы платформы', 'Статьи и лекции', 'Личный кабинет', 'Приоритетный доступ', 'Экономия 32%'],
  },
  {
    period: '1 год',
    price: '18 000 ₽',
    perMonth: '1 500 ₽/мес',
    popular: false,
    features: ['Все разделы платформы', 'Статьи и лекции', 'Личный кабинет', 'Приоритетный доступ', 'Экономия 48%'],
  },
];

const whyNotSchool = [
  'Нет быстрых курсов и поверхностных методик',
  'Нет упрощённых объяснений ради охвата аудитории',
  'Только системное, глубокое понимание астрологии',
  'Материалы раскрываются постепенно — по мере готовности',
  'Исследование, а не заучивание правил',
  'Три традиции в единой взаимосвязанной системе',
];

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--parchment)' }}>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5E8D0 0%, #FDF6E3 50%, #F0DEC0 100%)', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
        <div className="celestial-circle" style={{ width: '600px', height: '600px', top: '-100px', right: '-100px' }} />
        <div className="celestial-circle" style={{ width: '400px', height: '400px', top: '50px', right: '50px' }} />
        <div className="celestial-circle" style={{ width: '200px', height: '200px', top: '150px', right: '200px' }} />
        <div className="star" style={{ top: '15%', left: '10%' }} />
        <div className="star" style={{ top: '25%', left: '25%', animationDelay: '1s' }} />
        <div className="star" style={{ top: '60%', left: '5%', animationDelay: '2s' }} />
        <div className="star" style={{ top: '80%', right: '15%', animationDelay: '0.5s', width: '3px', height: '3px' }} />
        <div className="star" style={{ top: '35%', right: '30%', animationDelay: '1.5s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6 animate-fade-in-up delay-100">
                <div style={{ height: '1px', width: '40px', background: 'var(--gold)' }} />
                <span className="text-xs tracking-widest font-sans font-medium uppercase" style={{ color: 'var(--gold)' }}>
                  Целостная система
                </span>
              </div>

              <h1 className="font-serif font-semibold leading-tight mb-4 animate-fade-in-up delay-200" style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--gold)' }}>
                Астродея — система целостной астрологии
              </h1>

              <p className="font-serif italic mb-8 leading-relaxed animate-fade-in-up delay-300" style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'var(--brown-light)' }}>
                Древнерусская традиция · Западная астрология · Медицинская астрология
              </p>

              <p className="font-sans mb-10 leading-relaxed animate-fade-in-up delay-400" style={{ fontSize: '16px', color: 'var(--brown)', maxWidth: '520px' }}>
                Первая платформа, объединяющая три астрологические системы в единую методологию. Не курсы — исследование. Не схемы — понимание.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-500">
                <Link to="/subscription" className="btn-gold px-8 py-3 text-base font-sans font-semibold inline-block">
                  Получить доступ к платформе
                </Link>
                <Link
                  to="/methodology"
                  className="px-8 py-3 text-base font-sans font-semibold inline-block rounded transition-colors"
                  style={{ border: '1.5px solid var(--brown-light)', color: 'var(--brown)' }}
                >
                  О методологии
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in delay-300 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ border: '2px solid rgba(212,175,55,0.4)' }}>
                <img
                  src={HERO_IMG}
                  alt="Астродея — небесная символика"
                  className="w-full object-cover"
                  style={{ height: '480px' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(92,61,46,0.3) 0%, transparent 60%)' }} />
              </div>
              <div className="absolute -bottom-4 -left-4 px-5 py-3 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.5)' }}>
                <div className="font-serif text-sm font-semibold" style={{ color: 'var(--gold)' }}>3 традиции</div>
                <div className="font-sans text-xs" style={{ color: 'var(--brown-light)' }}>в единой системе</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О ПРОЕКТЕ */}
      <section className="py-20" style={{ backgroundColor: 'var(--parchment-light)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="ornament-divider mb-6">
            <span className="font-serif text-sm" style={{ color: 'var(--gold)' }}>✦</span>
          </div>
          <h2 className="font-serif font-semibold mb-6" style={{ fontSize: '36px', color: 'var(--gold)' }}>
            Что такое Астродея
          </h2>
          <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: 'var(--brown)' }}>
            Астродея — исследовательская платформа, где астрология рассматривается не как набор предсказаний, а как стройная система знания о человеке и времени. Три направления изучаются как единый организм.
          </p>
          <p className="font-sans text-lg leading-relaxed" style={{ color: 'var(--brown-light)' }}>
            Здесь нет быстрых ответов. Есть глубина, система и постепенное раскрытие — для тех, кто готов исследовать всерьёз.
          </p>
        </div>
      </section>

      {/* МЕТОДОЛОГИЯ */}
      <section className="py-20" style={{ backgroundColor: 'var(--parchment)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif font-semibold mb-4" style={{ fontSize: '36px', color: 'var(--gold)' }}>
            Методология
          </h2>
          <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: 'var(--brown)', maxWidth: '640px', margin: '0 auto 32px' }}>
            Целостный взгляд на астрологию как систему, в которой каждый элемент связан с другим. Три направления изучаются параллельно, взаимно обогащая друг друга.
          </p>
          <div className="flex justify-center gap-8 mb-10 flex-wrap">
            {['🌙', '⭐', '🌿'].map((emoji) => (
              <div key={emoji} className="w-16 h-16 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1.5px solid var(--gold)' }}>
                {emoji}
              </div>
            ))}
          </div>
          <Link to="/methodology" className="btn-gold px-8 py-3 text-base font-sans font-semibold inline-block">
            Подробнее о методологии
          </Link>
        </div>
      </section>

      {/* АВТОР */}
      <section className="py-20" style={{ backgroundColor: 'var(--parchment-light)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ border: '2px solid rgba(212,175,55,0.35)' }}>
                <img src={AUTHOR_IMG} alt="Автор системы Астродея" className="w-full object-cover" style={{ height: '480px' }} />
              </div>
              <div className="absolute -bottom-5 -right-5 px-5 py-3 rounded-xl shadow-lg hidden lg:block" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.5)' }}>
                <div className="font-serif text-sm font-semibold" style={{ color: 'var(--gold)' }}>Основатель системы</div>
                <div className="font-sans text-xs" style={{ color: 'var(--brown-light)' }}>25+ лет исследований</div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ height: '1px', width: '32px', background: 'var(--gold)' }} />
                <span className="text-xs tracking-widest font-sans font-medium uppercase" style={{ color: 'var(--gold)' }}>Основатель</span>
              </div>
              <h2 className="font-serif font-semibold mb-3" style={{ fontSize: '38px', color: 'var(--gold)' }}>
                Автор и основатель системы
              </h2>
              <p className="font-serif italic text-lg mb-6" style={{ color: 'var(--brown-light)' }}>
                «Система не возникает сама. За ней стоит человек, который прошёл путь и нашёл связи там, где их не видели другие.»
              </p>
              <p className="font-sans text-base leading-relaxed mb-6" style={{ color: 'var(--brown)' }}>
                Более двадцати пяти лет исследований трёх астрологических традиций, их сравнительный анализ и синтез в единую, живую методологию. Платформа Астродея — результат этого пути.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Подход к работе', text: 'Системное мышление, опора на первоисточники, отказ от упрощений' },
                  { title: 'Принцип платформы', text: 'Знание раскрывается постепенно — в темпе готовности исследователя' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.3)' }}>
                    <div className="font-serif font-semibold text-sm mb-1" style={{ color: 'var(--gold)' }}>{item.title}</div>
                    <div className="font-sans text-sm" style={{ color: 'var(--brown-light)' }}>{item.text}</div>
                  </div>
                ))}
              </div>

              <Link to="/author" className="btn-gold px-8 py-3 text-base font-sans font-semibold inline-block">
                Изучить методологию
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ТРИ НАПРАВЛЕНИЯ */}
      <section className="py-20" style={{ backgroundColor: 'var(--parchment)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif font-semibold mb-4" style={{ fontSize: '36px', color: 'var(--gold)' }}>
              Направления исследований
            </h2>
            <p className="font-sans text-base" style={{ color: 'var(--brown-light)' }}>Три системы — единый взгляд на мир</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {directions.map((d) => (
              <div key={d.path} className="card-hover p-7 rounded-2xl flex flex-col" style={{ backgroundColor: 'var(--parchment-card)', border: '1.5px solid rgba(212,175,55,0.4)', boxShadow: '0 4px 20px rgba(92,61,46,0.08)' }}>
                <div className="text-4xl mb-4">{d.emoji}</div>
                <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: 'var(--gold)' }}>{d.title}</h3>
                <p className="font-sans text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--brown)' }}>{d.desc}</p>
                <Link to={d.path} className="px-5 py-2 text-sm text-center rounded border font-sans font-semibold transition-all hover:bg-yellow-600/10" style={{ borderColor: 'var(--gold)', color: 'var(--brown-dark)' }}>
                  Перейти в раздел
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФОРМАТ */}
      <section className="py-20" style={{ backgroundColor: 'var(--parchment-light)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif font-semibold mb-4" style={{ fontSize: '36px', color: 'var(--gold)' }}>
              Формат платформы
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { icon: '📅', title: 'Подписка', desc: 'Доступ ко всем материалам — ежемесячно или на год' },
              { icon: '📊', title: 'Аналитика', desc: 'Отслеживайте прогресс в личном кабинете' },
              { icon: '🎓', title: 'Лекции', desc: 'Тексты, схемы и разборы в структурированном формате' },
              { icon: '🔓', title: 'Раскрытие', desc: 'Контент открывается постепенно по мере готовности' },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-xl text-center" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.3)' }}>
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="font-serif font-semibold text-base mb-2" style={{ color: 'var(--gold)' }}>{f.title}</div>
                <div className="font-sans text-sm leading-relaxed" style={{ color: 'var(--brown-light)' }}>{f.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/subscription" className="btn-gold px-8 py-3 text-base font-sans font-semibold inline-block">
              Получить доступ
            </Link>
          </div>
        </div>
      </section>

      {/* ПОЧЕМУ НЕ ШКОЛА */}
      <section className="py-20" style={{ backgroundColor: 'var(--parchment)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif font-semibold mb-4" style={{ fontSize: '36px', color: 'var(--gold)' }}>
              Почему Астродея — не очередная школа
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whyNotSchool.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.25)' }}>
                <span className="text-base mt-0.5" style={{ color: 'var(--gold)' }}>✦</span>
                <span className="font-sans text-sm leading-relaxed" style={{ color: 'var(--brown)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ТАРИФЫ */}
      <section className="py-20" style={{ backgroundColor: 'var(--parchment-light)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif font-semibold mb-3" style={{ fontSize: '36px', color: 'var(--gold)' }}>
              Исследование астрологии как системы
            </h2>
            <p className="font-sans text-base" style={{ color: 'var(--brown-light)' }}>Выберите подходящий формат доступа</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tariffs.map((t) => (
              <div
                key={t.period}
                className="card-hover p-7 rounded-2xl flex flex-col relative"
                style={{
                  backgroundColor: 'var(--parchment-card)',
                  border: t.popular ? '2px solid var(--gold)' : '1.5px solid rgba(212,175,55,0.3)',
                  boxShadow: t.popular ? '0 8px 40px rgba(212,175,55,0.2)' : '0 4px 16px rgba(92,61,46,0.06)',
                }}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-sans font-semibold" style={{ backgroundColor: 'var(--gold)', color: 'var(--brown-dark)' }}>
                    Рекомендуем
                  </div>
                )}
                <div className="font-serif text-lg font-semibold mb-2" style={{ color: 'var(--brown-light)' }}>{t.period}</div>
                <div className="font-serif text-4xl font-semibold mb-1" style={{ color: 'var(--gold)' }}>{t.price}</div>
                <div className="font-sans text-xs mb-6" style={{ color: 'var(--brown-light)' }}>{t.perMonth}</div>
                <ul className="space-y-2 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-sans text-sm" style={{ color: 'var(--brown)' }}>
                      <span style={{ color: 'var(--gold)' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/subscription" className="btn-gold px-6 py-3 text-sm text-center font-sans font-semibold block">
                  Получить доступ
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center font-sans text-xs mt-6" style={{ color: 'var(--brown-light)', opacity: 0.7 }}>
            После оплаты доступ предоставляется вручную в течение 24 часов
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
