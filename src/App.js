import Header from "./components/Header";
import WhoAmI from "./components/WhoAmI";
import MyExperience from "./components/MyExperience";
import Projects from "./components/Projects";

const App = () => {


    return (
        < >
            <Header />
            <div className="content">
                <WhoAmI />
                
                <MyExperience />

                <Projects />
                
                <skills></skills>
            </div>
        </>
    );
}

export default App;
