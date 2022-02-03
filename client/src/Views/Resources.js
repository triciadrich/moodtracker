import ResourceList from "../Components/ResourceList";
import Nav from "../Components/Nav";

const Resources = (props) => {

    const { loggedIn, setLoggedIn } = props;

    return (
        <div>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}  />
            <ResourceList />
        </div>
    )
}

export default Resources;