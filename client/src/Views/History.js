import MoodTrackerLog from "../Components/MoodTrackerLog";
import Nav from "../Components/Nav";

const History = (props) => {

    const { loggedIn, setLoggedIn } = props;

    return (
        <div>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <MoodTrackerLog loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
    )
}

export default History;