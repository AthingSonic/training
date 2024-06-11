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
                message: 'Watching Movie'
            })
        }else{
            resolve('Thumbs up and subscribe!')
        }
    })
}

watchMovie().then(message=>{
    console.log("Success:"+ message);    
}).catch(error=>{
    console.log(error.name+' '+error.message);
})