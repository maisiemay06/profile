import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">


      <header className='counter-nav'>
        <h6 className='timer-title'>the next Meeow starts in</h6>
        <h1 className='timer-countdown'>23:54</h1>
        <button className='book-meeow-btn button'>book this Meeow</button>
        <input className='search' type='text' placeholder='Search here'></input>
        <a href='' className='notifications'>notifications</a>
        <a href=''>
          <img src='' className='nav-profile-img'></img>
        </a>
      </header>


      <nav className='sidebar-nav'>
        <img src='' className='logo'></img>
        <ul className='nav-list'>
          <li>Calendar</li>
          <li>Messages</li>
          <li>Connections</li>
          <li>Meeowniversity</li>
        </ul>
        <button className="how-to-btn button">how to Meeow</button>
        <hr></hr>
        <ul className='nav-list'> 
          <li>Terms & Conditions</li>
          <li>Privacy & Data Policies</li>
          <li>Contact Support</li>
        </ul>
      </nav>


      <main>
        <div className="card container profile-summary">
          <img src="" alt="" className='cover-img row-5'></img>
          <img src="" alt="" className='profile-img'></img>
          <i class="fa-solid fa-pen-to-square edit-btn"></i>
          <div className="summary-info row-6">
            <i class="fa-solid fa-pen-to-square edit-btn"></i>  
            <div className="intro col-6">
              <h2 className="profile-name">Simon Glenn - MEEOWMAN</h2>
              <p className="job-title">Co-Founder at Meeow</p>
              <p className="location">Cleckheaton, England, United Kingdom</p>
              <p className="connections">155 Meeow Connections</p>
            </div>
            <div className="contact col-5">
              <h4 className='summary-title'>Contact info</h4>
              <ul>
                <li> 
                  <img src="" alt="" className='meeow-link-img contact-icon'></img>
                  <a href="https://www.meeow.co/simonglennbrandboy" className="contact-link">https://www.meeow.co/simonglennbrandboy</a>
                  <i class="fa-light fa-window-restore"></i>
                </li>
                <li>
                  <img src="" alt="" className="linkedin-logo-img contact-icon"></img>
                  <a href="https://www.linkedin.com/in/brandboy/" className="contact-link">https://www.linkedin.com/in/brandboy/</a>
                </li>
              </ul>
            </div>
            <div className="exp-edu-summary col-3">
              <ul>
                <li>
                  <img src="" alt="" className='exp-edu-img'></img>
                  <p>Meeow Ltd</p>
                </li>
                <li>
                  <img src="" alt="" className='exp-edu-img'></img>
                  <p>Whitcliffe Mount Comprehensive School</p>
                </li>
              </ul>
            </div>
            <div className="languages col-5">
              <h4 className='summary-title'>Languages</h4>
                <ul>
                  <li>Language 1</li>
                  <li>Language 1</li>
                  <li>Language 1</li>
                </ul>
            </div>
          </div>
        </div>


        <div className="card avoid">
          <i class="fa-solid fa-pen-to-square edit-btn"></i>  
          <div className="avoid-intro">
            <h3 className="smaller-section-title">Professions to avoid x 3</h3>
            <p className="section-descrip">Tell us which professions you'd rather avoid in your Meeows.</p>
          </div>
          <div className="avoid-profession">
            <h3 className="smaller-section-title">Avoid Profession 1</h3>
            <p>Profession 1</p>
          </div>    
          <div className="avoid-profession">
            <h3 className="smaller-section-title">Avoid Profession 2</h3>
            <p>Profession 1</p>
          </div> 
          <div className="avoid-profession">
            <h3 className="smaller-section-title">Avoid Profession 3</h3>
            <p>Profession 1</p>
          </div>
        </div>


        <div className="card in-meeow-profile">
          <i class="fa-solid fa-pen-to-square edit-btn"></i>  
          <h3 className="section-title">In Meeow profile</h3>
          <p className="section-descrip"></p>
          <div className="card in-meeow-about">
            <h3 className="section-title">About</h3>
            <p className="section-descrip">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo quibusdam officiis explicabo ut recusandae! Accusamus nesciunt, tempora quis perferendis non beatae maiores numquam delectus et sequi voluptatem eligendi animi!</p>
          </div>
          <div className="card in-meeow-service-skills">
            <h3 className="section-title">Services/Skills</h3>
            <ul className="services">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
            <ul className="skills">
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </div>
        </div>


        <div className="card auto-report-desc">
          <i class="fa-solid fa-pen-to-square edit-btn"></i>
          <h3 className="section-title">Auto Meeow Report decription</h3>
          <p className="section-descrip">This info will be included whenever anyone posts a Meeow Report to Linkedin about a Meeow you attended.</p>
          <div className="card report-box">
            <h3 className="section-title">What you do</h3>
            <p className="section-descrip">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate, dolore facilis qui maxime ut. Dolor, amet quasi quisquam delectus quia odit vitae explicabo! Cumque quae distinctio voluptates commodi accusantium.</p>
          </div>
          <div className="card report-box">
            <h3 className="section-title">What you're looking for</h3>
            <p className="section-descrip">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate, dolore facilis qui maxime ut. Dolor, amet quasi quisquam delectus quia odit vitae explicabo! Cumque quae distinctio voluptates commodi accusantium.</p>
          </div>
          <input type="checkbox" id='reports'></input>
          <label htmlFor="reports">I would like to be included in Meeow Report posts made by other and myself on Linkedin</label>
        </div>


        <div className="card services-skills">
          <i class="fa-solid fa-pen-to-square edit-btn"></i>
          <div className="services">
            <h3 className="service-title">Services</h3>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
              <li>Service 4</li>
              <li>Service 5</li>
              <li>Service 6</li>
              <li>Service 7</li>
              <li>Service 8</li>
              <li>Service 9</li>
            </ul>
          </div>
          <div className="skills">
            <h3 className="section-title">
              <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                <li>Skill 4</li>
                <li>Skill 5</li>
                <li>Skill 6</li>
                <li>Skill 7</li>
                <li>Skill 8</li>
                <li>Skill 9</li>
              </ul>
            </h3>
          </div>
        </div>


        <div className="card about">
          <i class="fa-solid fa-pen-to-square edit-btn"></i>
          <h3 className="section-title">About</h3>
          <p className="section-descrip">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi error magnam vitae fugit, quos aliquam totam ex tempore commodi autem doloremque deleniti in quidem corporis odio velit officiis! Odio, neque.
            Itaque ipsa recusandae odit. Aut explicabo, sequi dolores molestias eos alias saepe! Cumque minus sed unde, optio deleniti omnis distinctio dolores dolore nobis temporibus accusantium, mollitia et illo veritatis. Necessitatibus.
            Illo sint mollitia a assumenda explicabo consectetur, sapiente voluptate sit esse, repudiandae quia natus, architecto cupiditate. Animi, ut maxime, dignissimos sequi vitae magni, quos officiis nam quo incidunt ex corrupti?
            Libero commodi aut suscipit natus similique harum. Iusto quas ducimus blanditiis animi, magnam repudiandae eius dolorum totam quos molestias suscipit iste, placeat et labore dolor sed sequi voluptatum deserunt hic.
            Minima accusamus quia architecto pariatur, atque omnis doloribus libero, magnam saepe placeat fugiat, quis dicta deleniti illo. Id laboriosam eligendi veritatis, obcaecati blanditiis ab optio quibusdam similique voluptas quidem accusamus.
          </p>
        </div>


        <div className="card interests">
          <i class="fa-solid fa-pen-to-square edit-btn"></i>
          <h3 className="section-title">Interests</h3>
          <ul>
            <li>Interest 1</li>
            <li>Interest 2</li>
            <li>Interest 3</li>
          </ul>
        </div>


        <div className="card experience">
          <i class="fa-solid fa-plus add-btn"></i>
          <h3 className="section-title">Experience</h3>
          <div className="exp-section">
            <i class="fa-solid fa-pen-to-square edit-btn"></i>
            <img src="" alt="" className='exp-img'></img>
            <div className="exp-info">
              <ul>
                <li>Founder</li>
                <li>Meeow Ltd - Full Time</li>
                <li>May 2020 - Present ● 9 mos</li>
                <li>Cleckheaton, England, United Kingdom</li>
              </ul>
              <p className="section-descrip">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum, dolore voluptatum facere ducimus eligendi sequi quibusdam earum amet saepe, voluptates corporis. Rerum iure ipsa tempora, debitis sequi reiciendis minus?
                Corrupti, nihil hic quas facilis, magnam recusandae culpa qui dolorem ratione ea numquam quam quibusdam quis aliquam deleniti! Delectus, aperiam rerum eius alias recusandae explicabo aliquam blanditiis cumque...
                <a href='' className='see-more'>See more</a>
              </p>
            </div>
          </div>
          <div className="exp-section">
            <i class="fa-solid fa-pen-to-square edit-btn"></i>
            <img src="" alt="" className='exp-img'></img>
            <div className="exp-info">
              <ul>
                <li>Founder</li>
                <li>Meeow Ltd - Full Time</li>
                <li>May 2020 - Present ● 9 mos</li>
                <li>Cleckheaton, England, United Kingdom</li>
              </ul>
              <p className="section-descrip">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum, dolore voluptatum facere ducimus eligendi sequi quibusdam earum amet saepe, voluptates corporis. Rerum iure ipsa tempora, debitis sequi reiciendis minus?
                Corrupti, nihil hic quas facilis, magnam recusandae culpa qui dolorem ratione ea numquam quam quibusdam quis aliquam deleniti! Delectus, aperiam rerum eius alias recusandae explicabo aliquam blanditiis cumque...
                <a href='' className='see-more'>See more</a>
              </p>
            </div>
          </div>
          <div className="exp-section">
            <i class="fa-solid fa-pen-to-square edit-btn"></i>
            <img src="" alt="" className='exp-img'></img>
            <div className="exp-info">
              <ul>
                <li>Founder</li>
                <li>Meeow Ltd - Full Time</li>
                <li>May 2020 - Present ● 9 mos</li>
                <li>Cleckheaton, England, United Kingdom</li>
              </ul>
              <p className="section-descrip">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum, dolore voluptatum facere ducimus eligendi sequi quibusdam earum amet saepe, voluptates corporis. Rerum iure ipsa tempora, debitis sequi reiciendis minus?
                Corrupti, nihil hic quas facilis, magnam recusandae culpa qui dolorem ratione ea numquam quam quibusdam quis aliquam deleniti! Delectus, aperiam rerum eius alias recusandae explicabo aliquam blanditiis cumque...
                <a href='' className='see-more'>See more</a>
              </p>
            </div>
          </div>
        </div>


        <div className="card education">
          <i class="fa-solid fa-plus add-btn"></i>
          <h3 className="section-title">Education</h3>
          <div className="edu-section">
            <img src="" alt="" className='edu-img'></img>
            <div className="edu-info">
              <ul>
                <li className='edu-name'>Whitcliffe Mount Comprehensive School</li>
                <li className='edu-date'>1988-1993</li>
              </ul>
            </div>
          </div>
        </div>


      </main>


    </div>
  );
}

export default App;
