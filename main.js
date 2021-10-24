// Define future kids message parts in object
const futureKidsObject = {
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    gender: ['Male ♂', 'Female ♀'],
    iqLevel: ['85-114', '115-129', '115-129', '130-144', '145-159']
};

// Store the 'future kids' in an array
let futureKidsArray = [];

// Store number of kids, gender
let totalKids, kidsGender, prefix;

// Iterate over the object
for (let prop in futureKidsObject) {
    let randomIndex = Math.floor(Math.random() * futureKidsObject[prop].length);
    // use the object's properties to customize the message being added to futureKidsArray
    switch (prop) {
        case 'number':
            totalKids = futureKidsObject[prop][randomIndex];
            futureKidsArray.push(`You will have ${totalKids} kid(s) in the future.`);
            break;
        case 'gender':
            kidsGender = futureKidsObject[prop][randomIndex];
            futureKidsArray.push(`Your future kid(s) gender will be ${kidsGender}.`);
            break;
        case 'iqLevel':
            if (totalKids == 1) {
                if (kidsGender.includes('Male'))
                    prefix = 'His';
                else
                    prefix = 'Her';
            } else {
                prefix = 'Their';
            }
            futureKidsArray.push(`${prefix} IQ levels will be between ${futureKidsObject[prop][randomIndex]}.`);
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