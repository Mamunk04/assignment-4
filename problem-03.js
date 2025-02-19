
function  willSuccess( marks ) {
    let markArray = [];
    let fail = [];
    let pass = [];
 for(let mark of marks){
        markArray.push(mark)
       
    }
    for(let i = 0 ; i < markArray.length ; i++){
        let markArrayREsult = markArray[i];
        if(markArrayREsult < 50){
            fail.push(markArrayREsult)
        }
        if(markArrayREsult > 50){
            pass.push(markArrayREsult)
        }
    }
    if(pass.length > fail.length  ){
        return true
    }
    else if(!Array.isArray(marks)){
        return "invalid"
    }
    if(pass.length < fail.length ){
        return false
    }
    else{
        return false
    }

}


let marks = [60, 70, 80, 40, 30];
const result = willSuccess(marks);
console.log(result)