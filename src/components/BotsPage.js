import React, {useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


function BotsPage() {
  //start here with your code for step one 
  const [botData,setBotData]=useState([])


  useEffect(() => {
    fetch( "http://localhost:8002/bots")
      .then((r) => r.json())
      .then((botData) => setBotData(botData));
  }, []);

  return (
    <div>
      <YourBotArmy />
      <BotCollection allBots={botData}
      />
    </div>
  )
}

export default BotsPage;
