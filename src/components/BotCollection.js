import React from "react";
import BotCard from "./BotCard";

function BotCollection({allBots,myBotArmy,setBotArmy}) {

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {allBots.map(bot=>(
         <BotCard key={bot.id} bot={bot} myBotArmy={myBotArmy} setMyBotArmy={setBotArmy}/>))}
        Collection of all bots
      </div>
    </div>
  );

}
export default BotCollection;
