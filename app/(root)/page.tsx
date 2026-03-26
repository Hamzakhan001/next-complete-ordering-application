import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/header/product/product-list";

import React from 'react'

const Homepage = async () => {
  const latestProducts = await getLatestProducts()
  return (
    <div>
      <ProductList data={latestProducts} title='Newwest Arrivals' />
    </div>
  )
}

export default Homepage