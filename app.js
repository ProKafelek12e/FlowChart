let rc = rough.svg(document.querySelector("#svg"));
const BtKwadrat = document.querySelector("#BtKwadrat")
const BtDiamond = document.querySelector("#BtDiamond")
const BtEllipse = document.querySelector("#BtEnd")

const Sett = {fill:' #F2c70d',roughness:'0',fillStyle:'solid',fillWeight:'3',stroke:"#FFF",strokeWidth:'5'};
var config ={
    "x":(window.innerWidth/2)-150,
    "y":25,
    "gap":25,
    "width":200,
    "height":100,
}

addEllipse(config.x+config.width/2,config.y+config.height/2,config.width,config.height,0)

    




BtKwadrat.addEventListener('click',()=>{
    addSquare(config.x,config.y,config.width,config.height)})
BtDiamond.addEventListener('click',()=>{
    addDiamond(config.x,config.y,config.width,config.width)})
BtEllipse.addEventListener('click',()=>{
    addEllipse(config.x+config.width/2,config.y+config.height/2,config.width,config.height,1)})

function addSquare(x,y,width,height){
    let rectangle = rc.rectangle(x,y,width,height,
        Sett)

    svg.appendChild(rectangle)
    // MOJE
    // config.y +=height
    // let line = rc.line(x+width/2,config.y,x+width/2,config.y+config.gap)
    // config.y +=config.gap

    // KLASY
    x1 = x+width/2
    y1 = y+height
    x2 = x+width/2
    y2 = y+height+config.gap

    let line = rc.line(x1,y1,x2,y2,
        {stroke:"#FFF",roughness:'0',strokeWidth:'5'})

    svg.appendChild(line)
    config.y = height+config.gap+config.y
    //rectangle.addEventListener('click',()=>{
    //    console.log('test')
    //})

}
function addEllipse(x,y,width,height,Type){

    let elipse = rc.ellipse(x,y,width,height,
        Sett)
    if(Type==0){

        x1 = config.x+config.width/2
        y1 = config.y+config.height
        x2 = config.x+config.width/2
        y2 = config.y+config.height+config.gap
        
        let line = rc.line(x1,y1,x2,y2,
            {stroke:"#FFF",roughness:'0',strokeWidth:'5'})
            
            config.y+=config.height+config.gap
            
            svg.appendChild(line)
        }
        svg.appendChild(elipse)
}
function addDiamond(x,y,width,height){
    d=height
    a=d/Math.sqrt(2)

    x0 = (x+width/2)-(a/2)
    y0 = y+(d/2-a/2)


    let diamond = rc.rectangle(x0,y0,a,a,
        Sett)
    diamond.setAttribute('transform',`rotate(45,${x0+a/2},${y0+a/2})`)
    svg.appendChild(diamond)
    x1 = x+width/2
    y1 = y+height
    x2 = x+width/2
    y2 = y+height+config.gap

    let line = rc.line(x1,y1,x2,y2,
        {stroke:"#FFF",roughness:'0',strokeWidth:'5'})

    svg.appendChild(line)
    config.y = height + config.gap + config.y
}