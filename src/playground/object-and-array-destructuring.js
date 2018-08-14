const person = {
    name: undefined,
    age: 23,
    location: {
        city: 'Toronto',
        temp: 20
    }
};

// set up default value as well as variable name
const {name : firstName = 'Tino', age: personAge} = person;
console.log(`${firstName} is ${personAge} years old`);

const address = [
    'room 710',
    '15 Greenview Ave',
    'Toronto',
    'ON',
];

const [, street, city, province] = address;
console.log(`My address is ${street}, ${city} ${province}`);