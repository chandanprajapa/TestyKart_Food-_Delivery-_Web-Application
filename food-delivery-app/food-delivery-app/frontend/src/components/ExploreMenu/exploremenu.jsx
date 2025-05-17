import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets.js'
const exploremenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1 >Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu</p>
        <div className="explore-menu-list">
        {menu_list.map((items, index) => {
          return (
            <div key={index} className='explore-menu-list-item'>
              <img src={items.menu_image} alt='' />
              <h3>{items.menu_name}</h3>
          </div> 
            )
            })}
            </div>
    </div>
    )
}

export default exploremenu
 