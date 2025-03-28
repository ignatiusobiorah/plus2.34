// This component is the main header of the website. It contains the Navbar component and the children components.
import Navbar from './Navbar';

const Header = ({children, cart}) => {
    return (
        <div className="header">
          <div className='fixed-nav'>
            <Navbar size={cart.length}/>
          </div>
          <div className='page-content'>
            {children}
          </div>
        </div>
    )
}

export default Header;