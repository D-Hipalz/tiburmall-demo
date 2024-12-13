import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm font-medium tracking-wider text-white transition-colors duration-200 hover:text-primary-dark"
  >
    {children}
  </a>
);

export const MobileNavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="block px-3 py-2 text-base font-medium tracking-wider text-white transition-colors duration-200 hover:text-primary-dark"
  >
    {children}
  </a>
);