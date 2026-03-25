import sampleData from "@/db/sample-date";
import ProductList from "@/components/shared/header/product/product-list";

import React from 'react'

const Homepage = () => {
  return (
    <div>
      <ProductList data={sampleData.products} title='Newwest Arrivals' />
    </div>
  )
}

export default Homepage