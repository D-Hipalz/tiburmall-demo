import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-secondary hover:text-primary-dark px-3 py-2 text-sm font-medium tracking-wider transition-colors duration-200"
  >
    {children}
  </a>
);

export const MobileNavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="block text-secondary hover:text-primary-dark px-3 py-2 text-base font-medium tracking-wider transition-colors duration-200"
  >
    {children}
  </a>
);