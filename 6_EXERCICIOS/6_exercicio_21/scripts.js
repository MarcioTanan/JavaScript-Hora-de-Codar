function dado(x){
  if(typeof x === 'string'){
    console.log("Esse dado é uma String")
  }else if(typeof x === 'number'){
    console.log("Esse dado é um Number")
  }else if(typeof x === 'boolean'){
    console.log("Esse dado é um Boolean")
  }
}

dado("Marcio")
dado(35)
dado(true)