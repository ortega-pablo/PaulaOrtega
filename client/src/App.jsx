import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Textarea from '@mui/joy/Textarea';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <nav className="nav">
            <Profile />
            <LogoutButton />
          </nav>
          <div className="row">
            <div className="mright">
              <div className="section1">
                <div className="sub">
                  <label>Cargar audio de referencia</label>
                  <Select
                    sx={{ width: 400, marginRight: 5}}
                    color="primary"
                    placeholder="Seleccionar ..."
                    size="sm"
                    variant="outlined"
                  >
                    <Option value="Audio 1">
                    Audio 1
                    </Option>
                    <Option value="Audio 2">
                    Audio 2
                    </Option>
                  </Select>
                </div>

                <div className="sub1">
                <button className="principalButton">Generar vector de incrustaciones</button>
                </div>

                <div className="sub1">
                  <button className="principalButton">Clonar</button>
                </div>
              </div>

              {/* <div className="section1">
                <div className="sub">
                  <label>Use embedding form:</label>
                  <Select
                    sx={{ width: 580, marginRight: 5 }}
                    color="primary"
                    placeholder="select ..."
                    size="sm"
                    variant="outlined"
                  >
                    <Option value="VoxCeleb2/test/aac">
                      VoxCeleb2/test/aac/id01460Y041WRHdcWU/00177.m4a
                    </Option>
                    <Option value="VoxCeleb3/test/bba">
                      VoxCeleb3/test/bba/id01493/Y041WRHdcWU/01365.m4a
                    </Option>
                    <Option value="VoxCeleb5/test/bca">
                      VoxCeleb5/test/bca/id01569/Y041WRHdcWU/01985.m4a
                    </Option>
                    <Option value="VoxCeleb7/test/fgt">
                      VoxCeleb7/test/fgt/id01831/Y041WRHdcWU/02698.m4a
                    </Option>
                  </Select>
                  <div className="buttons">
                    <button>Take generated</button>
                    <button>Record</button>
                    <button>Play</button>
                    <button>Stop</button>
                  </div>
                </div>
              </div>

              <div className="section1">
                <div className="sub1">
                  <label>Encoder</label>
                  <Select
                    sx={{ width: 160, marginRight: 5 }}
                    color="primary"
                    placeholder="select ..."
                    size="sm"
                    variant="outlined"
                  >
                    <Option value="VoxCeleb2/test/aac">
                      VoxCeleb2/test/aac
                    </Option>
                    <Option value="VoxCeleb3/test/bba">
                      VoxCeleb3/test/bba
                    </Option>
                    <Option value="VoxCeleb5/test/bca">
                      VoxCeleb5/test/bca
                    </Option>
                    <Option value="VoxCeleb7/test/fgt">
                      VoxCeleb7/test/fgt
                    </Option>
                  </Select>
                </div>

                <div className="sub1">
                  <label>Synthesizer</label>
                  <Select
                    sx={{ width: 100, marginRight: 5 }}
                    color="neutral"
                    placeholder="select ..."
                    size="sm"
                    variant="outlined"
                  >
                    <Option value="id01460">id01460</Option>
                    <Option value="id01493">id01493</Option>
                    <Option value="id01569">id01569</Option>
                    <Option value="id01831">id01831</Option>
                  </Select>
                </div>

                <div className="sub1">
                  <label>Vocoder</label>
                  <Select
                    sx={{ width: 250, marginRight: 5 }}
                    color="neutral"
                    placeholder="select ..."
                    size="sm"
                    variant="outlined"
                  >
                    <Option value="Y041WRHdcWU/00177.m4a">
                      Y041WRHdcWU/00177.m4a
                    </Option>
                    <Option value="Y041WRHdcWU/01365.m4a">
                      Y041WRHdcWU/01365.m4a
                    </Option>
                    <Option value="Y041WRHdcWU/01985.m4a">
                      Y041WRHdcWU/01985.m4a
                    </Option>
                    <Option value="Y041WRHdcWU/02698.m4a">
                      Y041WRHdcWU/02698.m4a
                    </Option>
                  </Select>
                </div>
              </div> */}
            </div>
            <div>
              <Textarea 
              sx={{minHeight:200, marginBottom: 5}}
              placeholder="Inserte aquí el texto a reproducir…"/>
              <div className="TextoEjemplo">
              <label>Sistema de reproducción de audio</label>
                  <Select
                    sx={{ width: 400, marginBottom: 15 }}
                    color="neutral"
                    placeholder="Seleccionar ..."
                    size="sm"
                    variant="outlined"
                  >
                    <Option value="Sistema integrado">Sistema integrado</Option>
                    <Option value="Auriculares">Auriculares</Option>
                    <Option value="Sistema de sonido externo">Sistema de sonido externo</Option>
                  </Select>
                  <button className="principalButton">Reproducir</button>
              </div>
            </div>
          </div>
          <div className="column">
            <label>Características del audio de referencia</label>
            <img src="https://res.cloudinary.com/proyectofinalhenry/image/upload/v1668783798/Voice%20Cloning/WhatsApp_Image_2022-11-18_at_11.58.27_sa2uzi.jpg" alt="spectrogram" />
          </div>
        </>
      ) : (
        <>
          <div className="principal">
            <img
              src="https://res.cloudinary.com/proyectofinalhenry/image/upload/v1668726923/Voice%20Cloning/Pngtree_modern_sound_wave_equalizer_colorful_7648479_aqvhq8.png"
              className="logo react"
              alt="React logo"
            />
            <h1>Voice Cloning</h1>
            <LoginButton />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
