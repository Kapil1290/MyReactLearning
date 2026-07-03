// creating new element --

// attribute become like--> 
// attribute = {
//     className:element,
//     id:ele
// }



// const element = document.createElement('h1');
// element.textContent = "Hello Coder Army";
// element.style.color = 'white';
// element.className = 'element';
// element.id = 'ele';
// element.style.backgroundColor = 'green';



// react is the javascript library
// const React = {
//     createEle : function(tag, attribute, children){
//     const element = document.createElement(tag);
//     element.textContent = children;

//     for(let key in attribute){
//         if(key === 'style'){
//             Object.assign(element.style, attribute.style)
//         }else{
//             element.key = attribute[key];
//         }
//     }

//     return element;
//  }

// }

// THis is the virtual DOM in React which will return by this object react
// const React = {
//     createElement: function(type, props, children) {
//         return {
//             type: type,
//             props: {
//                 ...props,
//                 children: children
//             }
//         }
//     }
// }


// const ReactDOM = {
//     render: function(reactElement, root){

//         root.innerHTML = '';

//         const element = document.createElement(reactElement.type);
//         const {props} = reactElement;

//         for(let key in props){
//             if(key==='style'){
//                 Object.assign(element.style, props.style)
//             }else if(key==='children'){
//                 element.textContent = props[key];
//             }else{
//                 element[key] = props[key];
//             }
//         }

//         root.append(element);
//     }
// }

const element = React.createElement("h1", { className: "element", id: "ele", style: { fontSize: "30px", color: "green", backgroundColor: "orange" } }, "Hello Guys");
const element1 = React.createElement("h2", { className: "element1", id: "ele1", style: { fontSize: "30px", color: "green", backgroundColor: "pink" } }, "I am Back");

//With react
const div = React.createElement('div',null,element,element1,"Hello COders");

console.log(div);

//Main container to render the react elements
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div,root)

// root.append(element)
// root.append(element1)

// ReactDOM.render(element, root)
// ReactDOM.render(element1,root)