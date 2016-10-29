import React, {Component, PropTypes} from 'react';
import {lory} from '../../functions/lory/lory.js';
import ProductCard from '../Card/ProductCardComponent';

class RescentSlider extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    lory(this.refs.slider, {
      // infinite: 0,
      'rewind': true,
      'enableMouseEvents': true,
      'slidesToScroll': 4,
      'classNameSlideContainer': 'slider-rescent__slides',
      'classNamePrevCtrl': 'control_left',
      'classNameNextCtrl': 'control_right',
      'classNameFrame': 'slider-rescent__frame'
    });
  }
  render() {
    return (
      <article ref="slider" className="container slider-rescent cards-preview">
        <header className="cards-preview__header wrapper">
          <div className="cards-preview__description">
            <h1 className="cards-preview__headling">
              {this.props.locales["rescentlyViewed"]}
            </h1>
          </div>
          <div className="cards-preview__link slider-rescent__controls">
            <div className="control control_left"></div>
            <div className="control control_right"></div>
          </div>
        </header>
        <div className="cards-preview__inner slider-rescent__frame">
          <div className="slider-rescent__slides">
          {this.props.products.map((product, key) => (
            <ProductCard {...product} 
                locales={this.props.locales}
                onCategoryClick={this.props.setCategory}
                onVendorClick={this.props.setVendor}
                key={key}
                addToCart={this.props.addToCart} />
            )
          )}
          </div>
        </div>
      </article>
    )
  }
}

RescentSlider.propTypes = {
  products: PropTypes.array,
  locales: PropTypes.object,
  setCategory: PropTypes.func,
  setVendor: PropTypes.func,
  addToCart: PropTypes.func
}

export default RescentSlider;