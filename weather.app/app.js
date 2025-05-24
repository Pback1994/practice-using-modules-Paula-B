const chalk = require("chalk");
const yargs = require("yargs/yargs");

const { hideBin } = require("yargs/helpers");
const { help } = require("yargs");
const argv = yargs(hideBin(process.argv)).argv;

class City {
  constructor(location, temperature, conditions, humidity, wind_speed) {
    this.location = location;
    this.temperature = temperature;
    this.conditions = conditions;
    this.humidity = humidity;
    this.wind_speed = wind_speed;
  }

  weatherReport() {
    console.log(chalk.blue.bold(`\n===== Weather Report =====`));
    console.log(chalk.yellow.bold(`\nLocation: ${userCity}`));
    console.log(chalk.green(`Temperature: ${this.temperature}F`));
    console.log(chalk.blue(`Condition: ${this.conditions}`));
    console.log(chalk.magenta(`Humidity: ${this.humidity}`));
    console.log(chalk.red(`Wind Speed: ${this.wind_speed}`));
    console.log(chalk.blue.bold`\n===========================`);
  }
}

let cities = [];

cities.push(new City("new york", 72, "Partly Cloudy", 65, 8));
cities.push(new City("london", 60, "Rainy", 80, 12));
cities.push(new City("paris", 45, "Misty", 0, 0));

let userCity = argv.city;
let userCityLowerCase = "";

let isCitySupported = false;
let isUserInputString = true;

try {
  userCityLowerCase = userCity.toLowerCase();
} catch (error) {
  console.error(`${userCity} is not a string`);
}

for (let city of cities) {
  if (userCityLowerCase === city.location) {
    city.weatherReport();
    isCitySupported = true;
    break;
  }
}

if (!isCitySupported && isUserInputString) {
  console.log("City not supported");
}
