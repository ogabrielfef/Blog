import Link from 'next/link';

import { siteConfig } from '@/config';
import { MainNavTypes } from '@/types';

import { Logo } from '../Logo';

type FooterProps = {
  items: MainNavTypes;
};

export const Footer = ({ items }: FooterProps) => {
  return (
    <footer>
      <div>
        <div role="contentinfo">
          <Logo />
          <p>{siteConfig.title}</p>
        </div>
        <div role="contentinfo">
          <p>Redes</p>
        </div>
        <div>
          <p>Sitemap</p>
          <ul>
            {items.mainNav.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>Make by ogabrielfef</div>
    </footer>
  );
};
