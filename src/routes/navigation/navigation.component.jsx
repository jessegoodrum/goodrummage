import { Outlet, Link } from 'react-router-dom'
import {ReactComponent as Asset} from '../../assets/Asset.svg'
import './navigation.styles.scss'

const Navigation = () => {
    return(
        <>
            <div className='navigation'>

                <Link className='logo-container' to='/'>
                    <Asset className='logo' />
                </Link>
                
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop' >SHOP</Link>
                    <Link className='nav-link' to='/sign-in' >SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </>
      
    )
  }

  export default Navigation