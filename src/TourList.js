import React from 'react'

export const TourList = ({id,image,info,name, price}) => {
        const [readMore, setReadMore] = useState(false);
  return (
  <article className='single-tour'>
        <img src={image}/>
        <footer>
            <div className='tour-info'>
                    <h4>{name}</h4>
            </div>
            <div className='tour-price'>
                    <h4>${price}</h4>
            </div>
            <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        </footer>
  </article>
  )
}
