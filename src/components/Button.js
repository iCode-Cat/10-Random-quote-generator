import React, { useContext } from 'react'
import { QuotesContext } from '../context/QuotesProvider';
import { useHistory } from 'react-router';

const Button = () => {

    const [ quotes ] = useContext(QuotesContext)
    const { quoteAuthor, quoteGenre } = quotes
    const history = useHistory();
    return (
        <>
            <section onClick={()=> history.push('/'+quoteAuthor.replace(/[' ']/g, '-').toLowerCase())} className="quotes-details">
                <div className="quostes-details-container">
                    <p className="quotes-details-author">
                        { quoteAuthor }
                    </p>
                    <p className="quotes-details-genre">
                        { quoteGenre }
                    </p>
                </div>
                <span className="material-icons quotes-details-button">
                trending_flat
                </span>
            </section>
        </>
    )
}

export default Button
