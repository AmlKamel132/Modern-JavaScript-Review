/**
 * 
 * Object.assign(Target,DefaultValues,UserValues)
 */
function courseDetails(options={}){
 var course = {
        name:'Es6',
        duration:'3 weeks',
        supervisior:'aml'
    }
    // target , default , userInput
   var course_details = Object.assign({},course,options);

   console.log(`course details name : ${course_details.name} , duration: ${course_details.duration} , supervisior: ${course_details.supervisior}`)
}


courseDetails({  name:'aaa',duration:'2 weeks'})