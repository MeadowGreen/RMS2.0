const faker = require('faker');
const fs = require('fs')

function generateVehicles() {

  let vehicles = []

  for (let id=1; id <= 10; id++) {

    let vin = faker.vehicle.vin();
    let license_num = faker.random.alphaNumeric(7);
    let license_state = faker.address.stateAbbr();
    let color = faker.vehicle.color();
    let year = faker.random.number(3000);
    let make = faker.vehicle.manufacturer();
    let model = faker.vehicle.model();
    let details = faker.hacker.adjective();
    let value = faker.finance.amount();
    let officer_name = faker.name.firstName();
    let officer_serial_number = faker.random.number();
    let report_date = faker.date.soon();
    let report_time = faker.time.recent();


    vehicles.push({
        "id": id,
        "vin": vin,
        "license_num": license_num,
        "license_state": license_state,
        "color": color,
        "year": year,
        "make": make,
        "model": model,
        "details": details,
        "value": value,
        "officer_name": officer_name,
        "officer_serial_number": officer_serial_number,
        "report_date": report_date,
        "report_time": report_time,
    });
  }

  return { "data": vehicles }
}

let dataObj = generateVehicles();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));