const faker = require('faker');
const fs = require('fs')

function generatePersons() {

  let persons = []

  for (let id=1; id <= 10; id++) {

    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let middle_name = faker.name.middleName();
    let ssn= faker.random.number(9);
    let dl= faker.random.number(12);
    let dl_state = faker.address.stateAbbr();
    let dl_exp = faker.date.month();
    let race = faker.random.alpha(1);
    let sex = faker.name.gender();
    let height = faker.random.number(6.9);
    let weight = faker.random.number(220);
    let eyes = faker.vehicle.color();
    let hair = faker.vehicle.color();
    let date_birth = faker.date.past();
    let age = faker.random.number(100);
    let scars = faker.random.word(1);
    let home_address = faker.address.streetAddress();
    let phone_number = faker.phone.phoneNumber();
    let gang = faker.random.boolean();
    let hazards = faker.random.boolean();
    let officer_name = faker.name.firstName();
    let officer_serial_number = faker.random.number();
    let report_date = faker.date.future();
    let report_time = faker.time.recent();


    persons.push({
        "id": id,
        "first_name": first_name,
        "last_name": last_name,
        "middle_name": middle_name,
        "ssn": ssn,
        "dl": dl,
        "dl_state": dl_state,
        "dl_exp": dl_exp,
        "race": race,
        "sex": sex,
        "height": height,
        "weight": weight,
        "eyes": eyes,
        "hair": hair,
        "date_birth": date_birth,
        "age": age,
        "scars": scars,
        "home_address": home_address,
        "phone_number": phone_number,
        "gang": gang,
        "hazards": hazards,
        "officer_name": officer_name,
        "officer_serial_number": officer_serial_number,
        "report_date": report_date,
        "report_time": report_time,
    });
  }

  return { "data": persons }
}

let dataObj = generatePersons();
//will push the info to data.json
fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));