import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('should render the footer component correctly', () => {
    render(<Footer />);
    expect(screen.getByText('Questions fréquentes')).toBeInTheDocument();
    expect(screen.getByText('Qui sommes-nous ?')).toBeInTheDocument();
    expect(screen.getByText('Contactez-nous')).toBeInTheDocument();
    expect(screen.getByText('Objets trouvés')).toBeInTheDocument();
    expect(screen.getByText('Politique de confidentialité')).toBeInTheDocument();
    expect(screen.getByText('Cookies')).toBeInTheDocument();
    expect(screen.getByText('Nous suivre:')).toBeInTheDocument();
  });
});
