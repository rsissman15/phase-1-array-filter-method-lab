// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching(drivers,string){
    const result= drivers.filter(drivers=>drivers.toLowerCase()===string.toLowerCase());
    return result;
}

function fuzzyMatch(drivers,string){
    const lengthOfDrivers=string.length;
    const result=drivers.filter(drivers=>drivers.slice(0,lengthOfDrivers)===string);
    return result;
}


const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driver,string){
    const matchedName=driver.filter(driver=>driver.name===string);
    return matchedName;
}