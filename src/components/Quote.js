import React from 'react';


const Quote = ({ quotes }) => {

    
    const text = quotes.quoteText;

    return (

                <>
                    {
                        text !== undefined &&
                        <p className="quotes-text">
                        “{ text }”
                        </p>
                    }
                </>
    )
}

export default Quote
