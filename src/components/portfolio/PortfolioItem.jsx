import "./portfolio.scss"
import React from 'react'

const PortfolioItem = ({img, title, id}) => {
  return (
    <div className="item">
    <img
      src={img}
      alt=""
    />
    <h3>
      {title}
    </h3>
  </div>
  )
}

export default PortfolioItem