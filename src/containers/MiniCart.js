
import { connect } from 'react-redux';
import MiniCart from '../components/Cart/MiniCartComponent';

const calcCartLength = (state) => {
  return state.reduce((sum, item) => {
    return sum += item.quantity;
  }, 0);
}

function mapStateToProps(state) {
  const props = {
    items: calcCartLength(state.cart),
    locales: state.locales
  };
  return props;
}

export default connect(mapStateToProps)(MiniCart);
