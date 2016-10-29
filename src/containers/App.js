/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, cart, sortBy, filterBy, products, categories, vendors, locales} = this.props;
    return (
      <Main
        actions={actions}
        cart={cart}
        sortBy={sortBy}
        filterBy={filterBy}
        products={products}
        categories={categories}
        vendors={vendors}
        locales={locales}/>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  sortBy: PropTypes.object.isRequired,
  filterBy: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  vendors: PropTypes.object.isRequired,
  locales: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {
    cart: state.cart,
    sortBy: state.sortBy,
    filterBy: state.filterBy,
    products: state.products,
    categories: state.categories,
    vendors: state.vendors,
    locales: state.locales
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    setCategories: require('../actions/setCategories.js'),
    setCategory: require('../actions/setCategory.js'),
    setVendor: require('../actions/setVendor.js'),
    sortBy: require('../actions/sortBy.js'),
    setFilter: require('../actions/setFilter.js'),
    addToCart: require('../actions/addToCart.js'),
    setCategory: require('../actions/setCategory.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
