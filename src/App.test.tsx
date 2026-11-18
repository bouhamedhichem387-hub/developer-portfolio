import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('developer portfolio', () => {
  it('renders the profile, education, project links, and verified contact channel', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /curiosity into craft/i })).toBeInTheDocument();
    expect(screen.getByText('Licence GLSI · 2nd year')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /visit my github/i })).toHaveAttribute('href', 'https://github.com/bouhamedhichem387-hub');
    expect(screen.getByRole('link', { name: /open e-commerce platform github repository/i })).toHaveAttribute('href', 'https://github.com/bouhamedhichem387-hub/ecommerce-platform');
    expect(screen.getByRole('link', { name: /open task management app github repository/i })).toHaveAttribute('href', 'https://github.com/bouhamedhichem387-hub/task-management-app');
  });

  it('filters project cards and restores the complete list', async () => {
    const user = userEvent.setup();
    render(<App />);
    const filters = screen.getByRole('group', { name: /filter projects/i });
    await user.click(within(filters).getByRole('button', { name: 'Frontend' }));
    expect(screen.getByRole('heading', { name: /developer portfolio/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /e-commerce platform/i })).not.toBeInTheDocument();
    await user.click(within(filters).getByRole('button', { name: 'All' }));
    expect(screen.getByRole('heading', { name: /e-commerce platform/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /task management app/i })).toBeInTheDocument();
  });

  it('opens and closes the mobile navigation accessibly', async () => {
    const user = userEvent.setup();
    render(<App />);
    const toggle = screen.getByRole('button', { name: /open navigation/i });
    await user.click(toggle);
    expect(screen.getByRole('button', { name: /close navigation/i })).toHaveAttribute('aria-expanded', 'true');
    await user.click(screen.getByRole('navigation', { name: /main navigation/i }).querySelector('a[href="#about"]')!);
    expect(screen.getByRole('button', { name: /open navigation/i })).toHaveAttribute('aria-expanded', 'false');
  });
});
