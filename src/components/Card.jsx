import React from 'react';

const Card = (props) => {
  return (
    <div className="card bg-base-100 w-80 md:w-96 lg:w-100 shadow-xl">
      <figure className="relative w-full h-72 overflow-hidden">
        <img 
          src={props.img} 
          alt={props.title} 
          className="w-[600px] h-[600px] object-contain hover:scale-105 cursor-pointer duration-300" 
        />
      </figure>
      <div className="card-body items-center text-center p-4">
        <h2 className="card-title text-2xl mb-2">{props.title}</h2>
        <p className="text-lg">
          <span className='text-red-300'>Director: </span>{props.director}
        </p>
        <h1 className="text-md mt-2">{props.actor}</h1>
      </div>
    </div>
  );
};

export default Card;
