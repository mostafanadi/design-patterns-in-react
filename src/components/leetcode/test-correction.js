

const correctTest = (questions,answers,participants,...rest)=>{
    console.log(questions,answers,participants,rest)
    let result =Array(participants).fill(0)
    const m = {
        A:0,
        B:1,
        C:2,
        D:3
    }
    for (let i =0 ;i<rest.length;i++){
        
        const correctAnswer = answers[i%questions]
        const status = (rest[i][m[correctAnswer]] == "#" && rest[i].replace("#","").length>3)? "correct":[...rest[i]].filter(item=>item=="O").length==4 ?"empty":"wrong"
       
        if(status=="correct"){
            result[Math.floor(i/(questions))] = result[Math.floor(i/(questions))] + 3
        }
        if(status=='wrong'){
            result[Math.floor(i/(questions))] -=1
        }
       
    }
    console.log(result.join(''))
    return (result.join('')) 
}

correctTest(4,"CABA",2,"OO#O","OOOO","#OOO","OO##","OO#O","OOOO","#OOO","OO##")
// correctTest(1,"C",4,"OO#O","OOOO","#OOO","OO##")
// correctTest(10,"AABBDCABCD",1,"#OOO","#OOO","O#OO","O#OO","OOO#","OO#O","#OOO","O#OO","OO#O","OOO#")

var array = readline().split(' ');
var x = parseInt(array[0]);
var y = parseInt(array[1]);
console.log(x + y);