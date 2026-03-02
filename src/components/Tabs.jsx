const Tabs = ({ toggleTab, setToggleTab, pickedPlayers }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">
        {toggleTab === true ? 'Available Players' : 'Selected Players'}
      </h1>
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
          Selected({pickedPlayers.length})
        </button>
      </div>
    </div>
  );
};

export default Tabs;
