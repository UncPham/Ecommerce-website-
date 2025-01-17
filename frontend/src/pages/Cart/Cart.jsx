import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

// Đỗ Trang
// Page cart để hiện thị danh sách các món ăn trong giỏ hàng
const Cart = () => {

  // Sử dụng context để lấy các thông tin và hàm cần thiết
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)

  // Sử dụng useNavigate để điều hướng
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) // kiem tra xem co san pham nao co id trong gio hang khong
          {
            return (
              <div>
                <div className="cart-items-title cart-items-item" >
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>VND {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>VND {item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>VND {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>VND {getTotalCartAmount() === 0 ? 0 : 20000}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>VND {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20000}</b>
              </div>
            </div>
            <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>if you have a promocode, Enter it here</p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='promocode' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
