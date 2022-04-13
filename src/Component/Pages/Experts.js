import React from 'react';
import img1 from '../../images/experts/expert-1.jpg'
import img2 from '../../images/experts/expert-2.jpg'
import img3 from '../../images/experts/expert-3.jpg'
import img4 from '../../images/experts/expert-4.jpg'
import img5 from '../../images/experts/expert-5.jpg'
import img6 from '../../images/experts/expert-6.png'
import Expert from './Expert';

const expects = [
    {id: 1, name: 'Will Smith', img: img1},
    {id: 2, name: 'Crich Rock', img: img2},
    {id: 3, name: 'Jona Meil', img: img3},
    {id: 4, name: 'Messi', img: img4},
    {id: 5, name: 'kingo Smith', img: img5},
    {id: 6, name: 'Will Abrar', img: img6}
]

const Experts = () => {
    return (
        <div>
            <h2 className='font-semibold text-4xl text-center my-9'>Our Expert Team Members</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    expects.map(expert => <Expert 
                        expert= {expert}
                        key = {expert.id}
                        />)
                }
            </div>
        </div>
    );
};

export default Experts;