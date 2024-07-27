// 1. Create an object with name → professor
console.log(`============================ Step- 1,2,3 Adding Properties,Nested object And Array ============================`);
let professor = {
    name: 'Neha s Patil',
    age: 22,
    department: 'Computer Science',
    university: 'RGPV',
    teachingYears: 5,
    
    // 2. Include nested object 'degrees'

    degrees: {
        engineering: 'CSC',
        PHD: 'Adv Computing',
        masters: 'Software Engineering',
        bachelors: 'Computer Science',
        diploma: 'Machine Learning'
    },
    
    // 3. Add an array 'certificates'
    certificates: [
        'Hacker Rank Participation',
        'Certificate in IFE course',
        'Certificate in Adv Programming'
    ]
};
// console.log(professor.degrees.engineering);


console.log(JSON.stringify(professor,null,2));
console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`============================ Step-4 Add new property like totalExperience: "14 years"============================`);


professor.totalExperience = "14 years";
console.log(`After adding totalExperience:`, JSON.stringify(professor));


console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`============================ Step-5 Modify any existing property age ============================================`);


professor.age = 51;
console.log(`After modifying age:`, JSON.stringify(professor.age));

console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`============================ Step-6 Adding New certificate at index 2 ===========================================`);
professor.certificates.splice(2, 0, 'Oracle Certified');
console.log(`After Adding Certificate:`, JSON.stringify(professor.certificates));


console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`============================ Step-7 Log the last element of the array certificates ==============================`);
const len = professor.certificates.length;
console.log(`Last certificate:`, JSON.stringify(professor.certificates[len - 1]));


console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`============================ Step-8 Log complete object on console ==============================================`);
console.log(`Complete professor object:`, JSON.stringify(professor,null,2));


console.log(`-----------------------------------------------------------------------------------------------------------------`);
console.log(`============================ Step-9 Traverse array certificates using for of loop ===============================`);

for (const certificate of professor.certificates) {
    console.log(JSON.stringify(certificate));
}


