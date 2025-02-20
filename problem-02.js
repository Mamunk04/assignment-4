/*function signature */
function  validContact( contact ) {
    if(typeof contact === "string"){
    if(contact.length === 11 && contact.startsWith("01") && !contact.includes(" ")){
        return true
    };
   
        return false
    }
    else{
        return "Invalid"
    }
}

const contact = "1000000000";
const validNumber = validContact(contact);

