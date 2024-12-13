import { memo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NavLink, MobileNavLink } from './NavLink';

const MemoNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full bg-gray-600 shadow-xl backdrop-blur-sm">
      <div className="max-w-6xl mx-auto lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-8">
              <NavLink href="#">Home</NavLink>
              <NavLink href="#new-arrivals">New Arrivals</NavLink>
              <NavLink href="#collections">Collections</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary-dark focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="border-t border-gray-100 md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#">Home</MobileNavLink>
            <MobileNavLink href="#new-arrivals">New Arrivals</MobileNavLink>
            <MobileNavLink href="#collections">Collections</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};


const Navbar = memo(MemoNavbar);
export default Navbar;