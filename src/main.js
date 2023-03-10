import anime from "animejs";
import { text } from "./modules/module"
anime({
    targets: 'p',
    backgroundColor: 'hsl(100, 90%, 80%)',
    duration: 2000
})
console.log(text)
const img = document.createElement('img');
document.body.append(img);
console.log(import.meta)

// const moduleURL = import.meta.url; //URL till modulen
// const relativeURL = './media/animal.png' //Relativ URL till bilden

const imgUrl = new URL('./media/animal.png', import.meta.url);
img.src = imgUrl.href