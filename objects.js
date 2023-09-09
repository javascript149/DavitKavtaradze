let person = {
    firstName: "Gela",
    lastName: "gotua",
    location: "Tbilisi",
    age: "20",
    dateOfBirth: "2003",
    workPlace: "Botlebs ibarebs",
    payment: 1.20,
}
alert(person.firstName+` `+person.lastName);
person['gender'] = 'male';
person["University"] = 'GTU'
delete person.selary;
alert(`${person.firstName+` `+person.lastName} სამუშაო ადგილი ${person.workPlace+` `+ person.age} წლის ანაზგაურება
${person.payment} ლარი რაგაცა ხო უნდა დარჩეს`);