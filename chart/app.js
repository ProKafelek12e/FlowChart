let tab = [20,50,37,92,15,109,20,'-10',20]
let rc = rough.svg(document.querySelector('#svg'))
let svg = document.querySelector('#svg')
let x = 40

function diagram(){
    for(let i=10;i>0;i--){
        let finalX = 40+80*tab.length+60
        let line = rc.line(20,i*50,finalX,i*50,{roughness:0,stroke:'#4f4f4f'})
        svg.appendChild(line)
    }
    for(let i=0;i<tab.length;i++){
        x+=80
        y=500-tab[i]*5
        if(tab[i]>100){
            var e = rc.rectangle(x, y, 40, 0)
        }
        else if(tab[i]<0){
            var e = rc.rectangle(x,y,0,0)
        }
        else{
            var e = rc.rectangle(x,y,40,tab[i]*5, {fill:'green',fillStyle:'solid',roughness:0})
        }
        svg.appendChild(e)
    }

}
diagram()