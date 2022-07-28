import React from 'react'
import './Card.css'
function Card() {
  return (
    <div class="card"> 
    <div class="card_img"> 
        <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" alt="user-image"/>
    </div>
    <div class="card_info">
        <h2>USER NAME</h2>
        <a href="#!">loremIpsum.com</a>
    </div>
</div>
  
  )
}

export default Card