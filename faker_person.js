const faker = require('faker');
const fs = require('fs')

function generateIncidents() {

  let incidents = []

  for (let id=1; id <= 10; id++) {

    let occurrence_date = faker.date.future();
    let occurrence_time = faker.time.recent();
    let incident_type = faker.random.alpha(3);
    let location = faker.address.streetAddress();
    let location_name = faker.company.companyName();
    let narrative = faker.lorem.paragraphs(2);
    let officer_name = faker.name.firstName();
    let officer_serial_number = faker.random.number();
    let report_date = faker.date.future();
    let report_time = faker.time.recent();


    users.push({
        "id": id,
        "occurrence_date": future,
        "occurrence_time": recent,
        "incident_type": alpha,
        "location": streetAddress,
        "location_name": companyName,
        "narrative": paragraphs,
        "officer_name": firstName,
        "officer_serial_number": number,
        "report_date": future,
        "report_time": recent,
    });
  }

  return { "data": incidents }
}

let dataObj = generateIncidents();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));