import React, {useState} from 'react';

import './styles.css';

const images = [
    "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/52509/penguins-emperor-antarctic-life-52509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/17811/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
]

export default function App() {
    const [current, setCurrent] = useState(0);

    function next() {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }

    function prev() {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }

    return(
        <div>
            <h1 className='project-title'>Picture Carousel Project</h1>
            <div className='container'>
                <div className='left-arrow' onClick={prev}>⬅</div>
                <div className='right-arrow'onClick={next}>⮕</div>
                {images.map((image, index) => {
                    return (
                    current === index && (    
                    <div key={image} className="slide">
                            <img src={image} alt="image of an animal" />
                    </div>
                    )
                    )
                })
                }        
            </div>
        </div>
    )
}