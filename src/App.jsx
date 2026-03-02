import { Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import AvailablePlayers from './components/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers';
import Loading from './components/Loading';
import Tabs from './components/Tabs';
import { toast } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch('/fakeData.json');
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const [toggleTab, setToggleTab] = useState(true);
  const [balance, setBalance] = useState(3333333);
  const [pickedPlayers, setPickedPlayers] = useState([]);
  // console.log(pickedPlayers);
  // console.log(pickedPlayers.length);
  const removePickedPlayer = (singlePlayer) => {
    // console.log(singlePlayer);
    const remainingPickedPlayer = pickedPlayers.filter(
      (onePlayer) => onePlayer.id !== singlePlayer.id
    );
    setPickedPlayers(remainingPickedPlayer);
    setBalance(balance + singlePlayer.price);
    toast.warning('player removed done');
  };

  return (
    <>
      <nav className="mb-6">
        <Navbar balance={balance}></Navbar>
      </nav>

      <main className="w-11/12 mx-auto">
        <section className="mb-6">
          <Tabs
            toggleTab={toggleTab}
            setToggleTab={setToggleTab}
            pickedPlayers={pickedPlayers}
          ></Tabs>
        </section>

        <section className="mb-6">
          {toggleTab === true ? (
            <Suspense fallback={<Loading />}>
              <AvailablePlayers
                playersPromise={playersPromise}
                balance={balance}
                setBalance={setBalance}
                pickedPlayers={pickedPlayers}
                setPickedPlayers={setPickedPlayers}
              ></AvailablePlayers>
            </Suspense>
          ) : (
            <SelectedPlayers
              pickedPlayers={pickedPlayers}
              removePickedPlayer={removePickedPlayer}
            ></SelectedPlayers>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
