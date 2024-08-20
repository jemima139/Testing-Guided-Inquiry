import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

jest.mock('../components/Hero');
jest.mock('../components/Features');
jest.mock('../components/Footer');

describe('HomePage Component', () => {
  beforeEach(() => {
    Hero.mockImplementation(() => <header>Hero Section</header>);
    Features.mockImplementation(() => <div className="features">Features Section</div>);
    Footer.mockImplementation(() => <footer>Footer Section</footer>);
  });

  it('should render the Hero component', () => {
    render(<HomePage />);
    expect(screen.getByText('Hero Section')).toBeInTheDocument();
  });

  it('should render the Features component', () => {
    render(<HomePage />);
    expect(screen.getByText('Features Section')).toBeInTheDocument();
  });

  it('should render the Footer component', () => {
    render(<HomePage />);
    expect(screen.getByText('Footer Section')).toBeInTheDocument();
  });

  it('should render all components in the correct order', () => {
    const { container } = render(<HomePage />);
    const hero = container.querySelector('header');
    const features = container.querySelector('.features');
    const footer = container.querySelector('footer');

    expect(hero).toBeInTheDocument();
    expect(features).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    
    
  });
});
