//5 кнопок что бы при нажатии чтото открывалось
//создать 2 что бі на самой кнопке что-то писалось

let a = document.getElementById("button1");
    b =document.getElementById("button2");
    c =document.getElementById("button3");
    d = document.getElementById("button4");
    g = document.getElementById("button5");
    g = document.getElementById("button6");

    a.setAttribute("class","button1")
    b.setAttribute("class", "button2")
    c.setAttribute("class","button3")
    d.setAttribute("class","button4")
    g.setAttribute("class","button5")


class Button{
    handleEvent(event){
        let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        this[method](event);
    }
    onMousedown(){
    b.innerHTML="кнопка нажата";
}
onMouseup(){
    b.innerHTML = "кнопка отжата";
}
}
let x = new Button();
button6.addEventListener('mousedown',x);
button6.addEventListener('mouseup',x);


// class Button {
//     handleEvent(event) {
     
//       let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
//       this[method](event);
//     }

//     onMousedown() {
//       elem.innerHTML = "Кнопка мыши нажата";
//     }

//     onMouseup() {
//       elem.innerHTML = "...и отжата.";
//     }
//   }

//   let x = new Button();
//   elem.addEventListener('mousedown', x);
//   elem.addEventListener('mouseup', x);