import user from '../assets/user.png';
import flag from '../assets/flag.png';
import { useState } from 'react';
import { toast } from 'react-toastify';

const BigCard = ({
  singlePlayer,
  setBalance,
  balance,
  pickedPlayers,
  setPickedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const { image, name, role, country, battingHand, bowlingHand, price } =
    singlePlayer;

  const handlePlayerClick = (singlePlayer) => {
    if (balance < singlePlayer.price) {
      toast.error('Not enough coins');
      return;
    } else {
      toast.success('player picked successfully');
    }
    setIsSelected(true);
    setBalance(balance - singlePlayer.price);
    setPickedPlayers([...pickedPlayers, singlePlayer]);
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src={image}
            className="w-full h-64 object-cover px-6 pt-6"
            alt="player"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-2">
            <img src={user} className="w-4" />
            <h2 className="card-title">{name}</h2>
          </div>
          <div className="flex justify-between border-b-2 border-gray-300 pb-2">
            <div className="flex items-center gap-2">
              <img src={flag} className="w-3" />
              <span>{country}</span>
            </div>
            <button>{role}</button>
          </div>
          <div className="flex items-center justify-between">
            <span>{battingHand}</span>
            <span>{bowlingHand}</span>
          </div>
          <div className="card-actions items-center justify-between">
            <p>Price : {price} $</p>
            <button
              onClick={() => handlePlayerClick(singlePlayer)}
              disabled={isSelected === true}
              className="btn btn-soft btn-sm"
            >
              {isSelected === true ? 'Selected Player' : 'Choose Player'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
