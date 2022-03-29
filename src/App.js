import logo from './logo.svg';
import './App.css';
import ProfileSummary from './ProfileSummary';
import AvoidProfessions from './AvoidProfessions';
import InMeeowProfile from './InMeeowProfile';
import AutoReport from './AutoReport';
import ServicesSkills from './ServicesSkills';
import About from './About';
import Interests from './Interests';
import Experience from './Experience';
import Education from './Education';
import profileImg from './imgs/profile-img.png';
import meeowLogo from './imgs/meeow-logo.png';

function App() {
  return (
    <div className="App">


      <header className='counter-nav'>
        <h6 className='timer-title'>the next Meeow starts in</h6>
        <h1 className='timer-countdown'>23:54</h1>
        <button className='book-meeow-btn button'>book this Meeow</button>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input className='search' type='text' placeholder='Search here'></input>
        <a href='' className='notifications'>
          <i class="fa-solid fa-bell"></i>
          notifications
        </a>
        <a href=''>
          <img src={profileImg} className='nav-profile-img'></img>
        </a>
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


      <main>
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
