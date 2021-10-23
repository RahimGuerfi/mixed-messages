// Define future kids message parts in object
const futureKidsObject = {
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    gender: ['Male ♂', 'Female ♀', 'Male ♂/Female ♀'],
    iqLevel: ['85-114', '115-129', '115-129', '130-144', '145-159']
};

// Store the 'future kids' in an array
let futureKidsArray = [];

// Iterate over the object
for (let prop in futureKidsObject) {
    let randomIndex = Math.floor(Math.random() * futureKidsObject[prop].length);
    // use the object's properties to customize the message being added to futureKidsArray
    switch (prop) {
        case 'number':
            futureKidsArray.push(`You will have ${futureKidsObject[prop][randomIndex]} kid(s) in the future.`);
            break;
        case 'gender':
            futureKidsArray.push(`Your future kid(s) gender will be ${futureKidsObject[prop][randomIndex]}.`);
            break;
        case 'iqLevel':
            futureKidsArray.push(`(their-his-her) IQ levels will be between ${futureKidsObject[prop][randomIndex]}.`);
            break;
    }
}

// Format and print your 'future kids' message
const formatAndPrint = (array) => {
    const formatted = array.join('\n')
    console.log(formatted)
}

// Print your formatted 'future kids' message
formatAndPrint(futureKidsArray);