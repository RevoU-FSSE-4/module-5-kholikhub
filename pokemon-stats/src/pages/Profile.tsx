import FooterComponent from "../Components/FooterComponent";
import StatsComponent from "../Components/StatsComponent";
import Navigation from "../Components/NavigationPrivate";
import useAuth from "@/Middleware/Auth";



  const Profile= () => {
    useAuth();
    return (
        <>
          <Navigation/>
          <div>
            <StatsComponent />
          </div>
          <div>
            <FooterComponent/>
          </div>
        </>

    );
  };
export default Profile;