import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
    return (
        <div>
            <img src='island-panorama.jpg' className="header-image"/>
            <div className='about-us'>
                <h2>
                    About the Island
                </h2>
                <p>
                    Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, 
                    the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, 
                    and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. 
                    Until a recent increase in tourism, most the Tanitian economy was dominated by fishing or agriculture.
                </p>
            </div>
            <hr className='pagebreak'/>
            <div className='home-accommodations'>
                <h2>
                    And how does one get to this paradise?
                </h2>
                <Link to={'/accommodations'}>
                    Find out how to book your trip, now!
                </Link>
            </div>
            <div className='featured'>
                <div className='featured-section'>
                    <div className='featured-header'>
                        <h2>Recent News</h2>
                    </div>
                    <div className='featured-content'>
                        <div className='featured-item'>
                            <h2>Dancing Fever has Struck!</h2>
                            <div>
                                With the opening of Club Taniti, a new dance club in Merriton Landing, many young
                                Tanitians and Tourists a like have found a place to get their moves out.
                            </div>
                        </div>
                        <div className='featured-item'>
                            <h2>Beware of Shark!</h2>
                            <div>
                                Golden beach is closed down for the next 2 weeks (9/22 - 10/5) after several shark
                                sightings by beachgoers. No one was harmed, but out of an abundance of caution beachgoers
                                will be directed to the other beaches in the area.
                            </div>
                        </div>
                        <div className='featured-item'>
                            <h2>Acrophobia</h2>
                                A local Tanitian man became the first to climb up the sheer face of the Tanitian
                                Volcano without assistance. The man had dreamed of this feat for many years.
                            <div>
                                
                            </div>
                        </div>
                        <div className='featured-item'>
                            <h2>Major upset at surfing competition</h2>
                            <div>
                                Peter Gabriel, Calgary native, shocked everyone at the annual Tanitian surfing
                                competition by becoming the first non-native Tanitian to win the competition.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='featured-section'>
                    <div className='featured-header'>
                        <h2>Featured Attractions</h2>
                    </div>
                    <div className='featured-content'>
                        <div className='featured-item'>
                            <h2>Volcano Tours</h2>
                            <div>
                                Take a tour of Taniti's impressive volcano! Tours depart every 2 hours
                                and can be booked through the tour company's website.
                            </div>
                        </div>
                        <div className='featured-item'>
                            <h2>Golf Course</h2>
                            <div>
                                Within the next year a brand new Nine-Hole Golf Course will be opening up
                                right near Merriton Landing.
                            </div>
                        </div>
                        <div className='featured-item'>
                            <h2>Snorkling</h2>
                            <div>
                                There are many amazing sights under the ocean just off the coast of Taniti.
                                Certification courses as well as rental services are available to tourists who want
                                to view the ocean's majesty.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}