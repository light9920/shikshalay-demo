import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Resources!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img/sci.jpg'
              text='Explore all Science topics, Learn awesome facts'
              label='Science'
              path='/services'
            />
            <CardItem
              src='img/maths.jpg'
              text='Explore Mathematics, Enjoy learning with formulas'
              label='Maths'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/eng.jpg'
              text='Explore english resource pack, improve your communication skills'
              label='English'
              path='/services'
            />
            <CardItem
              src='data:image/jpeg;base64,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'
              text='You must be bored! Take the quiz challenge!!'
              label='Gamified Learning'
              path='/products'
            />
            <CardItem
              src='img/img1.jpg'
              text='Who is your inspiration? Explore now to know!!'
              label='Inspiration'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
