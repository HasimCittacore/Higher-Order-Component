import React from 'react';

export default function HigherOC(AppComponent){
  return (props) => {
  return ( <>
    <h3>Higher Order Comp</h3>
     <AppComponent {...props} winning_Team="Gujarat Lions"/>
</>  )
  }
}