import SmallCard from './SmallCard';

const SelectedPlayers = ({ pickedPlayers, removePickedPlayer }) => {
  return (
    <div className='flex flex-col gap-4'>
      {pickedPlayers.map((singlePlayer) => (
        <SmallCard
          singlePlayer={singlePlayer}
          key={singlePlayer.id}
          removePickedPlayer={removePickedPlayer}
        ></SmallCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
