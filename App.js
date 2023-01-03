 //create h1 tag using React
 const heading=React.createElement("h1",{
  id:"title"
},"Welcome to React");
const heading1=React.createElement("h2",{
  id:"title"
},"Namaste Everyone");
const container=React.createElement("div",{
  id:"container"
},heading,heading1);
console.log(heading);
//to create heading inside root in react.rootis the place where the React runs
const root= ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside root
//react will overwrite whatever inside root
root.render(container);
 //create h1 tag using React
  heading=React.createElement("h1",{
  id:"title1"
},"Welcome to React");
 heading1=React.createElement("h2",{
  id:"title"
},"Namaste Everyone");
 container=React.createElement("div",{
  id:"container"
},heading,heading1);
console.log(heading);
//to create heading inside root in react.rootis the place where the React runs
 root= ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside root
//react will overwrite whatever inside root
root.render(container);
