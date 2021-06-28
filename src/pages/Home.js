import React from 'react';
import Button from '../components/Button';
import Quote from '../components/Quote';
import './styles/home.style.scss'


const Home = () => {
    return (
        <>
            <section className="quotes">
                <Quote />
                <Button />
            </section>
        </>
    )
}

export default Home
