// Your code here

let test = ["Madison", "Vallarino", "Software Engineer", 30]
let test2 = [["Madison", "Vallarino", "Software Engineer", 30], ["Zachary", "Vallarino", "Software Engineer", 35]]

function createEmployeeRecord(array){
    const employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

    return employeeRecord
}


function createEmployeeRecords(array){
    // const employeeRecord = {
    //     firstName: arr[0],
    //     familyName: arr[1],
    //     title: arr[2],
    //     payPerHour: arr[3],
    //     timeInEvents: [],
    //     timeOutEvents: [],
    // }
    return array.forEach((arr) => {
        firstName =  arr[0],
        familyName = arr[1],
        title = arr[2],
        payPerHour = arr[3],
        timeInEvents = [],
        timeOutEvents = []
    })
    
    // const employeeRecord3 = {
    //     firstName: array[0][0],
    //     familyName: array[0][1],
    //     title: array[0][2],
    //     payPerHour: array[0][3],
    //     timeInEvents: [],
    //     timeOutEvents: [],
    // }

    // const employeeRecord2 = {
    //     firstName: array[1][0],
    //     familyName: array[1][1],
    //     title: array[1][2],
    //     payPerHour: array[1][3],
    //     timeInEvents: [],
    //     timeOutEvents: [],
    // }
    // return [employeeRecord3, employeeRecord2]
}
// function createEmployeeRecords(arrays){
    

//    for(let i = 0; i <= arrays.length; i++){
//     let obj = {
        
//     }
//        for(keys in arrays[i]){
//         //    console.log(arrays[i][keys])
//             if(parseInt(keys) === 0){
                
//                 obj["firstName"] = arrays[i][keys]
//             }else if(parseInt(keys) === 1){
                
//                 obj["familyName"] = arrays[i][keys]
//             }else if(parseInt(keys) === 2){
                
//                 obj["title"] = arrays[i][keys]
//             }else if(parseInt(keys) === 3){
                
//                 obj["payPerHour"] = arrays[i][keys]
//                  obj["timeInEvents"] = []
//                 obj["timeOutEvents"] = []
//             }
             
//        }
//        return obj
//     //    employeeRecords.push({firstName: arrays[i][0]})
//    }
  
//     // const employeeRecord = {
//     //     firstName: array[0],
//     //     familyName: array[1],
//     //     title: array[2],
//     //     payPerHour: array[3],
//     //     timeInEvents: [],
//     //     timeOutEvents: [],
//     // }
//     // const employeeRecord2 = {
//     //     firstName: array[0],
//     //     familyName: array[1],
//     //     title: array[2],
//     //     payPerHour: array[3],
//     //     timeInEvents: [],
//     //     timeOutEvents: [],
//     // }
    
// }



console.log(createEmployeeRecords(test2))

// console.log(createEmployeeRecord(test))

