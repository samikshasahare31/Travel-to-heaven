import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ScrollToTop from "./Components/NavBar/ScrollToTop";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Dubai from "./Pages/International/Dubai/Dubai";
import Bali from "./Pages/International/Bali/Bali";
import BaliDetails from "./Pages/International/Bali/DetailsPage/BaliDetails";
import Darjeeling from "./Pages/India/Darjeeling/Darjeeling";
import DarjeelingDetailsPage from "./Pages/India/Darjeeling/DarjeelingDetails/DarjeelingDetailsPage";
import Malaysia from "./Pages/International/Malaysia/Malaysia";
import MalaysiaDetailsPage from "./Pages/International/Malaysia/MalaysiaDetails/MalaysiaDetailsPage";
import Paragliding from "./Pages/Activities/Paragliding/Paragliding";
import ParaglidingDetails from "./Pages/Activities/Paragliding/ParaglidingDetails/ParaglidingDetails";
import RiverRafting from "./Pages/Activities/RiverRafting/RiverRafting";
import Hiking from "./Pages/Activities/Hiking/Hiking";
import Termpage from "./Components/Footer/FooterLink/Termpage";
import DocumentVisa from "./Components/Footer/FooterLink/DocumentVisa";
import PrivacyPolicy from "./Components/Footer/FooterLink/PrivacyPolicy";
import Footer from "./Components/Footer/Footer";
import Kashmir from "./Pages/India/Kashmir/Kashmir";
import Ladakh from "./Pages/India/Ladakh/Ladakh";
import Review from "./Pages/Review/Review";
import AndamanTour from "./Pages/India/AndamanTour/AndamanTour";
import Goa from "./Pages/India/Goa/Goa";
import Sikkim from "./Pages/India/Sikkim/Sikkim";
import SikkimDetails from "./Pages/India/Sikkim/SikkimDetails/SikkimDetails";

import KasolDetails from "./Pages/India/Himachal/Kasol/Kasoldetails";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Thailand from "./Pages/International/Thailand/Thailand";
import ThailandDetailsPage from "./Pages/International/Thailand/ThailandDetails/ThailandDetailsPage";
import Singapore from "./Pages/International/Singapore/Singapore";
import SingaporeDetails from "./Pages/International/Singapore/DetailsPage/SingaporeDetails";
import Maldives from "./Pages/International/Maldives/Maldives";
import MaldivesDetails from "./Pages/International/Maldives/DetailsPage/MaldivesDetails";
import Ooty from "./Pages/India/TamilNadu/Ooty/Ooty";
import OotyDetails from "./Pages/India/TamilNadu/Ooty/OotyDetails/OotyDetails";
import Naintal from "./Pages/India/Uttarakhand/Nainitaldata/Naintal";
import Kodaikanal from "./Pages/India/TamilNadu/Kodaikanal/Kodaikanal";
import KodaikanalDetails from "./Pages/India/TamilNadu/Kodaikanal/KodaikanalDetails/KodaikanalDetails";
import Munnar from "./Pages/India/Kerala/Munnar";
import Rishikesh from "./Pages/India/Uttarakhand/Nainitaldata/Rishikesh/Rishikesh";
import RishikeshDetailsPage from "./Pages/India/Uttarakhand/Nainitaldata/Rishikesh/RishikeshDetails/RishikeshDetailsPage";
import RiverRaftingDetails from "./Pages/Activities/RiverRafting/RiDetails/RiDetails";
import HikingDetails from "./Pages/Activities/Hiking/DetailsPage/HikingDetails";
import DubaiDetails from "./Pages/International/Dubai/DetailsPage/DubaiDetails";
import Detailsandaman from "./Pages/India/AndamanTour/DetailsPage/Detailsandaman";
import DetailsKashmir from "./Pages/India/Kashmir/DetailsPage/DetailsKashmir";
import NainitalDetails from "./Pages/India/Uttarakhand/Nainitaldata/NainitalDetails/NainitalDetails";
import LadakhDetails from "./Pages/India/Ladakh/LadakhDetails/LadakhDetails";
import GoaDetails from "./Pages/India/Goa/Goadetails/Goadetails";
import MunnarDetailsPage from "./Pages/India/Kerala/KeralaDetails/MunnarDetailsPage";
import India from "./Pages/India/India";
import International from "./Pages/International/International";
import ActivitiesMain from "./Pages/Activities/ActivitiesMain/ActivitiesMain";
import Kasol from "./Pages/India/Himachal/Kasol";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/india" element={<India />} />
          {/* <Route path="/admin" element={<AdminPanel />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/international" element={<International />} />
          <Route path="/international/dubai" element={<Dubai />} />
          <Route path="/international/malaysia" element={<Malaysia />} />
          <Route
            path="/international/malaysia/trip/:id"
            element={<MalaysiaDetailsPage />}
          />
          <Route path="/international/maldives" element={<Maldives />} />
          <Route path="/international/bali" element={<Bali />} />
          <Route
            path="/international/bali/trip/:id"
            element={<BaliDetails />}
          />
          <Route path="/international/thailand" element={<Thailand />} />
          <Route
            path="/international/thailand/trip/:id"
            element={<ThailandDetailsPage />}
          />
          <Route path="/international/singapore" element={<Singapore />} />
          <Route
            path="/international/singapore/trip/:id"
            element={<SingaporeDetails />}
          />
          <Route
            path="/international/dubai/trip/:id"
            element={<DubaiDetails />}
          />
          <Route
            path="/international/maldives/trip/:id"
            element={<MaldivesDetails />}
          />
          <Route path="/activities" element={< ActivitiesMain />} />
          <Route
            path="/andaman-tour/andmatour/trip/:id"
            element={<Detailsandaman />}
          />
          <Route
            path="/andaman-tour/watercontainer/trip/:id"
            element={<Detailsandaman />}
          />
          <Route path="/india/kashmir/trip/:id" element={<DetailsKashmir />} />
          <Route path="/andaman-tour" element={<AndamanTour />} />
          <Route path="/india/goa" element={<Goa />} />
          <Route path="/india/goa/trip/:id" element={<GoaDetails />} />
          <Route path="/india/sikkim" element={<Sikkim />} />
          <Route path="/india/sikkim/trip/:id" element={<SikkimDetails />} />
          <Route path="/india/darjeeling" element={<Darjeeling />} />
          <Route
            path="/india/darjeeling/trip/:id"
            element={<DarjeelingDetailsPage />}
          />
          <Route path="/india/kashmir" element={<Kashmir />} />
          <Route path="/india/ladakh" element={<Ladakh />} />
          <Route path="/india/Ladakh/trip/:id" element={<LadakhDetails />} />
          <Route path="/india/tamilnadu/ooty" element={<Ooty />} />
          <Route
            path="/india/tamilnadu/ooty/trip/:id"
            element={<OotyDetails />}
          />
          <Route path="/india/tamilnadu/Kodaikanal" element={<Kodaikanal />} />
          <Route
            path="/india/tamilnadu/Kodaikanal/trip/:id"
            element={<KodaikanalDetails />}
          />
          <Route path="/munnar" element={<Munnar />} />
          <Route path="/munnar/trip/:id" element={<MunnarDetailsPage />} />
          <Route
            path="/munnar/munnarsightseeing/trip/:id"
            element={<MunnarDetailsPage />}
          />
          <Route
            path="/munnar/munnarothertrips/trip/:id"
            element={<MunnarDetailsPage />}
          />

          <Route path="/india/uttarakhand/nainital" element={<Naintal />} />
          <Route
            path="/india/uttarakhand/nainital/trip/:id"
            element={<NainitalDetails />}
          />
          <Route path="/india/uttarakhand/rishikesh" element={<Rishikesh />} />
          <Route
            path="/india/uttarakhand/rishikesh/trip/:id"
            element={<RishikeshDetailsPage />}
          />

          <Route path="/activities/paragliding" element={<Paragliding />} />
          <Route
            path="/activities/paragliding/trip/:id"
            element={<ParaglidingDetails />}
          />

          <Route path="/activities/riverrafting" element={<RiverRafting />} />
          <Route
            path="/activities/riverrafting/trip/:id"
            element={<RiverRaftingDetails />}
          />
          <Route path="/activities/hiking" element={<Hiking />} />
          <Route
            path="/activities/hiking/trip/:id"
            element={<HikingDetails />}
          />
          <Route path="/Termpage" element={<Termpage />} />
          <Route path="/DocumentVisa" element={<DocumentVisa />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/india/kasol" element={<Kasol />} />

          <Route path="/india/kasol/trip/:id" element={<KasolDetails />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
