import React from 'react';

const Card = ({name, email, id})=>{
return(
    // <h1>Robots</h1>
    <div className='tc bg-light-blue dib br4 pa ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
);
} 
export default Card;