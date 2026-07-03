

const element = React.createElement('h1',{id:"title"},"Hello Coders!");

const root = ReactDOM.createRoot(document.getElementById('root'));

// const element2 = React.createElement('div',null,element,
//     React.createElement('h1',null,"Hi",
//     React.createElement('h2',null,"Hello"))
// )




//JSX-->JavaScript XML:Look like HTML  --> JS object
//                                    Bebel            

// const element = React.createElement('h1',{id:"title"},"Hello Coders!")

//<h1 id="title">Hello JSX!!!!!!!</h1>  --->  React.createElement('h1',{id:"title"},"Hello Coders!")  ---->  it give {type:'h1',props:{id:"h1",children:"hello"}}  ----> Convert to real DOM
//                                     Bebel                                                         React                                                        ReactDOM
const element1 = <h1 id="title">Hello JSX!!!!!!!</h1>


// use brackets to embeded jsx 

// const element2 = (<div>
//     <h1>Hello Ji!</h1>      //should be wrapped up into root tag
//     <h2>Kese Ho!!!</h2>
// </div>);


//React Component
//Number,String,array -> (display)
//true,false,null,undefined -> (Not display)
//object -> (error)

// const isLoggedIn = true;
// const ele = <h1>Hello {isLoggedIn?<h2>Logged In</h2>:<h2>Kindly Login</h2>}</h1>



// const course = ["HTML","CSS","JavaScript","React"];

// const elementForCourse = (
//     <ul>
//         {course.map(course=><li>{course}</li>)}
//     </ul>
// )



// function App(props){
    
//     return(
//         <div>
//             <h1>{props.age}</h1>
//             <h1>Hello React Component!!! by {name}</h1>
//         </div>
//     )
// }

//convert the value to object
// {
//     name:"kapil",
//     age:21
// }

const ele = <App name="Kapil" age={21}></App>

root.render(ele)
//Or
// root.render(<App/>)


// const element3 = <h1 id="name" className="title" style={{backgroundColor:"orangered"}}>Hello </h1>

// root.render(element3)



function Header({name}){
    return(
        <h1>Welcome {name}!  Indian Election Commission Board</h1>
    );
}

function Main(){
    return(
        <h1>About Us</h1>
    )
}

function Footer(){
    return(
        <h1>Contact us
            Mobile No: 98494xxxx
            Email : footer@343.com
        </h1>
    )
}

function App(info){
    return(
        <>
          <Header name="Kapil Prajapat"></Header>
          <Main></Main>
          <Footer></Footer>
        </>
    )
}




root.render(<App name="Kapil Prajapat "></App>)



