import ContactForm from '@/components/ui/ContactForm';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Contacto`,
};

export default function Contact() {
  return (
    <>
      <section className='col-12'>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-12 col-lg-6 mb-5'>
              <h1 className='mb-4'>Contacto</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eu feugiat dolor, a hendrerit elit. Etiam eget facilisis purus.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Quisque a posuere nibh.
              </p>
            </div>
            <div className='col-12 col-lg-6'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
