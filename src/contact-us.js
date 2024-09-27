import './contact-us.css';

export default function ContactUs () {
    return (
        <div>
            <img src='underwater-panorama.jpg' className='header-image'/>
            <h2 className='page-header'>Have Questions? We Have Answers!</h2>
            <form className='contact-us'>
                <div className='contact-us-item'>
                    <label for='name'>Name</label>
                    <input id='name' type='text' />
                </div>
                <div className='contact-us-item'>
                    <label for='email'>Email Address</label>
                    <input id='email' type='text' />
                </div>
                <div className='contact-us-item'>
                    <label for='phone'>Phone Number</label>
                    <input id='phone' type='text' />
                </div>
                <div className='contact-us-item'>
                    <label for='question'>How can we help you?</label>
                    <textarea id='question' type='text' />
                </div>
            </form>
        </div>
    )
}