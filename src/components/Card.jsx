import React from 'react';

const Card = ({img, name, type, link}) => {
    return (
        <div className='card'>
            <img className='card-img' src={img} />
            <footer>
                <h3>{name}</h3>
                <h4>{type}</h4>
                <form action={link}>
                    <button type="submit">Click Here</button>
                </form>
            </footer>
            
        </div>
    );
};

export default Card;