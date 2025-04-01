'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ClientNav() {
  const pathname = usePathname();

  return (
    <div className="space-x-4">
      <NavLink href="/" label="Home" pathname={pathname} />
      <NavLink href="/about" label="About" pathname={pathname} />
    </div>
  );
}

function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const isActive = pathname === href;

  return (
    <Link 
      href={href}
      className={`text-white hover:text-blue-200 ${isActive ? 'font-bold underline' : ''}`}
    >
      {label}
    </Link>
  );
}
