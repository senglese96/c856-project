import './attractions.css';

export default function Attractions() {
    return(
        <div>
            <img src='underwater-panorama.jpg' className='header-image'/>
            <h2 className='page-header'>Attractions</h2>
            <div className='attractions'>
                <div className='attractions-section'>
                    <h2>Snorkling</h2>
                    <div className='attractions-content'>
                        <img src='snorkling-person.jpg' className='attraction-image'/>
                        <p>
                            Off the coast of Taniti's many beaches are many fantastic snorkling spots
                            Tourists can schedule certification sessions beforehand with several
                            different companies. There are many reefs and all sorts of ocean
                            fauna to see.
                        </p>
                    </div>
                </div>
                <div className='attractions-section'>
                    <h2>Beaches</h2>
                    <div className='attractions-content'>
                        <img src='beach-photo.jpg' className='attraction-image'/>
                        <p>
                            Taniti features several beautiful sandy beaches, all perfect for
                            viewing the clear, gorgeous Tanitian ocean. Tourists should be
                            prepared to navigate crowds during peak hours and should always 
                            know the timing of high tide if intending to swim.
                        </p>
                    </div>
                </div>
                <div className='attractions-section'>
                    <h2>Volcano Hike</h2>
                    <div className='attractions-content'>
                        <img src='volcano-photo.jpg' className='attraction-image'/>
                        <p>
                            Every two hours there are guided tours of the Volcano at the center 
                            of the Island. The hike offers a tremendous view of the island rainforests
                            along with a wonderful view of the sunset. Tours can be reserved in advance 
                            at the tour company's official website.
                        </p>
                    </div>
                </div>
                <div className='attractions-section'>
                    <h2>Rainforest Exploration</h2>
                    <div className='attractions-content'>
                        <img src='rainforest-photo.jpg' className='attraction-image'/>
                        <p>
                            The lush raiforests of Taniti offer plenty of excitement for any intrepid
                            tourists. There are many hiking trails through the forest, along
                            with a few popular ziplinging spots. Tourists looking to hike through the
                            forest should prepare plenty of bug repellant. 
                        </p>
                    </div>
                </div>
                <div className='attractions-section'>
                    <h2>Golf</h2>
                    <div className='attractions-content'>
                        <img src='palm-trees-golf.jpg' className='attraction-image'/>
                        <p>
                            While still under construction, within the next year a Nine-hole Golf Course
                            will be opening up right near Merriton Landing. Given the climate, 
                            the course will be operational all year long.
                        </p>
                    </div>
                </div>
                <div className='attractions-section'>
                    <h2>And Much More!</h2>
                    <div className='attractions-content'>
                        <img src='paddleboard-photo.jpg' className='attraction-image'/>
                        <p>
                            Other activities available include visiting a local history museum, going on chartered fishing tours, 
                            zip-lining in the rainforest, visiting several pubs, including a microbrewery, 
                            dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, 
                            visiting art galleries, and bowling. Many of these and more can be found
                            at Merriton Landing!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}