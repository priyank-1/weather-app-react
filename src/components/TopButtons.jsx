import React from 'react'

export default function TopButtons({setQuery}) {
    const cities = [
        {
            id:1,
            title:"Mumbai"
        },
        {
            id:2,
            title:"Kolkata"
        },
        {
            id:3,
            title:"Bangalore"
        },
        {
            id:4,
            title:"Hyderabad"
        },

        {
            id:5,
            title:"Ahmedabad"
        }
    ]
  return  <div className='flex items-center justify-around my-6 '>
        {cities.map((city) =>(
           <button key={city.id} className='text-white  font-bold drop-shadow-2xl shadow-black text-lg py-2 px-4 transition ease-out hover:text-sky-400 ' onClick={()=>setQuery({q: city.title})}>{city.title}</button>
        ))}
    </div> 
  
}
