import { Collapse } from "./collapse";
import './accommodations.css';

export default function Accommodations() {
    return(
        <div>
            <img src='underwater-panorama.jpg' className='header-image'/>
            <h2 className='page-header'>Accommodations</h2>
            <Collapse isExpanded={false} title={'Lodging'}>
                Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. 
                There are many small, family-owned hotels and a growing number of bed and breakfasts. 
                All types of lodging are strictly regulated and regularly inspected by the Tanitian government.
            </Collapse>
            <Collapse isExpanded={false} title={'Dining'}>
                Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.
                Alongside the restaurants, Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day. 
            </Collapse>
            <Collapse isExpanded={false} title={'Getting Around the Island'}>
                Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island. 
                Taxis are available in Taniti City, and rental cars can be rented from a local rental agency near the airport. 
                Bikes and helmets are available to rent from several vendors (helmets are required by law). 
                Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot.
            </Collapse>
            <Collapse isExpanded={false} title={'Getting to the Island'}>
                Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. 
                Taniti is served by a small airport that can accommodate small jets and propeller planes. 
                Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years. 
            </Collapse>
        </div>
    );
}