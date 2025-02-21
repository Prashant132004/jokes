import Ticket from './Ticket.jsx';
import { useState } from "react";
import "./Lottery.css";
import{genTicket,sum} from "./helper.js";


 export default function Lottery( { n=3,winCondition} ){ 
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning=winCondition(ticket);
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    return(
        <div className="game">
            <h1>lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br></br>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h5>{sum(ticket)}</h5>
            <h3>{isWinning && "Congrtualations you won!" ||"Try again"}</h3>
            <h5>To win this game sum of three number should be equal to 15</h5>
        </div>
    )
};
