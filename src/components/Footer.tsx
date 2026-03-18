import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--parchment-footer)', borderTop: '1px solid rgba(212,175,55,0.3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo + About */}
          <div>
            <div className="font-serif text-2xl font-semibold mb-1" style={{ color: 'var(--gold)' }}>
              АСТРОДЕЯ
            </div>
            <div className="text-xs italic mb-4 font-sans" style={{ color: 'var(--brown-light)' }}>
              Платформа целостной астрологии
            </div>
            <p className="text-sm leading-relaxed font-sans" style={{ color: 'var(--brown-light)', opacity: 0.8 }}>
              Системное исследование астрологии — от древнерусской традиции до медицинских методик.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4" style={{ color: 'var(--gold)' }}>
              Разделы
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Методология', path: '/methodology' },
                { label: 'Древнерусская астрология', path: '/ancient-russian' },
                { label: 'Западная астрология', path: '/western' },
                { label: 'Медицинская астрология', path: '/medical' },
                { label: 'Статьи и блог', path: '/articles' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm hover:text-yellow-600 transition-colors font-sans" style={{ color: 'var(--brown-light)' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4" style={{ color: 'var(--gold)' }}>
              Контакты
            </h4>
            <ul className="space-y-2">
              <li className="text-sm font-sans" style={{ color: 'var(--brown-light)' }}>
                📧 info@astrodeya.ru
              </li>
              <li>
                <a href="https://t.me/astrodeya" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-yellow-600 transition-colors font-sans" style={{ color: 'var(--brown-light)' }}>
                  ✈️ Telegram-канал
                </a>
              </li>
              <li className="mt-4">
                <Link to="/subscription" className="btn-gold px-4 py-2 text-sm inline-block">
                  Получить доступ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4" style={{ color: 'var(--gold)' }}>
              Документы
            </h4>
            <ul className="space-y-2">
              {[
                'Пользовательское соглашение',
                'Политика конфиденциальности',
                'Условия подписки',
                'Отказ от ответственности',
              ].map((doc) => (
                <li key={doc}>
                  <a href="#" className="text-sm hover:text-yellow-600 transition-colors font-sans" style={{ color: 'var(--brown-light)', opacity: 0.75 }}>
                    {doc}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderColor: 'rgba(212,175,55,0.2)' }}>
          <div className="ornament-divider w-full sm:hidden mb-2">
            <span className="text-xs" style={{ color: 'var(--gold)' }}>✦</span>
          </div>
          <p className="text-xs font-sans" style={{ color: 'var(--brown-light)', opacity: 0.6 }}>
            © 2024 Астродея. Все права защищены.
          </p>
          <p className="text-xs italic font-serif" style={{ color: 'var(--gold)', opacity: 0.7 }}>
            «Небо говорит — мудрый слушает»
          </p>
        </div>
      </div>
    </footer>
  );
}
