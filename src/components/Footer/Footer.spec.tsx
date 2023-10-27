import { siteConfig } from '@/config';
import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

const items = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Sobre mim',
    href: '/about'
  }
];

describe('<Footer />', () => {
  it('should render correctly', () => {
    render(<Footer items={items} />);

    const title = screen.getByText(siteConfig.title);
    const socialMediaSection = screen.getByText(/redes/i);
    const siteMapSection = screen.getByText(/sitemap/i);

    expect(title).toBeVisible();
    expect(socialMediaSection).toBeVisible();
    expect(siteMapSection).toBeVisible();
  });
});
