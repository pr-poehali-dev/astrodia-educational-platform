import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SEND_ORDER_URL = 'https://functions.poehali.dev/316ab3c1-3550-451c-be2b-adb1e4e9a303';

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
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSelect = (plan: string) => {
    setSelectedPlan(plan);
    setTimeout(() => {
      document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, plan: selectedPlan }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Ошибка. Попробуйте позже.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Не удалось отправить заявку. Проверьте соединение.');
    }
  };

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
            Выберите тариф и оставьте заявку — мы свяжемся с вами в течение 24 часов с инструкциями по оплате.
          </p>
        </div>
      </section>

      {/* Тарифы */}
      <section className="py-16" style={{ backgroundColor: 'var(--parchment-light)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tariffs.map((t) => {
              const isSelected = selectedPlan === `${t.period} — ${t.price}`;
              return (
                <div
                  key={t.period}
                  className="card-hover p-8 rounded-2xl flex flex-col relative cursor-pointer transition-all"
                  onClick={() => handleSelect(`${t.period} — ${t.price}`)}
                  style={{
                    backgroundColor: 'var(--parchment-card)',
                    border: isSelected ? '2px solid var(--gold)' : t.popular ? '2px solid var(--gold)' : '1.5px solid rgba(212,175,55,0.3)',
                    boxShadow: isSelected ? '0 12px 48px rgba(212,175,55,0.35)' : t.popular ? '0 12px 48px rgba(212,175,55,0.2)' : '0 4px 16px rgba(92,61,46,0.06)',
                    transform: isSelected ? 'translateY(-4px)' : undefined,
                  }}
                >
                  {t.popular && !isSelected && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-xs font-sans font-semibold whitespace-nowrap" style={{ backgroundColor: 'var(--gold)', color: 'var(--brown-dark)' }}>
                      ✦ Рекомендуем
                    </div>
                  )}
                  {isSelected && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-xs font-sans font-semibold whitespace-nowrap" style={{ backgroundColor: 'var(--gold)', color: 'var(--brown-dark)' }}>
                      ✓ Выбран
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
                  <button
                    className="btn-gold px-6 py-3 text-sm font-sans font-semibold w-full"
                    onClick={(e) => { e.stopPropagation(); handleSelect(`${t.period} — ${t.price}`); }}
                  >
                    {isSelected ? 'Выбран' : 'Выбрать тариф'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section className="py-16" id="order-form" style={{ backgroundColor: 'var(--parchment)' }}>
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif font-semibold mb-3" style={{ fontSize: '30px', color: 'var(--gold)' }}>
              Оставить заявку
            </h2>
            {selectedPlan ? (
              <div className="inline-block px-4 py-1.5 rounded-full font-sans text-sm font-semibold" style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: 'var(--gold)', border: '1px solid rgba(212,175,55,0.3)' }}>
                Выбран: {selectedPlan}
              </div>
            ) : (
              <p className="font-sans text-sm" style={{ color: 'var(--brown-light)' }}>
                Выберите тариф выше или заполните форму — мы подберём оптимальный вариант
              </p>
            )}
          </div>

          {status === 'success' ? (
            <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: 'var(--parchment-card)', border: '2px solid var(--gold)' }}>
              <div className="text-4xl mb-4">✦</div>
              <h3 className="font-serif font-semibold text-xl mb-3" style={{ color: 'var(--gold)' }}>
                Заявка принята!
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--brown)' }}>
                Мы получили вашу заявку и уже отправили подтверждение на <strong>{form.email}</strong>.<br /><br />
                В течение 24 часов вы получите инструкции по оплате и доступ к платформе.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl space-y-5"
              style={{ backgroundColor: 'var(--parchment-card)', border: '1.5px solid rgba(212,175,55,0.35)', boxShadow: '0 8px 32px rgba(92,61,46,0.08)' }}
            >
              <div>
                <label className="block font-sans text-sm font-medium mb-1.5" style={{ color: 'var(--brown)' }}>
                  Ваше имя *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Как вас зовут"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg font-sans text-sm outline-none transition-all"
                  style={{
                    backgroundColor: 'var(--parchment-light)',
                    border: '1.5px solid rgba(212,175,55,0.3)',
                    color: 'var(--brown)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(212,175,55,0.3)'}
                />
              </div>

              <div>
                <label className="block font-sans text-sm font-medium mb-1.5" style={{ color: 'var(--brown)' }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg font-sans text-sm outline-none transition-all"
                  style={{
                    backgroundColor: 'var(--parchment-light)',
                    border: '1.5px solid rgba(212,175,55,0.3)',
                    color: 'var(--brown)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(212,175,55,0.3)'}
                />
              </div>

              <div>
                <label className="block font-sans text-sm font-medium mb-1.5" style={{ color: 'var(--brown)' }}>
                  Телефон <span style={{ color: 'var(--brown-light)', fontWeight: 400 }}>(необязательно)</span>
                </label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg font-sans text-sm outline-none transition-all"
                  style={{
                    backgroundColor: 'var(--parchment-light)',
                    border: '1.5px solid rgba(212,175,55,0.3)',
                    color: 'var(--brown)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(212,175,55,0.3)'}
                />
              </div>

              {!selectedPlan && (
                <div>
                  <label className="block font-sans text-sm font-medium mb-1.5" style={{ color: 'var(--brown)' }}>
                    Желаемый тариф
                  </label>
                  <select
                    value={selectedPlan || ''}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg font-sans text-sm outline-none transition-all"
                    style={{
                      backgroundColor: 'var(--parchment-light)',
                      border: '1.5px solid rgba(212,175,55,0.3)',
                      color: selectedPlan ? 'var(--brown)' : 'var(--brown-light)',
                    }}
                  >
                    <option value="">Выберите тариф</option>
                    {tariffs.map((t) => (
                      <option key={t.period} value={`${t.period} — ${t.price}`}>
                        {t.period} — {t.price}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {errorMsg && (
                <div className="px-4 py-3 rounded-lg font-sans text-sm" style={{ backgroundColor: 'rgba(220,53,69,0.08)', border: '1px solid rgba(220,53,69,0.2)', color: '#dc3545' }}>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold px-6 py-3 text-base font-sans font-semibold w-full disabled:opacity-60"
              >
                {status === 'loading' ? 'Отправляем...' : 'Отправить заявку'}
              </button>

              <p className="font-sans text-xs text-center" style={{ color: 'var(--brown-light)', opacity: 0.75 }}>
                После заявки мы свяжемся с вами в течение 24 часов и предоставим реквизиты для оплаты
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Что входит */}
      <section className="py-16" style={{ backgroundColor: 'var(--parchment-light)' }}>
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
