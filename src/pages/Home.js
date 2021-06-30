import React, { useContext } from 'react';
import Button from '../components/Button';
import Quote from '../components/Quote';
import { QuotesContext } from '../context/QuotesProvider';
import './styles/home.style.scss'


const Home = () => {
    
    const [ quotes ] = useContext(QuotesContext)
    return (
        <>
            <section className="quotes">
                <Quote quotes={quotes} />
                <Button />
            </section>
        </>
    )
}

export default Home
