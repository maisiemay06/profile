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

function App() {

  return (
    <div className="App">


      <header className='counter-nav'>
        <h6 className='timer-title'>the next Meeow starts in</h6>
        <h1 className='timer-countdown'>23:54</h1>
        <button className='book-meeow-btn button'>book this Meeow</button>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className='search' type='text' placeholder='Search here'></input>
        <div className="drop-down-hover" >
          <a href='' className='notifications'>
            <i className="fa-solid fa-bell"></i>
            notifications
          </a>
          <a href=''>
            <img src={profileImg} className='nav-profile-img'></img>
          </a>
        </div>
        <div className="drop-down-nav">
          <ul>
            <li>Account</li>
            <li>Profile</li>
            <li>Meeow History</li>
            <li>Join referral scheme</li>
            <li>Sign into referral scheme</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
      </div>
      </header>



      <nav className='sidebar-nav'>
        <img src={meeowLogo} className='logo'></img>
        <ul className='nav-list'>
          <li>Calendar</li>
          <li>Messages</li>
          <li>Connections</li>
          <li>Meeowniversity</li>
        </ul>
        <div className="sidebar-footer">
          <button className="how-to-btn button">how to Meeow</button>
          <hr></hr>
          <ul className='nav-list'> 
            <li>Terms & Conditions</li>
            <li>Privacy & Data Policies</li>
            <li>Contact Support</li>
          </ul>
        </div>
      </nav>


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
