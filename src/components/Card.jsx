import React from 'react';

const Card = ({img, name, location, link}) => {
    return (
        <div className='card'>
            <img className='card-img' src={img} />
            <footer>
                <h3>{name}</h3>
                <h4>{location}</h4>
                <form action={link}>
                    <button type="submit">View Menu</button>
                </form>
            </footer>
            
        </div>
    );
};

export default Card;