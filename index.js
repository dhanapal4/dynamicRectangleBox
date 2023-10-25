const container=document.querySelector(".container")
console.log(container)


function createBox(parentEle,count){
    for(let i=0;i<count;i++){
        const box=document.createElement('div')
        box.classList.add("box")
        parentEle.appendChild(box)
        parentEle=box
    }
}


createBox(container,20)