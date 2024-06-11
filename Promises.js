let userLeft = false
let userWatching = true

function watchMovie(){
    return new Promise((resolve, reject)=>{
        if(userLeft){
            reject({
                name:'User left',
                message: ':('
            })
        }else if(userWatching){
            reject({
                name: 'User watching',
                message: 'Horror Movie'
            })
        }else{
            resolve('Thumbs up and subscribe!')
        }
    })
}

watchMovie().then((message)=>{
    console.log("Success:"+ message);
    return message
}).then(message=>{
    console.log("Success2:"+ message);    
}).catch(error=>{
    console.log(error.name+' '+error.message);
})

// promise all
console.log('Promise all');

let promise1 = new Promise((resolve, reject)=>{
    resolve('promise 1 executed')
})
let promise2 = new Promise((resolve, reject)=>{
    resolve('promise 2 executed')
})
let promise3 = new Promise((resolve, reject)=>{
    resolve('promise 3 executed')
})

Promise.all([promise1, promise2, promise3]).then(message=>{
    console.log(message);
})