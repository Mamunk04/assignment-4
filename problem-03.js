
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
    if(pass.length > fail.length && Array.isArray(marks) ){
        return true
    }
    if(pass.length < fail.length && Array.isArray(marks)){
        return false
    }
    else{
        return false
    }

}


let marks = [100,51,20] ;
const result = willSuccess(marks);