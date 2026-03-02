import { use } from 'react';
import BigCard from './BigCard';

const AvailablePlayers = ({ playersPromise, balance, setBalance, pickedPlayers, setPickedPlayers }) => {
  //   console.log(playersPromise);
  const playersData = use(playersPromise);
  //   console.log(playersData);
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {playersData.map((singlePlayer) => (
        <BigCard
          singlePlayer={singlePlayer}
          key={singlePlayer.id}
          balance={balance}
          setBalance={setBalance}
          pickedPlayers={pickedPlayers}
          setPickedPlayers={setPickedPlayers}
        ></BigCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
