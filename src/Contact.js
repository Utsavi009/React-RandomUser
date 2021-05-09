import React from 'react';

export default function Contact({location, email, cell}) {
  const {street, city, country, postcode} = location;
  return (
    <div>
      <p> <b>Address:</b> {street.number}, {street.name} {postcode} 
      <p> <b>City:</b> {city} </p> 
      <p> <b>Country:</b> {country} </p></p>
      <p> <b>Email:</b> {email}</p>
      <p> <b>Phone number:</b> {cell} </p>
    </div>
  )
}
