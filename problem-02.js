/*function signature */
function  validContact( contact ) {
    if(contact.length === 11 && contact.startsWith("01") && !contact.includes(" ")){
        return true
    };
    if(contact !== "string"){
        return false
    }
    return false
}

const contact = "01000000000";
const validNumber = validContact(contact);
