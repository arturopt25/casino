import React, {useState } from 'react'
import casilogo from '../assets/img/logobg.png';
import "./Header.css";
import Avatar from '@material-ui/core/Avatar';
import descarga from '../assets/img/descarga.jfif';
//import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'



const Header = () => {

    const [primerSlot, setPrimerSlot] = useState();
    const [segundoSlot, setSegundoSlot] = useState();
    const [tercerSlot, setTercerSlot] = useState();
    
    




  

    
    let getRandom = () => {
        
        return Math.floor(Math.random() * 9) + 1;
    } 

   
   
   
   
   
   
   
   const [balance, setBalance] = useState(99.99);
   
   
   
   let getNumbers = () =>{
       setPrimerSlot(getRandom());
       setSegundoSlot(getRandom());
       setTercerSlot(getRandom());
   }
   
   let getBalance = () =>{
       
        
        
        let sum= 0;
        let cont= 0;
        
        if (primerSlot === segundoSlot && segundoSlot === tercerSlot){
            cont = cont + 5;
        } else if(primerSlot === segundoSlot && segundoSlot !== tercerSlot){
                cont = cont +0.5;
            }else if(primerSlot === tercerSlot && tercerSlot !== segundoSlot){
                cont = cont +0.5;
                
            }else if(segundoSlot === tercerSlot && tercerSlot !== primerSlot){
                cont = cont +0.5;
            }else if(primerSlot !== segundoSlot && segundoSlot !== tercerSlot) {
                cont = cont - 0.5;
            }
            
            return cont + sum

            
            
            
        
        
    }
    
    




    return (
        <div className="header">
            
            

          


                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <img src={casilogo} alt="logo"/>
                                
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto titulo">
                                        <h1 >Casino Royale</h1>
                                     
                                   
                                    
                                    </Nav>
                                    <Form inline>
                                    
                                    
                                    <img className="avatar" src={descarga} alt="avatar"/>
                                    <div className="user">

                                    <h2>Su Balance es:</h2>
                                    <h3 > ${ balance } </h3>
                                    </div>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>


                            <div className="slot">

                                    <div className="casilla"> {primerSlot ? primerSlot: '7'} </div>
                                    <div className="casilla"> {segundoSlot ? segundoSlot: '7'} </div>
                                    <div className="casilla"> {tercerSlot ? tercerSlot: '7'}</div>
                                    <button className="btn btn-info boton" 
                                    onClick={()=>setBalance(balance + getBalance(getNumbers()))}  
                                    >
                                         Jugar
                                    </button>
                                    

                            </div>

            
            
            
           
        </div>
    )



}
export default Header
