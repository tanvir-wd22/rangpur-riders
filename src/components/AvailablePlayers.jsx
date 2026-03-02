import { use } from 'react';

const AvailablePlayers = ({ playersPromise }) => {
//   console.log(playersPromise);
  const playersData = use(playersPromise);
  console.log(playersData);
  return <div>AvailablePlayers</div>;
};

export default AvailablePlayers;
