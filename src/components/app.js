import Mobile from "../components/mobile";
import Apple from "./apple";
function App() {

const isdooropen = false;


    // const Brand = 'redmi';
    // const color = 'black';
const mobileinfo ={
    brand:"redmi",
    color:"red"
};
// const mobileinfo ={};
const appleinfo = {
    brand: "iphone 12 pro max",
color:"black"
};

const mobilelist =[{brand:"samsung",color:"black"},
{brand:"realme",color:"white"},
{brand:"nothing",color:"gold"}
];



    return (
      <div>
        <h1>Hello, World!</h1>
        {/* <Mobile brand = { Brand }  color = { 'black '} /> */}
        { mobileinfo.brand !== undefined && mobileinfo.color !== undefined ?
        <Mobile mobileinfo={mobileinfo}/> : null }
        <Apple appleinfo={appleinfo} />

        {isdooropen ?<h1> the door is open </h1> : <h1> the door is closed </h1> }
<ul>
   { mobilelist.map ((mobileinfo)=><li><Mobile mobileinfo={mobileinfo}/></li>)}
</ul>

      </div>
    );
  }
  export default App;