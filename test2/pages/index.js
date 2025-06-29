import React from 'react'
import Family from './Family'

export default function index() {

  const names = [ 
  {
    id: 1,
    name: "Ezenwa",
    age: 18,
    dob: "May 28 2007",
    image: "/images/Ezenwa.jpg",
  },
  {
    id: 2,
    name: "Chisom",
    age: 17,
    dob: "Jan 27 2008",
    image: "/images/Chisom.jpg",
  },
  {
    id: 3,
    name: "Afamefuna",
    age: 19,
    dob: "May 5 2006",
    image: "/images/Ife.jpg",
  },
  {
    id: 4,
    name: "Mesoma",
    age: 20,
    dob: "Feb 9 2005",
    image: "/images/Mesoma.jpg",
  },
  {
    id: 5,
    name: "Amaka",
    age: 14,
    dob: "Feb 9 2005",
    image: "/images/Amaka.jpg",
  },
  {
    id: 6,
    name: "Adaeze",
    age: 20,
    dob: "Oct 13 2005",
    image: "/images/Adaeze.jpg",
  },
]

  return (
    <>
    {names.map(ppl => (
      <div key={ppl.id}>
        <Family
          name={ppl.name}
          age={ppl.age}
          dob={ppl.dob}
          image={ppl.image}
        />
      </div>
    ))}
    </>
  )
}
