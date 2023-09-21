//part 1:
const hospital=
{
      fullName:"wellbeing hospital",
      patient:
     [
          {id:"123",fullName:"JACK",dateOfBirth:"08/03/1997",symptoms:
                  [{detail:"AHA"},{detail:"FIF"},{detail:"WJW"},{detail:"DOD"}]
          },

          {id:"456",fullName:"ROSE",dateOfBirth:"08/03/1997",symptoms:
                  [{detail:"AHA"},{detail:"FIF"},{detail:"WJW"},{detail:"DOD"}]
          },
 
          {id:"789",fullName:"JJERRY",dateOfBirth:"08/03/1997",symptoms:
                  [{detail:"AHA"},{detail:"FIF"},{detail:"WJW"},{detail:"DOD"}]
          }
      ]      
};



console.log(hospital);
console.log(hospital.fullName);


//part 2:

function showPatients(someData2){
	let text = "<h1>" + hospital.fullName + "</h1>";

	for (let i = 0; i < hospital.patient.length; i++) {
		let Patients = hospital.patient[i];
		text += '<h2>' + Patients.fullName + ', ' + Patients.dateOfBirth + '</h2>';
		text += '<ul>';
	
		for (let j = 0; j < Patients.symptoms.length; j++) {
			let symptom = Patients.symptoms[j];
			text += '<li>' + symptom.detail+ '</li>';
		}
	
		text += '</ul>';
	}

	return text;
}


console.log(showPatients("someData2"));

//part3:


function getPatient(ArrayOfPatientRecord){
        let randomPatientsId=Math.floor(Math.random()*ArrayOfPatientRecord.length);
        return ArrayOfPatientRecord[randomPatientsId].id;
}

let randomPatientsId=getPatient(hospital.patient);

console.log(randomPatientsId);
