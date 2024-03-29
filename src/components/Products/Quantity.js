import PropTypes from 'prop-types'

// Stateless functional component
const Quantity = (props) => {
  return(
    <div>
      <p>Current quantity of items in cart: {props.quantity}</p>
    </div>
  )
}

// Required the quantity to be int or number using propTypes
Quantity.propTypes = { quantity: PropTypes.number.isRequired }

// Default value of Price
Quantity.defaultProps = {quantity: 0}

export default Quantity