let arr1 = [1,2,3,4,5,6]

let arr2 = [7,8,9]

function numb(x){
    if(x.length > 5){
       console.log("Muitos elementos")     
    }else{
        console.log("Poucos elementos")
    }
}

numb(arr1)
numb(arr2)