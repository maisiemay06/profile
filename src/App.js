import './styles/App.css';
import ProfileSummary from './components/ProfileSummary';
import AvoidProfessions from './components/AvoidProfessions';
import InMeeowProfile from './components/InMeeowProfile';
import AutoReport from './components/AutoReport';
import ServicesSkills from './components/ServicesSkills';
import About from './components/About';
import Interests from './components/Interests';
import Experience from './components/Experience';
import Education from './components/Education';
import profileImg from './imgs/profile-img.png';
import meeowLogo from './imgs/meeow-logo.png';
import TimerNav from './components/TimerNav';
import SidebarNav from './components/SidebarNav';

function App() {

  return (
    <div className="App">
      <TimerNav/>
      <SidebarNav/>


      <main className='container main-container'>
        <ProfileSummary />
        <AvoidProfessions />
        <InMeeowProfile />
        <AutoReport />
        <ServicesSkills />
        <About />
        <Interests />
        <Experience /> 
        <Education />
      </main>


    </div>
  );
}

export default App;
