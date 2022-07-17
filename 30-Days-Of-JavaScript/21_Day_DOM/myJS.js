//Execises Day 21: DOM level 1
const firstShit = document.querySelector('p');
console.log(firstShit.innerHTML);
const paragraphs = document.querySelectorAll('p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].setAttribute('id', `paragraph_${i + 1}`);
}
console.log(paragraphs);
const firstParagraph = document.querySelector('#paragraph_1');
const secondParagraph = document.querySelector('#paragraph_2');
const thirdParagraph = document.querySelector('#paragraph_3');
const fourthParagraph = document.querySelector('#paragraph_4');
paragraphs.forEach(paragraph => {
    console.log(paragraph.innerHTML);
}) 
paragraphs[3].textContent = 'Fourth Paragraph';
console.log(paragraphs[3].textContent);

//Execises level 2
const colors = ['red', 'green', 'blue', 'black'];
paragraphs.forEach((paragraph, i) => {   
    paragraph.style.color = colors[i];
    if (i%2 === 0) {
        paragraph.style.fontSize = '30px';
        paragraph.style.fontWeight = 'bold';
        paragraph.style.fontFamily = 'Futura';
        paragraph.style.textAlign = 'center';
    }else {
        paragraph.style.fontSize = '20px';
        paragraph.style.fontFamily = 'Zapfino';
        paragraph.style.border = '1px solid black';
        paragraph.style.padding = '10px';
        paragraph.style.margin = '10px';
        paragraph.style.backgroundColor = 'lightgray';
        paragraph.style.textAlign = 'center';
    }
    paragraph.style.fontSize = '20px';
});
const html = 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. HTML. (HyperText Markup Language)'
const css = 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is designed to be used by a user agent, which implements the CSS Level 2 standard. CSS Level 2 is a subset of the CSS Level 3 specification.'
const JavaScript = 'JavaScript is a high-level, interpreted programming language. It is most commonly used as a part of web pages, but it can also be used in other applications, including desktop applications, online games, and graphical user interface software for both client-side and server-side applications. JavaScript is designed to make it possible to write programs that run without a central hub, which is known as event-driven programming.'
const Vue = 'Vue.js is a JavaScript Framework for building user interfaces. It is a progressive framework which is more concerned with the view than the DOM. It is a single-file JavaScript library that is designed to make it easier to create a rich user interface. It is a framework for building user interfaces and is used by many companies to build web applications.'

let arr = [html, css, JavaScript, Vue];
paragraphs.forEach((paragraph, i) => { 
    paragraph.innerHTML = arr[i];
    paragraph.setAttribute('class', 'para');
    paragraph.setAttribute('id', `para_${i + 1}`);
})
console.log(paragraphs);


//Execises level 3
//in other file 