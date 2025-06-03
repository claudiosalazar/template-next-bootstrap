import Image from 'next/image';
import Carousel from '@/components/layout/Carousel';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.name,
};

export default function Home() {
  return (
    <>
      <div className='container-fluid'>
        <Carousel />
      </div>
      <section className='col-12'>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-12 col-md-8'>
              <h1 className='mb-4'>Bienvenido al template</h1>
              <Image
                src='/images/examples/robot-0.jpg'
                alt='Imagen de ejemplo'
                width={1200}
                height={1200}
                className='img-fluid mb-5 rounded'
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eu feugiat dolor, a hendrerit elit. Etiam eget facilisis purus.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Quisque a posuere nibh. Aliquam
                vel nisl in odio vulputate scelerisque. Proin tincidunt vehicula
                convallis. Suspendisse dolor felis, tincidunt vitae tincidunt
                eget, auctor in diam. Vivamus fermentum nisi vel leo lobortis,
                at luctus est sagittis. Donec at sapien id massa tincidunt porta
                eget et nulla. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin volutpat est ut hendrerit efficitur.
                Vestibulum ornare nibh vel malesuada varius. Cras eget felis
                odio.
              </p>
              <p>
                Nam lobortis, nibh ut fermentum volutpat, massa nulla porta
                erat, vel efficitur sem justo at risus. Suspendisse vel magna
                iaculis, tempor ex a, vestibulum nibh. Ut finibus condimentum
                lobortis. Mauris placerat a ipsum vitae fringilla. Nam vulputate
                est sed malesuada efficitur. Phasellus lacinia a ligula et
                ullamcorper. Vivamus blandit varius pellentesque. Duis eleifend,
                quam sed posuere suscipit, elit justo dictum purus, non aliquet
                erat odio ac dolor. Nam aliquam iaculis magna quis mattis.
                Nullam non tellus ex.
              </p>
              <blockquote className='blockquote'>
                <p className='mb-0'>
                  &ldquo;Este es un ejemplo de cita en el blog. Puedes usarlo para
                  destacar información importante.&rdquo;
                </p>
              </blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eu feugiat dolor, a hendrerit elit. Etiam eget facilisis purus.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Quisque a posuere nibh. Aliquam
                vel nisl in odio vulputate scelerisque. Proin tincidunt vehicula
                convallis. Suspendisse dolor felis, tincidunt vitae tincidunt
                eget, auctor in diam. Vivamus fermentum nisi vel leo lobortis,
                at luctus est sagittis. Donec at sapien id massa tincidunt porta
                eget et nulla. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin volutpat est ut hendrerit efficitur.
                Vestibulum ornare nibh vel malesuada varius. Cras eget felis
                odio.
              </p>
            </div>
            <div className='col-12 col-md-4'>
              <div className='card mb-4'>
                <Image
                  src='/images/examples/robot-1.jpg'
                  alt='Imagen de ejemplo'
                  width={800}
                  height={400}
                  className='img-fluid'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                  <a href='/blog' className='btn btn-secondary'>
                    Más información
                  </a>
                </div>
              </div>
              <div className='card mb-4'>
                <Image
                  src='/images/examples/robot-2.jpg'
                  alt='Imagen de ejemplo'
                  width={800}
                  height={400}
                  className='img-fluid'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                  <a href='/blog' className='btn btn-secondary'>
                    Más información
                  </a>
                </div>
              </div>
              <div className='card mb-4'>
                <Image
                  src='/images/examples/robot-3.jpg'
                  alt='Imagen de ejemplo'
                  width={800}
                  height={400}
                  className='img-fluid'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                  <a href='/blog' className='btn btn-secondary'>
                    Más información
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
