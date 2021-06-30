import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';

export const QuotesContext = createContext();




const QuotesProvider = (props) => {


    
    const callApi = async(single, author) => {

        let url;
        if(single) {
            url = `https://quote-garden.herokuapp.com/api/v3/quotes?page=${randomNumber(7267)}`;
        } else {
            url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&page=1`
        }
       
        try {
            
            const api = await axios.get(url)
            const randomData = api.data.data;

            if(single) {
                setQuotes(randomData[randomNumber(10)]);
                return
            }

            setQuotes(randomData);
            
        } catch (error) {
            console.log(error);
        }
    
    }
    
    // Generate Random Number
    const randomNumber = (value) => {
    
        return Math.floor(Math.random() * value)
    
    }

    const [ quotes, setQuotes ] = useState([]);
    const [ location, setLocation ] = useState([]);

    
    console.log(location);

    useEffect(() => {
        // Only call if pathname equal to '/'
        if(location === '/') {
            callApi(true)   
        }
    }, [location])
    

    return (
        <QuotesContext.Provider value={[quotes, setQuotes,callApi, setLocation]}>
            { props.children }
        </QuotesContext.Provider>
    )
}

export default QuotesProvider
