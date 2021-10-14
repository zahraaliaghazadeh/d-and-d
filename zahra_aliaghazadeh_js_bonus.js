const dice_common_sides = [4, 6, 8, 10, 12, 20]

function rollDice(str){
    // let userInput = promptUser()
    let n_and_m = extract_n_and_m(str);
    if( (n = 0) | (m = 0)){
        console.log("Input was invalid")
    }
    // console.log(n_and_m)
    let numberOfDice = parseInt(n_and_m[0])
    console.log("the numberOfDice is " , numberOfDice)
    let sides = parseInt(n_and_m[1])
    console.log("the sides is", sides)
    let total = 0;
    // for loop untill run out of number of dice rolls
    for(var i = 1; i <= numberOfDice ; i++){
        // make a random value up until max sides
        let randomOutput = random(sides)
        // add that random value to the sum
        total = sum(total, randomOutput)
    }

    // if the sum is too large show an error
    if(total <= numberOfDice*sides){
        console.log("total value is ", total);
    }else{
        console.log("something went wrong");
    }

}

function extract_n_and_m(str){
    let inputStringArr = str.split("d");
    // console.log(inputStringArr)
    let n = inputStringArr[0]
    let m = inputStringArr[1]
        // NdM
        // 1 <= N <= 100
        // 2 <= M <= 100
        if ((1 <= n && n <= 100) && (2 <= m && m <= 100)){
            console.log("n , m are respectively ", n,m)
            return([n,m])
        }else{
            n=0
            m=0
            console.log("input invalid");
            return([n,m])
        // }else{
        //     throw 'InvalidInPut';
        }
}


function random(sides){
    " Function to create a random number and multiply it by sides"
    // console.log(Math.floor(Math.random() * sides))
    return (Math.floor(Math.random() * sides))
}

function sum(total, num){
    " This function is to calculate sum of two numbers"
    console.log(total + num)
    return total + num ;
}


// function promptUser(){
//     while(true){
//         var input = prompt("Enter the Dice format as 'NdM'")
    
//     if(input="stop"){
//         break;
//     }
// }
 
// }

// test cases for rolling dice
rollDice("3d6")
console.log("======")
rollDice("4d12")
console.log("======")
rollDice("1d10")
console.log("======")
rollDice("5d4")
console.log("======")
rollDice("3d150")
console.log("======")
rollDice("300d10")
console.log("======")
