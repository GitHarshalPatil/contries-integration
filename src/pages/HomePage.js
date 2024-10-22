import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/HomePage.css';

const HomePage = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    };

    const filteredCountries = countries.filter(country => {
        const countryName = country.name.common.toLowerCase();
        const countryRegion = country.region.toLowerCase();
        const searchTerm = search.toLowerCase();

        const matchesSearch = (countryName === searchTerm && searchTerm === 'india') || countryName.includes(searchTerm);
        const matchesRegion = region ? countryRegion === region.toLowerCase() : true;

        return matchesSearch && matchesRegion;
    });

    return (
        <div className="homepage">
            <div className="search-filter">
                <input
                    type="text"
                    placeholder="Search for a country..."
                    value={search}
                    onChange={handleSearch}
                />
                <select value={region} onChange={handleRegionChange}>
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <div className="countries-list">
                {filteredCountries.map((country) => (
                    <Link key={country.name.common} to={`/country/${country.name.common}`}>
                        <div className="country-card">
                            <img src={country.flags.svg} alt={country.name.common} />
                            <h3>{country.name.common}</h3>
                            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
