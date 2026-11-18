import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('portfolio', () => {
  it('renders the introduction and main portfolio sections', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /building with curiosity & care/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /selected projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /find me on github/i })).toHaveAttribute('href', 'https://github.com/bouhamedhichem387-hub');
  });

  it('filters projects by category', async () => {
    const user = userEvent.setup();
    render(<App />);
    const filters = screen.getByRole('group', { name: /filter projects/i });
    await user.click(within(filters).getByRole('button', { name: 'Frontend' }));
    expect(screen.getByRole('heading', { name: /developer portfolio/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /e-commerce platform/i })).not.toBeInTheDocument();
    await user.click(within(filters).getByRole('button', { name: 'All' }));
    expect(screen.getByRole('heading', { name: /e-commerce platform/i })).toBeInTheDocument();
  });
});
