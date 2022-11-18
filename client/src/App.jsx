import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <div>
        <img
          src="https://res.cloudinary.com/proyectofinalhenry/image/upload/v1668726923/Voice%20Cloning/Pngtree_modern_sound_wave_equalizer_colorful_7648479_aqvhq8.png"
          className="logo react"
          alt="React logo"
        />
      </div>
      <h1>Voice Cloning</h1>
      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <div className="card">
          <LoginButton />
        </div>
      )}
    </div>
  );
}

export default App;
