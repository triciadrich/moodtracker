import MoodTracker from "../Components/MoodTracker";
import Nav from "../Components/Nav";

const Main = (props) => {

    const { loggedIn, setLoggedIn } = props;

    return (
        <div>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <MoodTracker scope={"add"} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
    )
}

export default Main;