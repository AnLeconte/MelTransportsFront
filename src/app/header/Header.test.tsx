import '@testing-library/jest-dom'
import React from 'react'
import Header from './Header'
import { render, screen } from '@testing-library/react'

describe('Header component', () => {
  test('should render link text correctly', () => {
    render(<Header />);
    expect(screen.getByText('Trouver un itinéraire')).toBeInTheDocument();
    expect(screen.getByText('Nos lignes')).toBeInTheDocument();
    expect(screen.getByText('Perturbations')).toBeInTheDocument();
    expect(screen.getByText('Plan du réseau')).toBeInTheDocument();
    expect(screen.getByText('Connexion')).toBeInTheDocument();
  });

  test('should render icons', () => {
    render(<Header />);
    expect(screen.getByTestId('logo-header')).toBeInTheDocument();
    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
    expect(screen.getByTestId('notification-icon')).toBeInTheDocument();

  });

  test('should navigate when link is clicked', () => {
    render(<Header />);
    const itineraireLink = screen.getByText('Trouver un itinéraire');
    expect(itineraireLink.closest('a')).toHaveAttribute('href', '/itineraire');

    const nosLignesLink = screen.getByText('Nos lignes');
    expect(nosLignesLink.closest('a')).toHaveAttribute('href','/lignes')

    const perturbationLink = screen.getByText('Perturbations');
    expect(perturbationLink.closest('a')).toHaveAttribute('href', '/perturbations');

    const planReseauLink = screen.getByText('Plan du réseau');
    expect(planReseauLink.closest('a')).toHaveAttribute('href', '/plan')
  });
});
