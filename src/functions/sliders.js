import {lory} from './lory/lory.js';

// import {lory} from './lory.js';

//Big slider at the top of the front page
const initBigSlider = () => {
  
  const sliderBig = document.querySelector('.slider-big__slider');

  if (sliderBig) {
    const slider = lory(sliderBig, {
      infinite: 1,
      'classNameSlideContainer': 'slider-big__slides',
      'classNamePrevCtrl': 'control_left',
      'classNameNextCtrl': 'control_right',
      'classNameFrame': 'slider-big__frame'
    });
  
    //Get the container of future dots    
    const dots = sliderBig.parentNode.querySelector('.dots');

    //calclulating lenght of the sliders
    const dotsLenght = sliderBig.querySelectorAll('.js_slide').length;
    
    //Empiristic determinated cf for the infinite slider
    for(let i = 0; i < dotsLenght - 2; i++) {
      const dot = document.createElement('LI');
      dot.addEventListener('click', function() {
        console.info(i + ' ' + slider.returnIndex());
        slider.slideTo(i);
      });
      if (i === 0) {
        dot.classList.add('dots__dot_active');
      }
      dot.classList.add('dots__dot');
      dots.appendChild(dot);
    }

    sliderBig.addEventListener('after.lory.slide', function (e) {
      const current = dots.querySelector('.dots__dot_active');
      if (current) {
        current.classList
               .toggle('dots__dot_active');
      }
      dots.childNodes[e.detail.currentSlide - 1].classList
                        .add('dots__dot_active');
    });
  }
}


//Blue slider at the middle of the front page  
const initVendorsSlider = () => {
  const vendorsSlider = document.querySelector('.slider-vendors__slider');
  if (vendorsSlider) {
    const slider = lory(vendorsSlider, {
      // infinite: 0,
      'rewind': true,
      'enableMouseEvents': true,
      'slidesToScroll': 5,
      'classNameSlideContainer': 'slider-vendors__slides',
      'classNamePrevCtrl': 'control_left',
      'classNameNextCtrl': 'control_right',
      'classNameFrame': 'slider-vendors__frame'
    });
  } 
}

//Slider at the bottom of the catalog page

const slidersInit = () => {
  initBigSlider();
  initVendorsSlider();
}

export default slidersInit;