import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import KnowMoreHome from "../components/KnowMoreHome";
import Footer from "../components/Footer";
import OverviewHome from "../components/OverviewHome";

function Home() {
    return (
        <div>
            <Header />
            <HeroHome />
            <KnowMoreHome />
            <OverviewHome />
            <Footer />
        </div>
    );
}

export default Home;