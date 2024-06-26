import React from 'react'
import { ContainerProductsPage } from './styled.ProductsPage'
import Filtros from '../../components/Filtros/Filtros'

export default function ProductsPage() {
  return (
    <ContainerProductsPage>
      <aside>
        <Filtros/>
      </aside>
      <div>
        <h3>LISTA DE PRODUTOS</h3>
      </div>
    </ContainerProductsPage>
  )
}
