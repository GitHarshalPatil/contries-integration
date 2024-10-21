import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CountryDetail from '../components/CountryDetail';

const CountryPage = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then(response => setCountry(response.data[0]))
            .catch(error => console.error('Error fetching country details:', error));
    }, [name]);

    return (
        <div>
            {country ? <CountryDetail country={country} /> : <p>Loading country details...</p>}
        </div>
    );
};

export default CountryPage;
