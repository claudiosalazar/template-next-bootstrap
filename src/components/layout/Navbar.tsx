'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig, navItems } from '@/config/site';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <nav className='navbar navbar-expand-md px-2 border-bottom'>
        <div className='container-fluid'>
          <Link className='navbar-brand' href='/'>
            {siteConfig.name}
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarText'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {navItems.slice(0, -1).map(item => (
                <li key={item.href} className='nav-item'>
                  <Link
                    className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <span className='navbar-text'>
              <Link
                className={`nav-link ${pathname === '/contacto' ? 'active' : ''}`}
                href='/contacto'
              >
                Contacto
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
