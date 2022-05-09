import Info from "../body/info/Info";
import Introduce from "../body/introduce/Introduce";
import Banner from "../header/banner/Banner";

function Home(){
    return(
        <>
            <Banner />
            <Introduce />
            <Info />
        </>
    )
}

export default Home;