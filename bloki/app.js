//SETUP
let rc = rough.svg(document.querySelector("#svg"))
let up = document.querySelector("#up")
let left = document.querySelector("#left")
let right = document.querySelector("#right")
let down = document.querySelector("#down")


const config = {
    x:(window.innerWidth/2)-50,
    y:window.innerHeight*0.4-50,
    side:100,
    gap:25
}
var taken=[]
//START
sq = rc.rectangle(config.x,config.y,config.side,config.side,{fill:'red',roughness:0})
    svg.appendChild(sq)
    let cord = {}
    cord[0] = config.x
    cord[1] = config.y
    taken.push(cord)
    console.log(taken)


//MOVE

up.addEventListener('click',()=>{
    if(checkTaken(config.x,config.y-config.side-config.gap)==true){}
    else{
        let cord = {}
        cord[0] = config.x
        cord[1] = config.y-config.side-config.gap
        taken.push(cord)
        config.x=cord[0]
        config.y=cord[1]
        console.log(taken)
        addSquare('up')
        arrows()
    }
})
down.addEventListener('click',()=>{
    if(checkTaken(config.x,config.y+config.side+config.gap)==true){}
    else{

        let cord = {}
        cord[0] = config.x
        cord[1] = config.y+config.side+config.gap
        taken.push(cord)
        config.x=cord[0]
        config.y=cord[1]
        console.log(taken)
        addSquare('down')
        arrows()
    }
})
left.addEventListener('click',()=>{
    if(checkTaken(config.x-config.side-config.gap,config.y)==true){}
    else{

        let cord = {}
        cord[0] = config.x-config.side-config.gap
        cord[1] = config.y
        taken.push(cord)
        config.x=cord[0]
        config.y=cord[1]
        console.log(taken)
        addSquare('left')
        arrows()
    }
})
right.addEventListener('click',()=>{
    if(checkTaken(config.x+config.side+config.gap,config.y)==true){}
    else{

        let cord = {}
        cord[0] = config.x+config.side+config.gap
        cord[1] = config.y
        taken.push(cord)
        config.x=cord[0]
        config.y=cord[1]
        console.log(taken)
        addSquare('right')
        arrows()
    }
})



//Square adding function

function addSquare(facing){
    sq = rc.rectangle(config.x,config.y,config.side,config.side,{fill:'red',roughness:0})
    svg.appendChild(sq)
    addLine(facing)
}

function addLine(facing){
    if(facing=='up'){
        x1=config.x+config.side/2
        y1=config.y+config.side
        x2=config.x+config.side/2
        y2=config.y+config.gap+config.side
    }
    if(facing=='down'){
        x1=config.x+config.side/2
        y1=config.y
        x2=config.x+config.side/2
        y2=config.y-config.gap
    }
    if(facing=='left'){
        x1=config.x+config.side
        y1=config.y+config.side/2
        x2=config.x+config.gap+config.side
        y2=config.y+config.side/2
    }
    if(facing=='right'){
        x1=config.x
        y1=config.y+config.side/2
        x2=config.x-config.gap
        y2=config.y+config.side/2
    }
    line = rc.line(x1,y1,x2,y2,{stroke:'white',roughness:0})
    svg.appendChild(line)
    
}

function checkTaken(x,y){
    t=0
    for(let i=0;i<taken.length;i++){
        if(x==taken[i][0]&&y==taken[i][1]){  t=1;console.log('test')}
        else{
            console.log('nie')
        }
    }
    if(t==1) return true
    else return false
}

function arrows(){
    if(checkTaken(config.x,config.y-config.side-config.gap)==true) up.classList.add('disabled')
    else up.classList.remove('disabled')
    if(checkTaken(config.x,config.y+config.side+config.gap)==true) down.classList.add('disabled')
    else down.classList.remove('dsiabled')
    if(checkTaken(config.x-config.side-config.gap,config.y)==true) left.classList.add('disabled')
    else left.classList.remove('disabled')
    if(checkTaken(config.x+config.side+config.gap,config.y)==true) right.classList.add('disabled')
    else right.classList.remove('disabled')
}