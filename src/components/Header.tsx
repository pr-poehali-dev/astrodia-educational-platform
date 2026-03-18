import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Методология', path: '/methodology' },
  { label: 'Древнерусская', path: '/ancient-russian' },
  { label: 'Западная', path: '/western' },
  { label: 'Медицинская', path: '/medical' },
  { label: 'Подписка', path: '/subscription' },
  { label: 'Статьи', path: '/articles' },
  { label: 'Автор', path: '/author' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: 'var(--parchment)', borderBottom: '1px solid rgba(212,175,55,0.3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="font-serif text-2xl font-semibold tracking-wide" style={{ color: 'var(--gold)' }}>
              АСТРОДЕЯ
            </span>
            <span className="text-xs italic font-sans" style={{ color: 'var(--brown-light)', fontSize: '11px' }}>
              Платформа целостной астрологии
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-sm ${location.pathname === item.path ? 'gold-text' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/dashboard" className="nav-link text-sm">
              Кабинет
            </Link>
            <Link to="/subscription" className="btn-gold px-5 py-2 text-sm font-sans font-semibold">
              Получить доступ
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: 'var(--brown)' }}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t" style={{ borderColor: 'rgba(212,175,55,0.2)' }}>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="nav-link px-2 py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/subscription"
                className="btn-gold px-5 py-2 text-sm text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Получить доступ
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
