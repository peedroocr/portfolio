import Header from "./components/Header";
import WhoAmI from "./components/WhoAmI";
import MyExperience from "./components/MyExperience";
import Projects from "./components/Projects";
import Footer from "./components/Footer"

const App = () => {


    return (
        < >
            <Header />
            <div className="content">
                <WhoAmI />

                <MyExperience />

                <Projects />

                <Footer />
            </div>
        </>
    );
}

export default App;
