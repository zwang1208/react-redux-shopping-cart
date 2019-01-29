import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductsList from '../components/products_list';
import ProductItem from '../components/product_item';
import { connect } from 'react-redux'
import { showInventory, addToCart, updateProductListAdd } from '../actions/products_action';

class ProductsListContainer extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      itemName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantityRemaining: PropTypes.number.isRequired,
      imgSrc: PropTypes.string.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { showInventory } = this.props;
    showInventory()
  }

  // componentWillReceiveProps(newProps) {
  //   console.log(newProps)
  //   updateProductListAdd()
  // }

  render(){
    const {products, addToCart} = this.props;
    return (
      <ProductsList>
        {products.map( product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)}
          />
        )}
      </ProductsList>
    )
  }
}

const parseProducts = (products) => {
  let mappedProducts = []
  for(let key in products){
    mappedProducts.push(products[key])
  }
  return mappedProducts
}

const mapStateToProps = (state) => (
  {products: parseProducts(state.products)}
)

const mapDispatchToProps = {
  showInventory,
  addToCart,
  updateProductListAdd
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListContainer)
