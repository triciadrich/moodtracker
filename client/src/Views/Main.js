import MoodTracker from "../Components/MoodTracker";
import Nav from "../Components/Nav";

const Main = () => {

    return (
        <div>
            <Nav />
            <MoodTracker scope={"add"} />
        </div>
    )
}

export default Main;