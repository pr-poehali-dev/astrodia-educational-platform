import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const tariffs = [
  {
    period: '1 месяц',
    price: '2 900 ₽',
    perMonth: '2 900 ₽/мес',
    popular: false,
    features: ['Все разделы платформы', 'Статьи и лекции', 'Личный кабинет', 'История подписки'],
  },
  {
    period: '6 месяцев',
    price: '12 000 ₽',
    perMonth: '2 000 ₽/мес',
    popular: true,
    save: 'Экономия 5 400 ₽',
    features: ['Все разделы платформы', 'Статьи и лекции', 'Личный кабинет', 'История подписки', 'Приоритетный доступ к новым материалам', 'Экономия 32%'],
  },
  {
    period: '1 год',
    price: '18 000 ₽',
    perMonth: '1 500 ₽/мес',
    popular: false,
    save: 'Экономия 16 800 ₽',
    features: ['Все разделы платформы', 'Статьи и лекции', 'Личный кабинет', 'История подписки', 'Приоритетный доступ к новым материалам', 'Экономия 48%'],
  },
];

export default function Subscription() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--parchment)' }}>
      <Header />

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #F5E8D0 0%, #FDF6E3 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div style={{ height: '1px', width: '40px', background: 'var(--gold)' }} />
            <span className="text-xs tracking-widest font-sans font-medium uppercase" style={{ color: 'var(--gold)' }}>Доступ к платформе</span>
            <div style={{ height: '1px', width: '40px', background: 'var(--gold)' }} />
          </div>
          <h1 className="font-serif font-semibold mb-4" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--gold)' }}>
            Подписка на Астродею
          </h1>
          <p className="font-sans text-lg leading-relaxed" style={{ color: 'var(--brown)', maxWidth: '600px', margin: '0 auto' }}>
            Полный доступ к трём направлениям астрологии, лекциям, статьям и личному кабинету с отслеживанием прогресса.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--parchment-light)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tariffs.map((t) => (
              <div
                key={t.period}
                className="card-hover p-8 rounded-2xl flex flex-col relative"
                style={{
                  backgroundColor: 'var(--parchment-card)',
                  border: t.popular ? '2px solid var(--gold)' : '1.5px solid rgba(212,175,55,0.3)',
                  boxShadow: t.popular ? '0 12px 48px rgba(212,175,55,0.25)' : '0 4px 16px rgba(92,61,46,0.06)',
                }}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-xs font-sans font-semibold whitespace-nowrap" style={{ backgroundColor: 'var(--gold)', color: 'var(--brown-dark)' }}>
                    ✦ Рекомендуем
                  </div>
                )}
                {t.save && (
                  <div className="mb-3 text-xs font-sans font-semibold px-3 py-1 rounded-full inline-block w-fit" style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--gold)' }}>
                    {t.save}
                  </div>
                )}
                <div className="font-serif text-xl font-semibold mb-2" style={{ color: 'var(--brown-light)' }}>{t.period}</div>
                <div className="font-serif text-5xl font-semibold mb-1" style={{ color: 'var(--gold)' }}>{t.price}</div>
                <div className="font-sans text-sm mb-8" style={{ color: 'var(--brown-light)' }}>{t.perMonth}</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-sans text-sm" style={{ color: 'var(--brown)' }}>
                      <span className="text-base" style={{ color: 'var(--gold)' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn-gold px-6 py-3 text-sm font-sans font-semibold w-full">
                  Получить доступ
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 p-5 rounded-xl max-w-xl mx-auto" style={{ backgroundColor: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}>
            <p className="font-sans text-sm" style={{ color: 'var(--brown-light)' }}>
              После оплаты доступ предоставляется вручную в течение 24 часов.<br />
              При вопросах — напишите на <span style={{ color: 'var(--gold)' }}>info@astrodeya.ru</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--parchment)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif font-semibold text-center mb-10" style={{ fontSize: '30px', color: 'var(--gold)' }}>
            Что входит в подписку
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: '🌙', title: 'Древнерусская астрология', desc: 'Полный доступ к материалам по исконной традиции' },
              { icon: '⭐', title: 'Западная астрология', desc: 'Натальная карта, транзиты, прогностика' },
              { icon: '🌿', title: 'Медицинская астрология', desc: 'Влияние планет на здоровье и биоритмы' },
              { icon: '📚', title: 'Статьи и блог', desc: 'Регулярные публикации по всем направлениям' },
              { icon: '👤', title: 'Личный кабинет', desc: 'Прогресс обучения и история подписки' },
              { icon: '🔓', title: 'Постепенное раскрытие', desc: 'Доступ к материалам по мере освоения' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.25)' }}>
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className="font-serif font-semibold text-base mb-1" style={{ color: 'var(--gold)' }}>{item.title}</div>
                  <div className="font-sans text-sm" style={{ color: 'var(--brown-light)' }}>{item.desc}</div>
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
