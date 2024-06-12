
/*Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.*/ 
console.log(`Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.`);
function userIdGeneratedByUser(){
    let noOfChars = parseInt(prompt("Enter the number of characters: "))
    let noOfIds = parseInt(prompt("Enter the number of ids: "))

    function generateId(length){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let id = ''
        for(let i=0; i<length; i++){
            const randomIndex = Math.floor(Math.random()*characters.length)
            id += characters[randomIndex]
        }
        return id
    }

    // generating the specified no of ids
    const idList = []
    for(let i=0; i<noOfIds; i++){
        idList.push(generateId(noOfChars))
    }

    console.log(idList);
    return idList

}

userIdGeneratedByUser()