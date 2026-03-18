import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Методология', path: '/methodology' },
  { label: 'Древнерусская астрология', path: '/ancient-russian' },
  { label: 'Западная астрология', path: '/western' },
  { label: 'Медицинская астрология', path: '/medical' },
  { label: 'Статьи', path: '/articles' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50" style={{
      background: 'linear-gradient(180deg, rgba(30,18,8,0.97) 0%, rgba(44,28,12,0.96) 100%)',
      borderBottom: '1px solid rgba(212,175,55,0.25)',
      backdropFilter: 'blur(8px)',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.25), rgba(212,175,55,0.08))',
              border: '1.5px solid rgba(212,175,55,0.5)',
            }}>
              🔮
            </div>
            <div className="leading-none">
              <div className="font-serif font-semibold tracking-wide" style={{ color: 'var(--gold)', fontSize: '18px' }}>
                Астродея
              </div>
              <div className="font-sans text-xs" style={{ color: 'rgba(212,175,55,0.55)', fontSize: '10px', letterSpacing: '0.05em' }}>
                Целостная астрология
              </div>
            </div>
          </Link>

          {/* Desktop Nav — рамочный стиль как на макете */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-4 py-1.5 font-sans text-sm transition-all relative"
                  style={{
                    color: isActive ? 'var(--brown-dark)' : 'rgba(212,175,55,0.85)',
                    background: isActive ? 'linear-gradient(180deg, #E8C84A, #C9A227)' : 'transparent',
                    border: '1px solid rgba(212,175,55,0.3)',
                    borderLeft: i === 0 ? '1px solid rgba(212,175,55,0.3)' : 'none',
                    fontWeight: isActive ? 600 : 400,
                    fontSize: '13px',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/dashboard"
              className="px-4 py-1.5 font-sans text-sm transition-all"
              style={{
                color: 'rgba(212,175,55,0.85)',
                border: '1px solid rgba(212,175,55,0.3)',
                fontSize: '13px',
              }}
            >
              Кабинет
            </Link>
            <Link
              to="/subscription"
              className="px-5 py-1.5 font-sans text-sm font-semibold transition-all"
              style={{
                background: 'linear-gradient(180deg, #E8C84A, #C9A227)',
                color: 'var(--brown-dark)',
                border: '1px solid #B8971F',
                fontSize: '13px',
              }}
            >
              Войти
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: 'var(--gold)' }}>
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t" style={{ borderColor: 'rgba(212,175,55,0.2)' }}>
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 font-sans text-sm rounded"
                  style={{ color: location.pathname === item.path ? 'var(--gold)' : 'rgba(212,175,55,0.75)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/subscription"
                className="mt-2 px-5 py-2 text-sm text-center font-sans font-semibold"
                style={{ background: 'linear-gradient(180deg, #E8C84A, #C9A227)', color: 'var(--brown-dark)' }}
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
