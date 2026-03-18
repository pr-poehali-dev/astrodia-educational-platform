import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface SectionConfig {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  articles: { title: string; excerpt: string; date: string }[];
}

const sections: Record<string, SectionConfig> = {
  'ancient-russian': {
    emoji: '🌙',
    title: 'Древнерусская астрология',
    subtitle: 'Исконные знания о небе и времени',
    description: 'Исследование астрологических знаний, закодированных в славянской культуре: праздничные циклы, природные ритмы, система мироздания наших предков.',
    topics: [
      'Славянский астрологический календарь',
      'Природные циклы и небесные ритмы',
      'Перунов день и летнее солнцестояние',
      'Коляда и зимний поворот Солнца',
      'Купала — астрология мифа',
      'Система стихий в русской традиции',
      'Зодиак в древнерусском понимании',
    ],
    articles: [
      { title: 'Перунов день и астрологический цикл', excerpt: 'Связь между древнерусскими праздниками и астрологическими конфигурациями.', date: '8 марта 2024' },
      { title: 'Коляда и солнечный поворот', excerpt: 'Зимнее солнцестояние в контексте астрологической системы.', date: '10 февраля 2024' },
    ],
  },
  'western': {
    emoji: '⭐',
    title: 'Западная астрология',
    subtitle: 'Классическая система от Птолемея до наших дней',
    description: 'Полная западная астрологическая система: натальная карта, планеты, знаки, дома, аспекты, транзиты и прогностика.',
    topics: [
      'Натальная карта: структура и анализ',
      'Планеты как архетипы',
      'Знаки зодиака в классическом понимании',
      'Астрологические дома',
      'Аспекты и конфигурации',
      'Транзиты и прогрессии',
      'Методы прогностики',
    ],
    articles: [
      { title: 'Прогрессии: метод вторичных дирекций', excerpt: 'Подробное руководство по работе с вторичными прогрессиями.', date: '3 марта 2024' },
      { title: 'Сатурн как структура судьбы', excerpt: 'Архетип Сатурна в классической и современной традиции.', date: '20 января 2024' },
    ],
  },
  'medical': {
    emoji: '🌿',
    title: 'Медицинская астрология',
    subtitle: 'Влияние неба на здоровье человека',
    description: 'Древняя традиция связи между планетарными конфигурациями и физиологией человека. Конституция, биоритмы и предрасположенности.',
    topics: [
      'Планеты и органы тела',
      'Знаки зодиака и конституция',
      'Лунные узлы в медицинской астрологии',
      'Марс: воспаление и энергия',
      'Сатурн: структура и дефицит',
      'Биологические ритмы и Луна',
      'Кризисные периоды и транзиты',
    ],
    articles: [
      { title: 'Лунные узлы в медицинской астрологии', excerpt: 'Как северный и южный узлы влияют на здоровье.', date: '12 марта 2024' },
      { title: 'Марс в системе управления телом', excerpt: 'Архетип Марса как воспаления, действия и жизненной силы.', date: '18 февраля 2024' },
    ],
  },
};

interface SectionPageProps {
  section: 'ancient-russian' | 'western' | 'medical';
}

export default function SectionPage({ section }: SectionPageProps) {
  const config = sections[section];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--parchment)' }}>
      <Header />

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #F5E8D0 0%, #FDF6E3 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl mb-6">{config.emoji}</div>
          <div className="flex items-center gap-3 justify-center mb-4">
            <div style={{ height: '1px', width: '40px', background: 'var(--gold)' }} />
            <span className="text-xs tracking-widest font-sans font-medium uppercase" style={{ color: 'var(--gold)' }}>{config.subtitle}</span>
            <div style={{ height: '1px', width: '40px', background: 'var(--gold)' }} />
          </div>
          <h1 className="font-serif font-semibold mb-4" style={{ fontSize: 'clamp(30px, 4vw, 46px)', color: 'var(--gold)' }}>
            {config.title}
          </h1>
          <p className="font-sans text-lg leading-relaxed" style={{ color: 'var(--brown)', maxWidth: '600px', margin: '0 auto' }}>
            {config.description}
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--parchment-light)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-serif font-semibold mb-6" style={{ fontSize: '26px', color: 'var(--gold)' }}>Темы раздела</h2>
              <div className="space-y-3 mb-10">
                {config.topics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <span className="font-serif text-sm font-semibold" style={{ color: 'rgba(212,175,55,0.4)', minWidth: '24px' }}>{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-sans text-sm" style={{ color: 'var(--brown)' }}>{topic}</span>
                    <span className="ml-auto font-sans text-xs px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(212,175,55,0.1)', color: 'var(--gold)' }}>Доступно</span>
                  </div>
                ))}
              </div>

              <h2 className="font-serif font-semibold mb-6" style={{ fontSize: '26px', color: 'var(--gold)' }}>Статьи раздела</h2>
              <div className="space-y-4">
                {config.articles.map((a, i) => (
                  <div key={i} className="card-hover p-5 rounded-xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1px solid rgba(212,175,55,0.25)' }}>
                    <div className="font-serif font-semibold text-base mb-2" style={{ color: 'var(--brown)' }}>{a.title}</div>
                    <div className="font-sans text-sm mb-3" style={{ color: 'var(--brown-light)' }}>{a.excerpt}</div>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs" style={{ color: 'var(--brown-light)', opacity: 0.7 }}>{a.date}</span>
                      <a href="#" className="font-sans text-sm font-semibold" style={{ color: 'var(--gold)' }}>Читать →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="sticky top-20 p-6 rounded-2xl" style={{ backgroundColor: 'var(--parchment-card)', border: '1.5px solid rgba(212,175,55,0.4)' }}>
                <div className="text-center mb-6">
                  <div className="text-3xl mb-3">{config.emoji}</div>
                  <div className="font-serif font-semibold text-base mb-2" style={{ color: 'var(--gold)' }}>Полный доступ</div>
                  <div className="font-sans text-sm" style={{ color: 'var(--brown-light)' }}>Все материалы раздела доступны по подписке</div>
                </div>
                <Link to="/subscription" className="btn-gold px-6 py-3 text-sm font-sans font-semibold block text-center mb-4">
                  Получить доступ
                </Link>
                <div className="ornament-divider my-4">
                  <span className="text-xs" style={{ color: 'var(--gold)' }}>✦</span>
                </div>
                <div className="space-y-2">
                  {['Все разделы', 'Статьи и лекции', 'Личный кабинет'].map((f) => (
                    <div key={f} className="font-sans text-xs flex items-center gap-2" style={{ color: 'var(--brown-light)' }}>
                      <span style={{ color: 'var(--gold)' }}>✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
