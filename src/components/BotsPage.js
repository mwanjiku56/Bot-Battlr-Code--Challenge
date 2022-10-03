import React, {useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


function BotsPage() {
  //start here with your code for step one  
  const [botData,setBotData]=useState([])
  const [myBotArmy,setMyBotArmy]=useState([])


  useEffect(() => {
    fetch( "http://localhost:8002/bots")
      .then((r) => r.json())
      .then((botData) => setBotData(botData));
  }, []);

  return (
    <div>
  <YourBotArmy myBotArmy ={myBotArmy} setMyBotArmy={setMyBotArmy}/>
  <BotCollection allBots={botData} setMyBotArmy={setMyBotArmy} myBotArmy={myBotArmy}/>
    </div>
  )
}

export default BotsPage;
