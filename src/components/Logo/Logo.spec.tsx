import { render, screen } from '@testing-library/react';

import { Logo } from './Logo';

describe('<Logo />', () => {
  it('should render seccessfully', () => {
    render(<Logo />);

    const logoText = screen.getByRole('heading', { name: /logo/i });

    expect(logoText).toBeVisible();
  });
});
