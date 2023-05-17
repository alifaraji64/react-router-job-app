import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CareerDetails = () => {
    const details = useLoaderData();
    return (
        <div className='career-details'>
            <h2>Career Details for { details.title }</h2>
            <p>Starting Salary: { details.salary }</p>
            <p>Location: { details.location }</p>
            <div className="details">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora enim saepe ex porro dolore laudantium, eius quae ab, deserunt, pariatur culpa placeat voluptate </p>
            </div>
        </div>
    );
}

export default CareerDetails;

export const careerDetailsLoader = async({ params })=>{
    const { id } = params;

    const res = await fetch('http://localhost:4000/careers/'+id);
    if(!res.ok){
        throw Error('id is not valid')
    }
    return res.json();
}
