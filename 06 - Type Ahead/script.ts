interface City {
    city: string, 
    growth_from_2000_to_2013: string;
    latitude: number;
    longitude: number; 
    population: string; 
    rank: string;
    state: string;
}

const endpoint: string = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchForm = document.querySelector('form#search-form') as HTMLFormElement;
const displayList = document.querySelector('ul#suggestions') as HTMLUListElement;

const citites: City[] = [];
fetchData(endpoint).then(data => citites.push(...data));

async function fetchData(url: string): Promise<City[]> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function handleCityInput(event: Event): void {
    const search: string = (event.target as HTMLInputElement).value;
    const regex = new RegExp(search, 'gi');
    const matches: City[] = citites.filter(place => place.city.match(regex) || place.state.match(regex))
    const html: string = matches
                .reduce((html: string, place: City): string => {
                    const cityName = place.city.replace(regex, `<em class="hl">${search}</em>`);
                    const stateName = place.state.replace(regex, `<em class="hl">${search}</em>`);
                    return html += `
                    <li>
                        <span>${cityName}, ${stateName}</span>
                        <span class="population">${place.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                    </li>` 
                }, '');

    displayList.innerHTML = html;
}

searchForm.addEventListener('input', handleCityInput);