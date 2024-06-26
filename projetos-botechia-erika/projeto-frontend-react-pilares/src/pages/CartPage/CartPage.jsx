import React from 'react'
import { ContainerCartPage } from './styled.CartPage'

export default function CartPage() {
  return (
    <ContainerCartPage>
      <table>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Item</th>
            <th>R$ Unidade</th>
            <th>Quantidade</th>
            <th>Item Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Nro de Items</td>
            <td>Total Compra</td>
          </tr>
        </tfoot>
      </table>
    </ContainerCartPage>
  )
}
