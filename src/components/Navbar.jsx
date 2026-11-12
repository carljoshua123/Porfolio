import { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'certifications', label: 'Certification' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/40 bg-slate-950/95 backdrop-blur-xl shadow-[0_1px_2px_rgba(180,83,9,0.05)]">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="group flex items-center space-x-2 text-xl font-bold tracking-wider text-white focus:outline-none"
          >
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-2 text-amber-400 shadow-sm shadow-amber-500/10 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-amber-500/20 group-hover:shadow-md group-hover:shadow-amber-500/20">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="transition-colors group-hover:text-amber-300">
              CARL<span className="text-amber-400">.DEV</span>
            </span>
          </button>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center space-x-1 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? 'border border-amber-500/20 bg-amber-500/10 text-amber-400 shadow-sm shadow-amber-500/10 ring-1 ring-amber-500/10'
                      : 'text-slate-300 hover:-translate-y-0.5 hover:bg-slate-800/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="space-y-1 border-t border-slate-800 bg-slate-950 px-4 pb-4 pt-2 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`w-full rounded-lg px-3 py-2.5 text-left text-base font-medium transition-colors ${
                currentPage === item.id
                  ? 'border border-amber-500/20 bg-amber-500/10 text-amber-400'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
