// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//        process.stdout.write(j + " ")
//     }
//     console.log()
// }

// for(let i = 5 ; i>=1;i--){
//     for(let j = 1; j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }

 for(let i = 1; i<=5;i++){
    let ch = 'A';
        for(let j=1 ; j<=i;j++){
            
            process.stdout.write(ch + ' ')
            ch = String.fromCharCode(ch.charCodeAt(0) + 1)
        }
        
        console.log()
    }