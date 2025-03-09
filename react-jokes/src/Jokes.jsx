import { useEffect } from "react";
import { useState } from "react";
import  "./jokes.css"
export default function Joker(){
    let [joke,setJoke]=useState({});

     const URL="https://official-joke-api.appspot.com/random_joke";
        // const URL="https://v2.jokeapi.dev/joke/Any?lang=kn";
     const getNewJoke=async()=>{
        let respose=await fetch(URL);
        let jsonResponse=await respose.json();
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
        };

        useEffect(()=>{
            async function getFirstJoke(){
            let respose=await fetch(URL);
            let jsonResponse=await respose.json();
            console.log(jsonResponse);
            setJoke({
                setup:jsonResponse.setup,punchline:jsonResponse.punchline
            });
        } 
        getFirstJoke();
    } ,[]);
    return(<>
        <div className="joke">
            <h1>JOKES</h1>
            <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <br></br> <br></br> 
        </div>
        
        <button onClick={getNewJoke}>New  JOKE</button>
    
        </>
    )
     }
