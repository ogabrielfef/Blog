import { render, screen } from '@testing-library/react';

import { ListItem } from './ListItem';

describe('<ListItem />', () => {
  it('should', () => {
    const children = 'children';

    render(<ListItem>{children}</ListItem>);

    const childrenRelement = screen.getByText(children);

    expect(childrenRelement).toBeVisible();
  });
});
