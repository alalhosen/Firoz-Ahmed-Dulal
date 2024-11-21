import BannerBlood from "./BannerBlood";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./header";

const Home = () => {
    return (
        <>
            <div className="w-[615px]">
                <Header />
                <Body />
                <Footer />
            </div>
            <BannerBlood/>
        </>
    );
};

export default Home;