// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
interface Inventor {
    first: string;
    last: string;
    year: number;
    passed: number;
}

const inventors: Inventor[] = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];


const people: string[] = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventors1500: Inventor[] = inventors.filter(({ year }: Inventor): boolean => year >= 1500 && year < 1600);
console.table(inventors1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const names: {first: string, last: string}[] = inventors.map((inventor: Inventor): { first: string, last: string } => {
    return { first: inventor.first, last: inventor.last }; 
});
console.table(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldInventors: Inventor[] = inventors.sort((a: Inventor, b: Inventor): number => b.year - a.year);
console.table(oldInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalAge: number = inventors.reduce((summedAge: number, { year, passed }: Inventor): number => summedAge += passed - year, 0);
console.log(totalAge);

// 5. Sort the inventors by years lived
const oldestInventors: Inventor[] = inventors.sort((a: Inventor, b: Inventor): number => (b.passed - b.year) - (a.passed - a.year));
console.table(oldestInventors);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const boulevards: string = 
`   Boulevard Auguste-Blanqui
    Boulevard Barbès
    Boulevard Beaumarchais
    Boulevard de lAmiral-Bruix
    Boulevard Mortier
    Boulevard Poniatowski
    Boulevard Soult
    Boulevard des Capucines
    Boulevard de la Chapelle
    Boulevard de Clichy
    Boulevard du Crime
    Boulevard du Général-dArmée-Jean-Simon
    Boulevard Haussmann
    Boulevard de lHôpital
    Boulevard des Italiens
    Boulevard Lefebvre
    Boulevard de la Madeleine
    Boulevard de Magenta
    Boulevard Malesherbes
    Boulevard Marguerite-de-Rochechouart
    Boulevard Montmartre
    Boulevard du Montparnasse
    Boulevard Raspail
    Boulevard Richard-Lenoir
    Boulevard Saint-Germain
    Boulevard Saint-Michel
    Boulevard de Sébastopol
    Boulevard de Strasbourg
    Boulevard du Temple
    Boulevard Voltaire
    Boulevard Hippolyte-Marquès`
const list: string[] = boulevards.split('\n').map((boulevard: string): string => boulevard.trim());
const deBoulevards: string[] = list.filter((boulevard: string): boolean => boulevard.includes('de'));
console.table(deBoulevards);    

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedPeople: string[] = people.sort((a: string, b: string): number => {
    return a.split(', ')[1].charAt(0) > b.split(', ')[1].charAt(0) ? 1 : - 1;
});
console.table(sortedPeople);    

// 8. Reduce Exercise
// Sum up the instances of each of these
const data: string[] = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const dataOccurence = data.reduce((occurences: { [key: string]: number }, data: string) => {
    occurences[data] = (occurences[data] ?? 0) + 1;
    return occurences;
}, {} as { [key: string]: number });
console.log(dataOccurence);
