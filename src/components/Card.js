
import React from "react";
import './card.css'

class Card extends React.Component{

    render(){
        return(
            <div className="card">
                <img src= {this.props.url} alt="" />
                <div className="content">
                    <h3>{this.props.title}</h3>
                    <p className="date"><span> {this.props.name}</span> | {this.props.date}</p>
                    <p className="details"> {this.props.description} </p>
                </div>
            </div>
        )
    }
}

export default Card;