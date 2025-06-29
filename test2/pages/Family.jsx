import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Family({name, age, dob, image}) {
  return (
    <>
    <div className="card">
      <div className="card-body">
        <Image src={image} alt={name} width={150} height={200} />
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{age}</p>
        <p className="card-text">{dob}</p>
        <button className="btn btn-primary">
          <Link href={"/more"} style={{color:"pink", textDecoration:"none"}}>
          View More
          </Link>
        </button>
      </div>
    </div>
    </>
  )
}
