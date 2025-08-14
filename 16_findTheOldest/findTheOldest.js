function getAge(birth, death){
    if(!death){
        return new Date().getFullYear - birth;
    }else{
        return death - birth;
    }
}

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge > currentAge ? oldestPerson : currentPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
