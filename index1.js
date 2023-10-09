let textmain;
let mainarea=document.getElementById('textingArea');
addtexthere=()=>{
    textmain=prompt("Please add your text here");
    let box=document.createElement('div');
    box.innerHTML=textmain;
    mainarea.appendChild(box);
    box.setAttribute('class','textBlock');
}

deletetexthere=()=>{
    deletemain=prompt("which index box you want to delete>");
    deletemain=Number.parseInt(deletemain);
    let box=mainarea.childNodes[deletemain];
    mainarea.removeChild(box);
}



let listmain;
let listarea=document.getElementById('ListingArea');
let i=-1;

addlisthere=()=>{
    let listbox=document.createElement('ul');
    i=Number.parseInt(i);
    listarea.appendChild(listbox);
    listbox.setAttribute('class',"ListBlock")
    i=i+1;
}

addelementhere=()=>{
    listmain=prompt("Please enter your list element here");
    let listelmt=document.createElement('li');
    listelmt.innerHTML=listmain;
    let temp=listarea.childNodes[i];
    temp.appendChild(listelmt);
    listelmt.setAttribute('id',"abcde");
}