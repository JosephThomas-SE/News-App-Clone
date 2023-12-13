import React from 'react'

function News(props) {
  
    console.log(props)

    return (
    <div className='news'>
      
        <div className='news-img'>

            {
            props.article.urlToImage!==null?
            <img src={props.article.urlToImage}/>:
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'/>
            }

            <img src={props.article.urlToImage} alt='News Image'/>
        </div>

        <h1 className='title'>{props.article.title}</h1>

        <p className='description'>{props.article.description?.substring(0,80).concat("...")} <a href={props.article.url} target="blank">Read More</a> </p>
        
        <div className='source'>
            <p className='author'>Author: {props.article.author}</p>
            <p className='source-name'>Source: {props.article.source.name}</p>
        </div>
    </div>
  )
}

export default News
