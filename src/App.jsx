import { Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import AvailablePlayers from './components/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers';
import Loading from './components/Loading';

const fetchPlayers = async () => {
  const res = await fetch('/fakeData.json');
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const [toggleTab, setToggleTab] = useState(true);
  const [balance, setBalance] = useState(1111111);

  return (
    <>
      <nav>
        <Navbar balance={balance}></Navbar>
      </nav>

      <main className="w-11/12 mx-auto">
        <section className="flex justify-between items-center my-6">
          <h1 className="text-2xl font-semibold">Available Players</h1>
          <div className="flex">
            <button
              onClick={() => setToggleTab(true)}
              className={` px-4 py-2 border-2 border-gray-400 border-r-0 rounded-l-2xl ${toggleTab === true ? 'bg-green-200' : 'bg-white'} `}
            >
              Available
            </button>
            <button
              onClick={() => setToggleTab(false)}
              className={` px-4 py-2 border-2 border-gray-400 border-l-0 rounded-r-2xl ${toggleTab === false ? 'bg-green-200' : 'bg-white'}`}
            >
              Selected
            </button>
          </div>
        </section>

        <section>
          {toggleTab === true ? (
            <Suspense fallback={<Loading />}>
              <AvailablePlayers
                playersPromise={playersPromise}
                balance={balance}
                setBalance={setBalance}
              ></AvailablePlayers>
            </Suspense>
          ) : (
            <SelectedPlayers></SelectedPlayers>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
