import React from 'react'
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"  />

const Player = ({joueur}) => {
  return (




<div className='body'>
{/* <section className='swiper mySwiper container'> */}
<div className='swiper-wrapper content'>
<div className='swiper-slide card'>
<div className='card-content'>
<div className='image'>
<img className="img" src={joueur.URL} alt="jouueur"/> 
</div>

<div className='media'>
<span className='i num'> {joueur.NumberJer}</span>
<span className='i'><img src={joueur.Nationality} alt="Nationality"/> </span>


</div> 

<div className='name-joueur'>
<span className="name"> {joueur.Nom }</span>
<span className="age"> Age : {joueur.Age }&nbsp;	year-old</span>
<span><FontAwesomeIcon icon="fa-brands fa-facebook" /></span>
<i class="fa-solid fa-user"></i>
<FontAwesomeIcon icon="fa-solid fa-user" />
<button className='button'>Subscribe</button>
</div>
</div>
</div>
</div>


{/* </section> */}



</div>


  )
}

export default Player