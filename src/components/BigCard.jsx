import user from '../assets/user.png';
import flag from '../assets/flag.png';
const BigCard = ({ singlePlayer }) => {
  const { id, image, name, role, country, battingHand, bowlingHand, price } =
    singlePlayer;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={image} className="w-full h-64 px-6 pt-6" alt="player" />
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
            <button className="btn btn-soft btn-sm">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
