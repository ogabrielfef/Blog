import { render, screen } from '@testing-library/react';

import { List } from './List';

describe('<List />', () => {
  it('should', () => {
    const children = 'children';

    render(<List>{children}</List>);

    const childrenRelement = screen.getByText(children);

    expect(childrenRelement).toBeVisible();
  });
});
