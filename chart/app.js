let tab = [20,50,37,92,15,109,20,-10,20]
let rc = rough.svg(document.querySelector('#svg'))
let svg = document.querySelector('#svg')
let x = 0
var maxTabB
var minTabB
function diagram(){
    let tabB = [...tab]
    for(let i=10;i>0;i--){
        let finalX = 40+80*tab.length+60
        let line = rc.line(20,i*50,finalX,i*50,{roughness:0,stroke:'#4f4f4f'})
        svg.appendChild(line)
        let p = document.createElement('p')
        p.innerHTML= i*10+'%'
    }
    let cropped = 0
    for(let j=0;j<tab.length;j++){
        if(tab[j]>100||tab[j]<0){
            tabB.splice(j-cropped,1)
            cropped++
        }
    }
    maxTabB = Math.max(...tabB);
    minTabB = Math.min(...tabB);
    for(let i=0;i<tab.length;i++){
        x+=80
        y=500-tab[i]*5
        if(tab[i]>100){
            var e = rc.rectangle(x, y, 40, 0)
        }
        else if(tab[i]<0){
            var e = rc.rectangle(x,y,0,0)
        }
        else if (tab[i] === maxTabB || tab[i] === minTabB) {
            var e = rc.rectangle(x, y, 40, tab[i] * 5, { fill: 'gold', fillStyle: 'solid', roughness: 0 });
        }
        else{
            var e = rc.rectangle(x,y,40,tab[i]*5, {fill:'green',fillStyle:'solid',roughness:0})
        }
        svg.appendChild(e)
    }
}
diagram()
function Show(){
    let span = document.querySelector('.values')
    for(let i=0;i<tab.length;i++){
        let value = document.createElement('span')
        if(i<tab.length-1){
            value.innerHTML = tab[i]+', '
        }
        else{
            value.innerHTML = tab[i]
        }
        if(tab[i]<0||tab[i]>100){
            value.style.color='red'
        }
        if(tab[i]===maxTabB||tab[i]===minTabB){
            value.style.color='gold'
        }
        span.appendChild(value)
    }
}
Show()
