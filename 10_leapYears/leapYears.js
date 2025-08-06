const leapYears = function(year) {
    const isDivisbleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    if(isDivisbleByFour && ( !isCentury || isYearDivisibleByFourHundred)){
        return true;
    }else{
        return false;
    }
};
leapYears(2000)
leapYears(1985) 
// Do not edit below this line
module.exports = leapYears;
