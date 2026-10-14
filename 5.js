const { randomUUID } = 
require('crypto')

function getKey(isAuthorized){
    if(isAuthorized){
        return randomUUID()
    }

    return null
}

console.log(getKey(true))