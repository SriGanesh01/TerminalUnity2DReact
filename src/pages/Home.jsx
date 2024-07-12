import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import KnowMoreHome from "../components/KnowMoreHome";
import OverviewHome from "../components/OverviewHome";
import ScreenshotHero from "../components/ScreenshotHero";
import DevelopementHome from "../components/DevelopementHome";
import ByPageHome from "../components/ByPageHome";
import FAQPageHome from "../components/FAQPageHome";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Header />
            <HeroHome />
            <KnowMoreHome />
            <OverviewHome /> 
            <ScreenshotHero />
            <DevelopementHome />
            <ByPageHome />
            <FAQPageHome />
            <Footer />
        </div>
    );
}

export default Home;