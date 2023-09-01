function Mobile(props) {
    const {mobileinfo} = props 
 const {brand, color} = mobileinfo

 const text = `mobile brand is ${brand} and color is ${color}`;
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
export default Mobile;  