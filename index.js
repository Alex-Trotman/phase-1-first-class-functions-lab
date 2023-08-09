const returnFirstTwoDrivers = ((array) => [array[0], array[1]]);
const returnLastTwoDrivers = ((array) => [array[2], array[3]]);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(int){
    return function(fair){
        return (int * fair)
    }
}
const fareDoubler = createFareMultiplier(2) 
const fareTripler = createFareMultiplier(3) 
function selectDifferentDrivers(array, param2){
    return param2(array);
}
