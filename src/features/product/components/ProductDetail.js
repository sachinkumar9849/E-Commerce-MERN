import React from 'react'

const ProductDetail = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 center">
        <img
          src="product-image.jpg"
          alt="Product Image"
          className="product-image"
        />
      </div>
      <div className="col-md-6">
        <h2>Product Name</h2>
        <p>
          Product Description: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <p>Price: $99.99</p>
        <p>Availability: In Stock</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 product-description">
        <h3>Product Details</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tincidunt ex a feugiat. Proin nec dolor vel tellus suscipit tincidunt.
        </p>
        <p>Features:</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
    </div>
  </div>
  
  )
}

export default ProductDetail