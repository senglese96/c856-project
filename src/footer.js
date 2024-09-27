import { Link } from 'react-router-dom'
import './footer.css';

export default function Footer () {
    return (
        <div className='footer'>
            <Link to={'/'}>
                home
            </Link>
            /
            <Link to={'/faq'}>
                faq
            </Link>
            /
            <Link to={'/contact-us'}>
                contact us
            </Link>
        </div>
    )
}