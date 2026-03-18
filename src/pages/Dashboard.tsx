import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const progressItems = [
  { section: 'Древнерусская астрология', progress: 35, total: 24, done: 8, color: 'var(--gold)' },
  { section: 'Западная астрология', progress: 58, total: 36, done: 21, color: 'var(--gold)' },
  { section: 'Медицинская астрология', progress: 12, total: 18, done: 2, color: 'var(--gold)' },
];

const historyItems = [
  { date: '15 марта 2024', plan: '6 месяцев', amount: '12 000 ₽', status: 'Активна', until: '15 сентября 2024' },
  { date: '15 сентября 2023', plan: '6 месяцев', amount: '12 000 ₽', status: 'Завершена', until: '15 марта 2024' },
];

const recentArticles = [
  { title: 'Лунные узлы в медицинской астрологии', date: '12 марта 2024', section: 'Медицинская' },
  { title: 'Перунов день и астрологический цикл', date: '8 марта 2024', section: 'Древнерусская' },
  { title: 'Прогрессии: метод вторичных дирекций', date: '3 марта 2024', section: 'Западная' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'progress' | 'history'>('progress');

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--parchment)' }}>
      <Header />

      <section className="py-12" style={{ background: 'linear-gradient(135deg, #F5E8D0 0%, #FDF6E3 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div style={{ height: '1px', width: '32px', background: 'var(--gold)' }} />
                <span className="text-xs tracking-widest font-sans font-medium uppercase" style={{ color: 'var(--gold)' }}>Личный кабинет</span>
              </div>
              <h1 className="font-serif font-semibold" style={{ fontSize: '36px', color: 'var(--gold)' }}>
                Добро пожаловать
              </h1>
              <p className="font-sans text-sm mt-1" style={{ color: 'var(--brown-light)' }}>
                Ваша подписка активна до 15 сентября 2024
              </p>
            </div>
            <div className="px-5 py-3 rounded-xl" style={{ backgroundColor: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)' }}>
              <div className="font-sans text-xs mb-0.5" style={{ color: 'var(--brown-light)' }}>Текущий план</div>
              <div className="font-serif font-semibold text-lg" style={{ color: 'var(--gold)' }}>6 месяцев</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8" style={{ backgroundColor: 'var(--parchment-light)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Изучено материалов', value: '31', sub: 'из 78 доступных' },
              { label: 'Дней с нами', value: '183', sub: 'с 15 сентября 2023' },
              { label: 'Разделов активно', value: '3', sub: 'все направления' },
            ].map((stat) => (
              <div key={stat.label} className="p-5 rounded-xl text-center" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.3)' }}>
                <div className="font-serif text-4xl font-semibold mb-1" style={{ color: 'var(--gold)' }}>{stat.value}</div>
                <div className="font-sans text-sm font-medium mb-0.5" style={{ color: 'var(--brown)' }}>{stat.label}</div>
                <div className="font-sans text-xs" style={{ color: 'var(--brown-light)' }}>{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-6 p-1 rounded-xl w-fit" style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}>
            {[{ key: 'progress', label: 'Прогресс обучения' }, { key: 'history', label: 'История подписки' }].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as 'progress' | 'history')}
                className="px-5 py-2 rounded-lg text-sm font-sans font-medium transition-all"
                style={{
                  backgroundColor: activeTab === tab.key ? 'var(--gold)' : 'transparent',
                  color: activeTab === tab.key ? 'var(--brown-dark)' : 'var(--brown-light)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'progress' && (
            <div className="space-y-4">
              {progressItems.map((item) => (
                <div key={item.section} className="p-6 rounded-xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.25)' }}>
                  <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                    <div className="font-serif font-semibold text-base" style={{ color: 'var(--brown)' }}>{item.section}</div>
                    <div className="font-sans text-sm" style={{ color: 'var(--brown-light)' }}>
                      {item.done} из {item.total} материалов
                    </div>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(212,175,55,0.2)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${item.progress}%`, backgroundColor: 'var(--gold)' }}
                    />
                  </div>
                  <div className="mt-2 text-xs font-sans" style={{ color: 'var(--gold)' }}>{item.progress}%</div>
                </div>
              ))}

              <div className="mt-6">
                <h3 className="font-serif font-semibold text-lg mb-4" style={{ color: 'var(--gold)' }}>Недавние материалы</h3>
                <div className="space-y-3">
                  {recentArticles.map((a) => (
                    <div key={a.title} className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.2)' }}>
                      <div>
                        <div className="font-sans text-sm font-medium" style={{ color: 'var(--brown)' }}>{a.title}</div>
                        <div className="font-sans text-xs mt-0.5" style={{ color: 'var(--brown-light)' }}>{a.date} · {a.section} астрология</div>
                      </div>
                      <a href="#" className="font-sans text-xs font-semibold" style={{ color: 'var(--gold)' }}>Читать →</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              {historyItems.map((item, i) => (
                <div key={i} className="p-6 rounded-xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.25)' }}>
                  <div className="flex flex-wrap justify-between gap-4">
                    <div>
                      <div className="font-sans text-xs mb-1" style={{ color: 'var(--brown-light)' }}>Дата оформления</div>
                      <div className="font-serif font-semibold" style={{ color: 'var(--brown)' }}>{item.date}</div>
                    </div>
                    <div>
                      <div className="font-sans text-xs mb-1" style={{ color: 'var(--brown-light)' }}>Тариф</div>
                      <div className="font-serif font-semibold" style={{ color: 'var(--brown)' }}>{item.plan}</div>
                    </div>
                    <div>
                      <div className="font-sans text-xs mb-1" style={{ color: 'var(--brown-light)' }}>Сумма</div>
                      <div className="font-serif font-semibold" style={{ color: 'var(--gold)' }}>{item.amount}</div>
                    </div>
                    <div>
                      <div className="font-sans text-xs mb-1" style={{ color: 'var(--brown-light)' }}>До</div>
                      <div className="font-serif font-semibold" style={{ color: 'var(--brown)' }}>{item.until}</div>
                    </div>
                    <div>
                      <div className="font-sans text-xs mb-1" style={{ color: 'var(--brown-light)' }}>Статус</div>
                      <span
                        className="font-sans text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: item.status === 'Активна' ? 'rgba(212,175,55,0.15)' : 'rgba(92,61,46,0.1)',
                          color: item.status === 'Активна' ? 'var(--gold)' : 'var(--brown-light)',
                        }}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-center pt-4">
                <Link to="/subscription" className="btn-gold px-6 py-2.5 text-sm font-sans font-semibold inline-block">
                  Продлить подписку
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
