
import Chip from '../compent/chip.png';
import Visa from '../compent/visa.jpg';
import '../App.css'

import React, { Component } from 'react'

export default class card extends Component {
    state = {
        number: "",
        name: "",
        valid: "",

    }

    handleChangeNumber = (event) => {
        if (event.target.value.length <= 19 && (!event.target.value.match(/[^0-9 ]/g))){
            this.setState({
                number: event.target.value.replace(/[ ]/g, "")

            })
        }
    
    

    }

    handleChangeName = (event) => {
        if (event.target.value.length <= 19 && (!event.target.value.match(/[^A-Z a-z]/g))) {
            this.setState ({
                name: event.target.value.toUpperCase()

            });
        
        }
             
    }


    handleChangeValid = (event) => {
        if (event.target.value.length <= 5 && (!event.target.value.match(/[^0-9/]/g)) && event.target.value.substring(0,2) <13){
            this.setState({
                valid: event.target.value.replace(/[/]/g, "")

            });
        }
    };

        space = (x) => {
            var arr=[]
            for (let i=0 ;i <x.length ;i+=4){
                  arr.push(x.slice(i,i+4))
              }
              return arr.join(' ')
 
    };

slach = (x) => {
        var arr1=[]
        for (let i=0 ; i <x.length ; i+=2){
              arr1.push(x.slice(i,i+2))
          }
          return arr1.join('/')

};
    
                    render () {
                        return (
                            <div>
                            <div className="card">

                                <h1>Credit Card</h1>
                                <img className="chip" src={Chip} alt="chip" />
                                <h2> {this.space(this.state.number)}</h2>



                                <div>


                                    <div className="date">
                                        <div>
                                         
                                            <h3>{this.state.name}</h3>
                                        </div>
                                     
                                            
                                            
                                        <div className='moo' >
                                                    <p className='validiti'>VALID THRU {this.slach(this.state.valid)}</p>
                                                     
                                              </div>
    
                                        <div>
                                            <img className="visa" src={Visa} alt="visa" />
                                        </div>

                                    </div>



                                </div>

                                
                               
                            </div>
                                 <div className="inputvalue">
                                 <input
                                     className="input"
                                     type="text"
                                     placeholder="Card Number"
                                     value={this.space(this.state.number)}
                                     onChange={this.handleChangeNumber} />

                                 <input
                                     className="input"
                                     type="text"
                                     placeholder="Name"
                                     value={this.state.name}
                                     onChange={this.handleChangeName}/>

                                 <input
                                     className="input"
                                     type="text"
                                     placeholder="Valid Date"
                                     value={this.slach(this.state.valid)}
                                     onChange={this.handleChangeValid}/>
                             </div>
                             </div>
                        )
                    }
                }


            