// TASK 7 

// 1 == Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all)


fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        const countryNames = data.map(country => country.name.common);
        console.log(countryNames);
    })



// a) Get all the countries from Asia continent /region using Filter function

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        const asianCountries = data.filter(country => country.region === 'Asia');
        console.log(asianCountries);
    })



// b) Get all the countries with a population of less than 2 lakhs using Filter function

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        const countriesWithLowPopulation = data.filter(country => (country.population || 0) < 200000);
        console.log(countriesWithLowPopulation);
    })



// c) Print the following details name, capital, flag, using forEach function

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const name = country.name.common || 'N/A';
            const capital = country.capital || 'N/A';
            const flag = country.flags.png

            console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
        });
    })



// d) Print the total population of countries using reduce function

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        const totalPopulation = data.reduce((accumulator, country) => accumulator + (country.population || 0), 0);
        console.log(`Total Population: ${totalPopulation}`);
    })



// e)Print the country that uses US dollars as currency.

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        const countriesWithUSD = data.filter(country => {
            const currencies = country.currencies || {};
            return Object.values(currencies).includes('USD');
        });

        console.log("Countries using USD:", countriesWithUSD.map(countries => country.name.common));
    })
