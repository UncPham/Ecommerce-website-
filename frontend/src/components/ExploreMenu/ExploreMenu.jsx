import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

// Đỗ Trang
// Component ExploreMenu để hiển thị danh sách menu và cho phép người dùng chọn danh mục
const ExploreMenu = ({category, setCategory}) => {

    return (
    <div className='ExploreMenu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        {/* Thẻ div chứa danh sách các mục menu */}
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return (
                    // Khi được click, nó sẽ gọi hàm setCategory để thay đổi danh mục hiện tại
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}    
        </div>
        <hr />
    </div>
  )
}
import './ExploreMenu.css'

export default ExploreMenu
