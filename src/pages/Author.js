import React, { useContext, useEffect } from 'react';
import Quote from '../components/Quote';
import { QuotesContext } from '../context/QuotesProvider';
import { useHistory } from 'react-router-dom';


const Author = () => {

  

    const [ quotes, setQuotes, callApi ] = useContext(QuotesContext);

    const history = useHistory();
    const authorName = history.location.pathname.replace(/[-]/g,' ').replace('/', '')   
    
    useEffect(()=>{
        callApi(false,authorName)
    }, [])

    
    
    return (
        <>
            {
                quotes.length > 0 &&
                <section className="author">
            <p className="author-name">
                { authorName }
            </p>
            {
                quotes.map((quote, index) => (
                    <Quote key={index} quotes={quote} />
                ))
            }
        </section>

            }
        </>
    )
}

export default Author
