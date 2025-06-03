import { BrandLinkedin, BrandInstagram } from 'tabler-icons-react';

export default function Footer() {
  return (
    <div className='container-fluid g-0'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-4 px-4 border-top'>
        <div className='col-md-6 d-flex align-items-center'>
          <span className='mb-3 mb-md-0 text-body-secondary'>
            © 2025 - Template Next & Bootstrap. Este proyecto está licenciado
            bajo la{' '}
            <a
              href='https://opensource.org/licenses/MIT'
              target='_blank'
              rel='noopener'
            >
              Licencia MIT
            </a>
            .
          </span>
        </div>
        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <a className='text-body-secondary' href='#' aria-label='Linkedin'>
              <BrandLinkedin size={24} />
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-body-secondary' href='#' aria-label='Facebook'>
              <BrandInstagram size={24} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
