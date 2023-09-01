import React from "react";



class Apple extends React.Component{
    render(){

const {appleinfo} = this.props;
const {brand , color} = appleinfo;



        return( 
            <>
                <h1>mobile brand is {brand} and color is {color}</h1>
            </>
        )
    }

}

export default Apple;