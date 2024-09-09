let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

let runnersAge = 12;

if (runnersAge > 18 && registeredEarly === true){
  let raceNumber = (raceNumber + 1000) ;
  console.log(`Your race number is ${raceNumber} and your race time is 9:30 am`)
} else if (runnersAge > 18 && registeredEarly === false){
  console.log(`Your race number is ${raceNumber} and your race time is 11:00 am`)
}

if (runnersAge < 18){
  console.log(`Your race number is ${raceNumber} and your race time is 12:30 pm`)
} else if (runnersAge = 18){
  console.log('Please visit the registration desk, thank you!')
};