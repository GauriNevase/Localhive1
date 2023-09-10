import React from 'react'
import './Category.css'

export default function Category() {
  return (
    <div className='Containerclass2'>
        <h2>Categories You Can Explore</h2>
    <div className='categorybox'>
        <div className="cardc">
  <button className="item item--1">
    <span className="quantity"> 90+ </span>
    <span className="text text--1"> Home Decor </span>
  </button >
  <button className="item item--2">
  <span className="quantity"> 150+ </span>
    <span className="text text--2"> Gift Items</span>
  </button>
  <button  className="item item--3">
    <span className="quantity"> 100+ </span>
    <span className="text text--3"> Clothes </span>
  </button >
  <button  className="item item--4">
    <span className="quantity"> 30+ </span>
    <span className="text text--4"> Accessories </span>
  </button >
</div>

<div className="cardc">
  <button className="item item--1">
    <span className="quantity"> 90+ </span>
    <span className="text text--1"> Perfumes </span>
  </button >
  <button className="item item--2">
    <span className="quantity"> 120+ </span>
    <span className="text text--2"> Art & Crafts </span>
  </button >
  <button  className="item item--3">
    <span className="quantity"> 150+ </span>
    <span className="text text--3"> Food Items </span>
  </button >
  <button  className="item item--4">
    <span className="quantity"> 20+ </span>
    <span className="text text--4"> Hair & Makeup </span>
  </button >
</div>
</div>
</div>
  )
}
