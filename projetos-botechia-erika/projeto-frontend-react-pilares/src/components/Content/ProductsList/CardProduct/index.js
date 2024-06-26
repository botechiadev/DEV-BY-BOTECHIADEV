import React from 'react';

import {CardContent, SizeBox} from './styled'
export function CardProduct( {product, size}) {

return(

<CardContent> <h2>{product.name}</h2>
            <img src={product.img} alt="termo 1" />           


<p><strong>Preco: </strong>{product.price}</p>

<p>
<strong>Cor: </strong>{product.color}</p>

<p><strong>Tamanhos em STOCK: </strong></p>

    <p>
  <SizeBox size={product.sizeInStock.pp}><strong>SM: {product.sizeInStock.pp}</strong></SizeBox>
  <SizeBox size={product.sizeInStock.p}><strong>S: {product.sizeInStock.p}</strong></SizeBox>
  <SizeBox size={product.sizeInStock.m}><strong>M: {product.sizeInStock.m}</strong></SizeBox>
  <SizeBox size={product.sizeInStock.g}><strong>L: {product.sizeInStock.g}</strong></SizeBox>
  <SizeBox size={product.sizeInStock.gg}><strong>XL: {product.sizeInStock.gg}</strong></SizeBox>
  <SizeBox size={product.sizeInStock.xl}><strong>2XL: {product.sizeInStock.xl}</strong></SizeBox>
  
  <SizeBox size={product.sizeInStock.xl}><strong>3XL: {product.sizeInStock.xl}</strong></SizeBox>
</p>
</CardContent>

)}