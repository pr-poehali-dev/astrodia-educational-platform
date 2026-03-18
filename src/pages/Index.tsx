import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HERO_BG = 'https://cdn.poehali.dev/projects/a6a93ef8-7320-4985-8f46-a67d4aaa4015/files/fa242ea4-e5be-4a15-be87-03518791b0be.jpg';
const AUTHOR_IMG = 'https://cdn.poehali.dev/projects/a6a93ef8-7320-4985-8f46-a67d4aaa4015/files/b2e1aede-719b-4254-9b98-e42b2cfc53b1.jpg';

const directions = [
  { emoji: '🌙', title: 'Древнерусская астрология', desc: 'Исконные календарные системы, природные циклы и древняя традиция наблюдения за небом в русской культуре.', path: '/ancient-russian' },
  { emoji: '⭐', title: 'Западная астрология', desc: 'Натальная карта, транзиты, прогрессии и прогностика — полная система западной астрологической традиции.', path: '/western' },
  { emoji: '🌿', title: 'Медицинская астрология', desc: 'Влияние планетарных циклов на здоровье, конституцию и биологические ритмы человека.', path: '/medical' },
];

const tariffs = [
  { period: '1 месяц', price: '2 900 ₽', perMonth: '2 900 ₽/мес', popular: false, features: ['Все разделы платформы', 'Статьи и лекции', 'Личный кабинет'] },
  { period: '6 месяцев', price: '12 000 ₽', perMonth: '2 000 ₽/мес', popular: true, features: ['Все разделы платформы', 'Статьи и лекции', 'Личный кабинет', 'Приоритетный доступ', 'Экономия 32%'] },
  { period: '1 год', price: '18 000 ₽', perMonth: '1 500 ₽/мес', popular: false, features: ['Все разделы платформы', 'Статьи и лекции', 'Личный кабинет', 'Приоритетный доступ', 'Экономия 48%'] },
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
    <div className="min-h-screen" style={{ backgroundColor: '#1A0F05' }}>
      <Header />

      {/* ═══════════════════════════════════════
          HERO — живописный фон с маяком
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: '92vh' }}>
        {/* Фоновое изображение */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Тёмные оверлеи — как в макете: центр светлее, края темнее */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(10,5,2,0.15) 0%, rgba(10,5,2,0.55) 70%, rgba(5,2,0,0.82) 100%)'
        }} />
        {/* Тёмная полоса сверху под шапку */}
        <div className="absolute top-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(180deg, rgba(10,5,2,0.6) 0%, transparent 100%)' }} />
        {/* Тёмная полоса снизу */}
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(0deg, rgba(10,5,2,0.85) 0%, transparent 100%)' }} />

        {/* Контент поверх */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6" style={{ minHeight: '92vh' }}>

          {/* Заголовок */}
          <h1 className="font-serif font-semibold mb-4 animate-fade-in-up delay-100" style={{
            fontSize: 'clamp(34px, 5.5vw, 66px)',
            color: '#F5E8D0',
            textShadow: '0 2px 24px rgba(0,0,0,0.7), 0 0 60px rgba(212,175,55,0.15)',
            lineHeight: 1.2,
            maxWidth: '700px',
          }}>
            Астродея — система<br />целостной астрологии
          </h1>

          {/* Подзаголовок Дух · Время · Тело */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up delay-200">
            <div style={{ height: '1px', width: '32px', background: 'linear-gradient(90deg, transparent, var(--gold))' }} />
            <span className="font-serif italic text-lg" style={{ color: 'var(--gold)', textShadow: '0 0 20px rgba(212,175,55,0.5)' }}>
              ☀ Дух
            </span>
            <span style={{ color: 'rgba(212,175,55,0.4)' }}>·</span>
            <span className="font-serif italic text-lg" style={{ color: 'var(--gold)', textShadow: '0 0 20px rgba(212,175,55,0.5)' }}>
              🌙 Время
            </span>
            <span style={{ color: 'rgba(212,175,55,0.4)' }}>·</span>
            <span className="font-serif italic text-lg" style={{ color: 'var(--gold)', textShadow: '0 0 20px rgba(212,175,55,0.5)' }}>
              🌿 Тело
            </span>
            <div style={{ height: '1px', width: '32px', background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          </div>

          {/* Описание */}
          <div className="max-w-xl mx-auto mb-10 space-y-3 animate-fade-in-up delay-300">
            <p className="font-sans leading-relaxed" style={{ color: 'rgba(245,232,208,0.9)', fontSize: '16px', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
              Проект посвящён исследованию и восстановлению целостной астрологической традиции.
            </p>
            <p className="font-sans leading-relaxed" style={{ color: 'rgba(245,232,208,0.85)', fontSize: '15px', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
              Мы объединяем разные направления астрологии в единую систему знаний о времени, космосе и человеке.
            </p>
            <p className="font-sans leading-relaxed" style={{ color: 'rgba(245,232,208,0.75)', fontSize: '14px', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
              Платформа создаётся как пространство для глубокого изучения астрологии — без упрощений, поверхностных трактовок и массовых курсов.
            </p>
          </div>

          {/* CTA кнопка — точно как в макете */}
          <div className="animate-fade-in-up delay-400">
            <Link
              to="/subscription"
              className="inline-block font-sans font-semibold transition-all"
              style={{
                background: 'linear-gradient(180deg, rgba(212,175,55,0.22) 0%, rgba(140,100,20,0.28) 100%)',
                border: '2px solid rgba(212,175,55,0.7)',
                color: '#F5E8D0',
                padding: '14px 40px',
                fontSize: '17px',
                letterSpacing: '0.02em',
                boxShadow: '0 0 32px rgba(212,175,55,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
                textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                borderRadius: '3px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(180deg, rgba(232,200,74,0.35) 0%, rgba(180,130,30,0.4) 100%)';
                e.currentTarget.style.boxShadow = '0 0 48px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(180deg, rgba(212,175,55,0.22) 0%, rgba(140,100,20,0.28) 100%)';
                e.currentTarget.style.boxShadow = '0 0 32px rgba(212,175,55,0.25), inset 0 1px 0 rgba(255,255,255,0.08)';
              }}
            >
              Получить доступ к платформе
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          О ПРОЕКТЕ
      ═══════════════════════════════════════ */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #1A0F05 0%, #221408 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="ornament-divider mb-6" style={{ '--gold': 'rgba(212,175,55,0.5)' } as React.CSSProperties}>
            <span className="font-serif text-sm" style={{ color: 'var(--gold)' }}>✦</span>
          </div>
          <h2 className="font-serif font-semibold mb-6" style={{ fontSize: '36px', color: 'var(--gold)' }}>
            Что такое Астродея
          </h2>
          <p className="font-sans text-lg leading-relaxed mb-5" style={{ color: 'rgba(245,232,208,0.85)' }}>
            Астродея — исследовательская платформа, где астрология рассматривается не как набор предсказаний, а как стройная система знания о человеке и времени.
          </p>
          <p className="font-sans text-base leading-relaxed" style={{ color: 'rgba(245,232,208,0.6)' }}>
            Три направления — древнерусская традиция, западная астрология и медицинская астрология — изучаются как единый организм. Здесь нет быстрых ответов. Есть глубина и система.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ТРИ НАПРАВЛЕНИЯ
      ═══════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#1E1106' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif font-semibold mb-3" style={{ fontSize: '36px', color: 'var(--gold)' }}>
              Направления исследований
            </h2>
            <p className="font-sans text-sm" style={{ color: 'rgba(212,175,55,0.55)' }}>Три системы — единый взгляд на мир</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {directions.map((d) => (
              <div
                key={d.path}
                className="card-hover p-7 rounded-lg flex flex-col"
                style={{
                  background: 'linear-gradient(160deg, rgba(50,30,10,0.8), rgba(30,18,5,0.9))',
                  border: '1px solid rgba(212,175,55,0.3)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div className="text-4xl mb-4">{d.emoji}</div>
                <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: 'var(--gold)' }}>{d.title}</h3>
                <p className="font-sans text-sm leading-relaxed mb-6 flex-1" style={{ color: 'rgba(245,232,208,0.75)' }}>{d.desc}</p>
                <Link
                  to={d.path}
                  className="px-5 py-2 text-sm text-center font-sans font-medium transition-all"
                  style={{
                    border: '1px solid rgba(212,175,55,0.45)',
                    color: 'var(--gold)',
                    borderRadius: '3px',
                  }}
                >
                  Перейти в раздел
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          МЕТОДОЛОГИЯ
      ═══════════════════════════════════════ */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #1A0F05 0%, #221408 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif font-semibold mb-5" style={{ fontSize: '36px', color: 'var(--gold)' }}>
            Методология
          </h2>
          <p className="font-sans text-base leading-relaxed mb-10" style={{ color: 'rgba(245,232,208,0.8)', maxWidth: '600px', margin: '0 auto 40px' }}>
            Целостный взгляд на астрологию как систему, в которой каждый элемент связан с другим. Три направления изучаются параллельно, взаимно обогащая друг друга.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            {[
              { n: '01', title: 'Системность', text: 'Три традиции — единый организм' },
              { n: '02', title: 'Первоисточники', text: 'Опора на исторические тексты' },
              { n: '03', title: 'Постепенность', text: 'Знание раскрывается слоями' },
            ].map((p) => (
              <div key={p.n} className="p-5 rounded-lg text-center" style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.2)' }}>
                <div className="font-serif text-3xl font-light mb-2" style={{ color: 'rgba(212,175,55,0.3)' }}>{p.n}</div>
                <div className="font-serif font-semibold text-sm mb-1" style={{ color: 'var(--gold)' }}>{p.title}</div>
                <div className="font-sans text-xs" style={{ color: 'rgba(245,232,208,0.55)' }}>{p.text}</div>
              </div>
            ))}
          </div>
          <Link
            to="/methodology"
            className="inline-block px-8 py-3 font-sans font-semibold text-sm transition-all"
            style={{ background: 'linear-gradient(180deg, #E8C84A, #C9A227)', color: 'var(--brown-dark)', borderRadius: '3px' }}
          >
            Подробнее о методологии
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          АВТОР
      ═══════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#1E1106' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 8px 48px rgba(0,0,0,0.6)' }}>
                <img src={AUTHOR_IMG} alt="Автор системы" className="w-full object-cover" style={{ height: '440px' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,15,5,0.5) 0%, transparent 50%)' }} />
              </div>
              <div className="absolute -bottom-4 -right-4 px-5 py-3 rounded-lg hidden lg:block" style={{ background: 'rgba(26,15,5,0.95)', border: '1px solid rgba(212,175,55,0.4)' }}>
                <div className="font-serif text-sm font-semibold" style={{ color: 'var(--gold)' }}>Основатель системы</div>
                <div className="font-sans text-xs" style={{ color: 'rgba(212,175,55,0.6)' }}>25+ лет исследований</div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ height: '1px', width: '32px', background: 'var(--gold)' }} />
                <span className="text-xs tracking-widest font-sans uppercase" style={{ color: 'rgba(212,175,55,0.7)' }}>Основатель</span>
              </div>
              <h2 className="font-serif font-semibold mb-4" style={{ fontSize: '36px', color: 'var(--gold)' }}>
                Автор и основатель системы
              </h2>
              <p className="font-serif italic text-lg mb-5" style={{ color: 'rgba(212,175,55,0.65)' }}>
                «Система не возникает сама. За ней стоит человек, который прошёл путь и нашёл связи там, где их не видели другие.»
              </p>
              <p className="font-sans text-base leading-relaxed mb-8" style={{ color: 'rgba(245,232,208,0.75)' }}>
                Более двадцати пяти лет исследований трёх астрологических традиций, их сравнительный анализ и синтез в единую, живую методологию.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Подход', text: 'Системное мышление, опора на первоисточники' },
                  { title: 'Принцип', text: 'Знание раскрывается в темпе готовности' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-lg" style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <div className="font-serif font-semibold text-sm mb-1" style={{ color: 'var(--gold)' }}>{item.title}</div>
                    <div className="font-sans text-xs leading-relaxed" style={{ color: 'rgba(245,232,208,0.6)' }}>{item.text}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/author"
                className="inline-block px-8 py-3 font-sans font-semibold text-sm transition-all"
                style={{ background: 'linear-gradient(180deg, #E8C84A, #C9A227)', color: 'var(--brown-dark)', borderRadius: '3px' }}
              >
                Об авторе
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ФОРМАТ
      ═══════════════════════════════════════ */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #1A0F05 0%, #221408 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif font-semibold mb-3" style={{ fontSize: '36px', color: 'var(--gold)' }}>Формат платформы</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { icon: '📅', title: 'Подписка', desc: 'Доступ ко всем материалам — ежемесячно или на год' },
              { icon: '📊', title: 'Аналитика', desc: 'Прогресс и история в личном кабинете' },
              { icon: '🎓', title: 'Лекции', desc: 'Тексты, схемы и разборы в структурированном формате' },
              { icon: '🔓', title: 'Раскрытие', desc: 'Контент открывается постепенно по мере готовности' },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-lg text-center" style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.2)' }}>
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="font-serif font-semibold text-sm mb-2" style={{ color: 'var(--gold)' }}>{f.title}</div>
                <div className="font-sans text-xs leading-relaxed" style={{ color: 'rgba(245,232,208,0.6)' }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ПОЧЕМУ НЕ ШКОЛА
      ═══════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#1E1106' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif font-semibold mb-3" style={{ fontSize: '36px', color: 'var(--gold)' }}>
              Почему Астродея — не очередная школа
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whyNotSchool.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.18)' }}>
                <span style={{ color: 'var(--gold)', marginTop: '2px' }}>✦</span>
                <span className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(245,232,208,0.8)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ТАРИФЫ
      ═══════════════════════════════════════ */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #1A0F05 0%, #221408 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif font-semibold mb-3" style={{ fontSize: '36px', color: 'var(--gold)' }}>
              Исследование астрологии как системы
            </h2>
            <p className="font-sans text-sm" style={{ color: 'rgba(212,175,55,0.55)' }}>Выберите подходящий формат доступа</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tariffs.map((t) => (
              <div
                key={t.period}
                className="card-hover p-7 rounded-lg flex flex-col relative"
                style={{
                  background: t.popular
                    ? 'linear-gradient(160deg, rgba(70,45,10,0.7), rgba(40,25,5,0.9))'
                    : 'linear-gradient(160deg, rgba(40,25,8,0.7), rgba(25,15,4,0.9))',
                  border: t.popular ? '1.5px solid rgba(212,175,55,0.6)' : '1px solid rgba(212,175,55,0.2)',
                  boxShadow: t.popular ? '0 8px 40px rgba(212,175,55,0.15)' : '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-sans font-semibold whitespace-nowrap" style={{ background: 'linear-gradient(180deg, #E8C84A, #C9A227)', color: 'var(--brown-dark)' }}>
                    ✦ Рекомендуем
                  </div>
                )}
                <div className="font-serif text-lg mb-2" style={{ color: 'rgba(212,175,55,0.7)' }}>{t.period}</div>
                <div className="font-serif text-4xl font-semibold mb-1" style={{ color: 'var(--gold)' }}>{t.price}</div>
                <div className="font-sans text-xs mb-6" style={{ color: 'rgba(212,175,55,0.5)' }}>{t.perMonth}</div>
                <ul className="space-y-2 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-sans text-sm" style={{ color: 'rgba(245,232,208,0.75)' }}>
                      <span style={{ color: 'var(--gold)' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/subscription"
                  className="block text-center py-2.5 font-sans font-semibold text-sm transition-all"
                  style={{
                    background: t.popular ? 'linear-gradient(180deg, #E8C84A, #C9A227)' : 'transparent',
                    color: t.popular ? 'var(--brown-dark)' : 'var(--gold)',
                    border: t.popular ? 'none' : '1px solid rgba(212,175,55,0.4)',
                    borderRadius: '3px',
                  }}
                >
                  Получить доступ
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center font-sans text-xs mt-6" style={{ color: 'rgba(212,175,55,0.4)' }}>
            После оплаты доступ предоставляется вручную в течение 24 часов
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
