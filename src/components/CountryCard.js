import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CountryCardWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 100%;
  max-width: 300px;
`;

const FlagImage = styled.img`
  width: 100%;
  height: 150px;         
  object-fit: cover;     
  border-radius: 8px;     
`;

const CountryCard = ({ country }) => {
    return (
        <CountryCardWrapper>
            <FlagImage src={country.flags.svg} alt={country.name.common} />
            <h2>{country.name.common}</h2>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
            <Link to={`/country/${country.name.common}`}>More Details</Link>
        </CountryCardWrapper>
    );
};

export default CountryCard;
