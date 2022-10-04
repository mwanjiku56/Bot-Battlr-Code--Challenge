import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({setMyBotArmy,myBotArmy,setBotData}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {myBotArmy.map(bot=>(
          <BotCard key={bot.id} bot={bot} myBotArmy={myBotArmy} setMyBotArmy={setMyBotArmy} setBotData={setBotData}/>))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
