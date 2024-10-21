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

const CountryCard = ({ country }) => {
    return (
        <CountryCardWrapper>
            <img src={country.flags.svg} alt={country.name.common} style={{ width: '100%' }} />
            <h2>{country.name.common}</h2>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            <Link to={`/country/${country.name.common}`}>More Details</Link>
        </CountryCardWrapper>
    );
};

export default CountryCard;
