import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './home';
import Accommodations from './accommodations';
import Attractions from './attractions';
import FAQ from './faq';
import ContactUs from './contact-us';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {path: "/", element: <Home/>},
        {path: "/accommodations", element: <Accommodations/>},
        {path: '/attractions', element: <Attractions/>},
        {path: '/faq', element: <FAQ/>},
        {path: '/contact-us', element: <ContactUs/>}
      ]
    }
]);

export default router;