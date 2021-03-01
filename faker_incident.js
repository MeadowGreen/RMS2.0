const faker = require('faker');
const fs = require('fs')

function generateIncidents() {

  let incidents = []

  for (let id=1; id <= 10; id++) {
    
    let ir = faker.random.number(12345);
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


    incidents.push({
        "id": id,
        "ir": ir,
        "occurrence_date": occurrence_date,
        "occurrence_time": occurrence_time,
        "incident_type": incident_type,
        "location": location,
        "location_name": location_name,
        "narrative": narrative,
        "officer_name": officer_name,
        "officer_serial_number": officer_serial_number,
        "report_date": report_date,
        "report_time": report_time,
    });
  }

  return { "data": incidents }
}

let dataObj = generateIncidents();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));