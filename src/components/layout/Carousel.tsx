import Image from 'next/image';

export default function Carousel() {
  return (
    <div id='carouselExample' className='carousel slide'>
      <div className='carousel-inner h-100'>
        <div className='carousel-item active position-relative h-100'>
          <Image
            src='/images/examples/robot-1.jpg'
            fill
            style={{ objectFit: 'cover' }}
            className='d-block'
            alt='Robot ejemplo 1'
          />
        </div>
        <div className='carousel-item position-relative h-100'>
          <Image
            src='/images/examples/robot-2.jpg'
            fill
            style={{ objectFit: 'cover' }}
            className='d-block'
            alt='Robot ejemplo 2'
          />
        </div>
        <div className='carousel-item position-relative h-100'>
          <Image
            src='/images/examples/robot-3.jpg'
            fill
            style={{ objectFit: 'cover' }}
            className='d-block'
            alt='Robot ejemplo 3'
          />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExample'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExample'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
}
