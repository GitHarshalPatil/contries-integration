import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/CountryDetail.css';  // Add CSS for the details page

const CountryDetails = () => {
    const { name } = useParams(); // Get the country name from the URL
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then(response => {
                setCountry(response.data[0]); // Get the first matching country
            })
            .catch(error => console.error('Error fetching country details:', error));
    }, [name]);

    if (!country) {
        return <div>Loading...</div>;
    }

    return (
        <div className="country-details">
            <Link to="/" className="back-button">Back</Link>
            <h2>{country.name.common}</h2>
            <img src={country.flags.svg} alt={country.name.common} />
            <p><strong>Native Name:</strong> {country.name.nativeName && Object.values(country.name.nativeName)[0].common}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion}</p>
            <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
            <p><strong>Top Level Domain:</strong> {country.tld}</p>
            <p><strong>Currencies:</strong> {country.currencies && Object.values(country.currencies).map(currency => currency.name).join(', ')}</p>
            <p><strong>Languages:</strong> {country.languages && Object.values(country.languages).join(', ')}</p>
        </div>
    );
};

export default CountryDetails;
