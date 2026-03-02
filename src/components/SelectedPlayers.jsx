import SmallCard from './SmallCard';

const SelectedPlayers = ({ pickedPlayers }) => {
  return (
    <div className='flex flex-col gap-4'>
      {pickedPlayers.map((singlePlayer) => (
        <SmallCard
          singlePlayer={singlePlayer}
          key={singlePlayer.id}
        ></SmallCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
