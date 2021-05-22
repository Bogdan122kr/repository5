// function myZheka(){
//     alert("Привет")
// }

let a = document.getElementById("text")
a.onclick = function(){
    alert("привет")
}
class Button{
    myzheka(event){
        let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        this[method](event);
    }
onstorage(){
    b.innerHTML="кнопка нажата";
}
onStarUp(){
    b.innerHTML += "кнопка отжата";
}
}
let x = new Button();
text1.addEventListener('mousedown',x);
text1.addEventListener('mouseup',x);

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
// <button id="elem">Нажми меня</button>


//5 кнопок что бы при нажатии чтото открывалось
//создать 2 что бі на самой кнопке что-то писалось