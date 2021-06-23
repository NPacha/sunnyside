import React from 'react';
import image from '../images/mobile/image-transform.jpg'

export default function Brand() {
    return (
        <>
        <section className="Brand">
            <img src={image} alt="egg"/>
            <h2>Transform your brand</h2>
            <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <button>Learn More</button>
        </section>
        </>
    )
}