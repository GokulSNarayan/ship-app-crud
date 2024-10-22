import { render, screen } from '@testing-library/react';
import Dashboard from './page';
import { describe, it, expect } from 'vitest';

describe('Dashboard', () => {
    render(<Dashboard />);
    it('renders the welcome message', async () => {
        const heading = await screen.findByText('Welcome to the Ships Dashboard');
        expect(heading).toBeDefined();
    });
});