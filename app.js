// for(let i = 5 ; i>=1; i--){

//    for(let j=1;j<=i;j++){
//                 process.stdout.write('  ');
//             }
  
//     for(let j=5; j>=i;j--){
//         process.stdout.write('* ')
//     }
//     console.log()
// }

let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a Number'));

for (let i = 1; i<=n; i++){
    for(let j=1; j<=n;j++){
        if(i==j || i+j==n+1){

            process.stdout.write('* ')
        }else{
            process.stdout.write(' ')
        }
    }
    console.log()
}
