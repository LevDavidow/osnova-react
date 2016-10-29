import React, {Component, PropTypes} from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      current: 0
    }
  }
  setImage(id) {
    this.setState({current: id});
  }
  getImageToList(image,key) {
    return(<li key={key} 
               onClick={() => this.setImage(key)} 
               className="gallery__item gallery__item_active">
              <img src={image.thumb} alt={this.props.title + '' + key} />
            </li>)
  }
  render() {
    const images = this.props.images;
    return (
      <div className="gallery">
          <div className="gallery__current">
            <img src={images[this.state.current].big} alt={this.props.title}/>
          </div>
          <ul className="gallery__list">
            {images.map(this.getImageToList.bind(this))}
          </ul>
      </div>
    )
  }
}

Carousel.propTypes = {
  images: PropTypes.array, //{big: src, thumb: src},
  name: PropTypes.string,
  subClass: PropTypes.string
};

export default Carousel;