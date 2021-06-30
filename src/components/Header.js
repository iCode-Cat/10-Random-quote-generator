import React, { useContext, useEffect } from 'react';
import { QuotesContext } from '../context/QuotesProvider';
import { useHistory } from 'react-router';
import './styles/header.style.scss';




const Header = () => {

    const [ quotes, setQuotes, callApi, setlocation ] = useContext(QuotesContext);
    const history = useHistory();

    useEffect(()=>{
        setlocation(history.location.pathname)
    }, [])
    
    const pathNameHandler = () => {
        if(history.location.pathname !== '/') {

            history.push('/');
            
        }
        
    }
    
    return (
       <header className="header">
           <button onClick={()=>{
               callApi(true);
               pathNameHandler();
           }} className="header-button">
               random 
               <span className="material-icons">
                autorenew
               </span>
           </button>
       </header>
    )
}

export default Header
