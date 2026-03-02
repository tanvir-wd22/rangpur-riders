import { MdDeleteForever } from 'react-icons/md';

const SmallCard = ({ singlePlayer }) => {
  // console.log(singlePlayer);
  const { image, name, role } = singlePlayer;
  return (
    <div>
      <div className="bg-base-300 py-4 px-6 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-4">
            <img src={image} className="w-20 rounded-lg" />
            <div className="">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p>{role}</p>
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-error">
            <MdDeleteForever size={25}></MdDeleteForever>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
