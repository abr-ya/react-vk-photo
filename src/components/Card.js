import React, {useState} from 'react';

const Card = ({item: {id, thumb, likes}}) => {
    //console.log(id);
    const [containCard, setContainCard] = useState(false);
    //console.log(containCard);

    const cardStyle = {
        backgroundImage: 'linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(' + thumb + ')',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        cursor: 'pointer',
    };
    const imgStyle = {
        objectFit: 'contain',
    }
    return (
        <div className='card' key={id} style={cardStyle} onClick={() => setContainCard(!containCard)}>
            <img src={thumb} alt={id} style={containCard ? imgStyle : null}/>
            <p className='like'>{likes}</p>
        </div>
    )
}

export default Card;