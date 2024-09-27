import './faq.css';
import { Collapse } from './collapse';

export default function FAQ () {
    return (
        <div className='faq'>
            <img src='underwater-panorama.jpg' className='header-image'/>
            <h2>Answers to some of the most common questions</h2>
            <div className='faq-content'>
                <Collapse title={'What is the primary currency on Taniti?'}>
                    Taniti's primary currency is the US Dollar, however many businesses on the island will accept Euros
                    or the Yen. Many banks have currency exchanges, and many business also accept major credit cards.
                </Collapse>
                <Collapse title={'How much english is spoken on Taniti?'}>
                    Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.
                </Collapse>
                <Collapse title={'What is the Island\'s policy regarding alcohol?'}>
                    The drinking age on Taniti is 18 and the drinking age is not strictly enforced. 
                    Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m. 
                </Collapse>
                <Collapse title={'How safe is Taniti?'}>
                    Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes. 
                </Collapse>
                <Collapse title={'Are there medical services on the island?'}>
                    There is one hospital and several clinics. The hospital has many multilingual employees.
                </Collapse>
                <Collapse title={'What kind of outlets does Taniti use'}>
                    Power outlets are 120 volts (the same as in the United States). 
                </Collapse>
            </div>
        </div>
    )
}