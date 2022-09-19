import React from "react";
import "./header.css"

class Header extends React.Component{

    render(){
        return(
            <>
                <div className="header">
                    <div className="header-left">
                        <div>
                            <h1>EDYODA</h1><br />
                            <p>storeis </p>
                        </div>
                        <p>Explore Categories </p>
                    </div>
                    <div className="header-right">
                        <p>Edyoda is free learning and knowledge <br /> sharing plateform for techies</p>
                        <button>Go To Main Website</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Header