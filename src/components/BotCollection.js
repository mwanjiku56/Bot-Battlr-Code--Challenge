import React, { useState,useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection() {

  const [allBots,setAllBots]=useState([])


  useEffect(() => {
    fetch( "http://localhost:8002/bots")
      .then((r) => r.json())
      .then((allBots) => setAllBots(allBots));
  }, []);



  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {allBots.map(bot=>(
         <BotCard key={bot.id} bot={bot} />))}
        Collection of all bots
      </div>
    </div>
  );

}
export default BotCollection;
