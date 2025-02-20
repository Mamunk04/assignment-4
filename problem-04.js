/*function signature*/
function  validProposal( person1 , person2 ) {
    if(typeof person1 === "object"  && typeof person2 === "object" ){
    let ageGap = Math.abs(person1.age - person2.age)
    if(person1.gender !== person2.gender && ageGap <= 7){
        return true
    }
    else{
        return false
    }
    }
    else{
        return "Invalid"}
}

const person1 = {
    name: "Foyjul",
    gender: "male",
    age:37
}

const person2 = {
    name: "Sabiha",
    gender: "female",
    age:30
}

const marry = validProposal(person1 ,person2);

