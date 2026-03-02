import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="bg-base-300">
      <div className="navbar w-11/12 mx-auto">
        <div className="flex-1">
          <img src={logo} className='w-12'></img>
        </div>
        <div className="flex-none">
          <button className="btn btn-success">
            <span>0</span>
            <span>Coins</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
