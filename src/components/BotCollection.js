import React from "react";
import BotCard from "./BotCard";

function BotCollection({allBots}) {

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
