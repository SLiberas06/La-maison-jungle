import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

function Banner(){
    return (
        <div className='lmj-banner'>
            <div className = 'lmj-banner-row'>
                <img src={logo} alt='La maison jungle' className='lmg-logo'/>
                <h1>La maison jungle</h1>
            </div>
            <Recommendation/>
        </div>
    )        
}

export default Banner