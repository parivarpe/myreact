//JSX (XML) here can have only one root element . means two div sibilings are not allowed
/*
function App() {
  return (
    <div>
      <h3>Hello World</h3>
      <div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, id!</div>                         
    </div>
    //<div></div>       it is sibling of first div -not allowed  div within div alowed(1 parent multiplw child )
  );
}
export default App;*/

export default function App() {
  let uname = "PARI";
  let email = "pari@gmail.com";

  return (
    <div>
      <div> {uname} </div>
      <div> {email} </div>
    </div>
  );
}
