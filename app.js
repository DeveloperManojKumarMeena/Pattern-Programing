for(let i = 5 ; i>=1; i--){
    for(let j=5; j>=5-1 ; j-- ){
       process.stdout.write(' ') 
    }
    for(let j=5; j>=i;j--){
        process.stdout.write('* ')
    }
    console.log()
}