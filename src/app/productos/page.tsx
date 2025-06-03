import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Productos`,
};

export default function Product() {
  return (
    <>
      <section className='col-12'>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='mb-4'>Productos</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eu feugiat dolor, a hendrerit elit. Etiam eget facilisis purus.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
            <div className='col-12 col-md-6 col-lg-3 pb-4'>
              <div className='card'>
                <Image
                  src='/images/examples/robot-1.jpg'
                  alt='Imagen de ejemplo'
                  width={800}
                  height={400}
                  className='img-fluid'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Nombre producto</h5>
                  <p className='card-text'>
                    Precio <strong>$ 10.000</strong>
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Comprar
                  </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3 pb-4'>
              <div className='card'>
                <Image
                  src='/images/examples/robot-1.jpg'
                  alt='Imagen de ejemplo'
                  width={800}
                  height={400}
                  className='img-fluid'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Nombre producto</h5>
                  <p className='card-text'>
                    Precio <strong>$ 10.000</strong>
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Comprar
                  </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3 pb-4'>
              <div className='card'>
                <Image
                  src='/images/examples/robot-1.jpg'
                  alt='Imagen de ejemplo'
                  width={800}
                  height={400}
                  className='img-fluid'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Nombre producto</h5>
                  <p className='card-text'>
                    Precio <strong>$ 10.000</strong>
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Comprar
                  </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3 pb-4'>
              <div className='card'>
                <Image
                  src='/images/examples/robot-1.jpg'
                  alt='Imagen de ejemplo'
                  width={800}
                  height={400}
                  className='img-fluid'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Nombre producto</h5>
                  <p className='card-text'>
                    Precio <strong>$ 10.000</strong>
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
