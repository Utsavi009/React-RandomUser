import React from 'react';
import Contact from './Contact';

export default function User({picture, name, dob, ...rest}) {

  const {age} =dob;
  const {title, first, last } = name;
  return (
    <div>
      
      <img src={picture.medium} alt="name" />
      <p> <b>Name :</b>{title}. {first} {last}</p>
      <p> <b>Age :</b> {age}</p>
      <Contact {...rest} />
    </div>
  )
}
