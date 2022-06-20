function makeGreen() {
    const p=document.querySelector('p');
    p.style.color='green';
    p.style.fontSize='3rem';
}

const dogs=[{name:'Snickers',age:2},{name:'hugo',age:8}];

//regular
console.log('hello!..');

//interpolated
console.log('Hello I am a %s engineer','electronics');

//Styled
console.log('%c I am some great text','font-size:50px; background:red; text-shadow:4px 4px 0 blue');
//warning!..
console.warn('OH NOOOOOOO!..');
//Error:|
console.error('Damn!..It is not a real error :)');
//info
console.info('There is an useful information');
//Testing
const p= document.querySelector('p');
console.assert(p.classList.contains('hey!'),'That is wrong!')
//clearing
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
//Grouping together
dogs.forEach(dog=>{
    console.groupCollapsed(`${dog.name}`)
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age*7} dog years old`);
    console.groupEnd(`${dog.name}`);
})
//counting
console.count('Mehmet');
console.count('Mehmet');
console.count('Karuç');
console.count('Mehmet');
console.count('Karuç');
console.count('Mehmet');
console.count('Mehmet');
console.count('Mehmet');
console.count('Karuç');
console.count('Mehmet');
console.count('Mehmet');
console.count('Karuç');
console.count('Karuç');
console.count('Mehmet');
console.count('Karuç');
console.count('Mehmet');
//timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data=> data.json())
    .then(data=>{
        console.timeEnd('fetching data');
        console.log(data);
    });
//table
console.table(dogs);