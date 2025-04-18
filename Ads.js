import React from 'react'

function Ads(props) {
  return (
    <div className="col-12 col-md-6 offset-md-3 mt-4">

<div className="card w-100">
  <img src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.medium_2x.jpg" 
  className="card-img-top" alt="..." style={{width:"100%"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Powered by the A18 Pro chip and built for Apple Intelligence, iPhone 16 Pro and iPhone 16 Pro Max introduce larger display sizes, Camera Control, innovative camera and audio features, and a huge leap in battery life.</p>
    
  </div>
</div>

    </div>

  )
}

export default Ads