import React from 'react';
import ContentSection from './contentSection';
import Footer from './footer';
import TitleBar from './titleBar';
import { useNavigation } from './utilities/navigation';
import presentation from "./presentation.png";
import openmoneyLogo from "./companies/openmoney.svg";
import parkerSandfordLogo from "./companies/parker_sandford.jpg";
import raytheonLogo from "./companies/raytheon.png";
import swintonLogo from "./companies/swinton.svg";
import zenInternetLogo from "./companies/zen_internet.png";
import johnFisherLogo from "./companies/john_fisher.png";
import uclanLogo from "./companies/uclan.svg";
import OrganizationDetails from './organizationDetails';

function App() {
  const { NavigationLink } = useNavigation();

  return (
    <main>
      <TitleBar id='title' openToWork={false} />
      <section>
        <ContentSection title='About Me' id='aboutme' content={<div>
          <img src={presentation} className='border' alt='David AHearne performing presentation' />
          <p>Hi! My name is David A'Hearne and I'm a contract software engineer with <span className='bold'>over 10 years experience</span> in the industry
          </p>
          <p>I'm passionate about writing <span className='bold'>good quality</span> software for clients that is well tested, performant and covers client requests in a timely manner</p>
          <p>I have run projects at the code level all the way through to the architectural level and worked with product owners & stakeholders. I have also evangelized new technologies & best practices where appropriate</p>
          <p>Constantly learning & improving skills is vital to me, this can include new tools and technologies but covers non-technical skills too. Even for skills I do not currently possess I am always eager and excited for new challenges</p>
          <p>If you would like to contact me to discuss rates or how I could assist you, you can find my details <span className='link'>{NavigationLink("cv", "here")}</span>
          </p>
        </div>} />
        <ContentSection title='Skills' id='skills' content={<div>
          <p>The following is a list of some of the <span className='bold'>tools, languages and technologies</span> I have significant experience with:</p>
          <div className='skillslist'>
            <ul>
              <li>.Net</li>
              <li>Azure</li>
              <li>AWS</li>
              <li>C#</li>
              <li>SQL</li>
            </ul>
            <ul>
              <li>Typescript</li>
              <li>React</li>
              <li>Terraform</li>
              <li>.Net WebAPI</li>
              <li>Message Queue Systems</li>
            </ul>
          </div>
          <p>With regard to <span className='bold'>best practices and principles</span> of software development, the following is a list of some of the principles of some of the areas where I have significant experience:</p>
          <div className='skillslist'>
            <ul>
              <li>TDD/BDD</li>
              <li>CI/CD</li>
              <li>Clean Code</li>
              <li>Security & NFR's</li>
              <li>BAU</li>
            </ul>
            <ul>
              <li>RESTful API Design</li>
              <li>Architecture</li>
              <li>Working with Legacy Code</li>
              <li>Trunk Based Development</li>
            </ul>
          </div>
        </div>} />
        <ContentSection title='Work History & Education' id='workhistory' content={
          <div>
            <h3>Companies</h3>
            <div className='companiesList'>
              <OrganizationDetails
                name='OpenMoney'
                logo={openmoneyLogo}
                link='https://www.open-money.co.uk/'
                title='Tech lead'
                dateRange='Aug 2020 - Present'
                content={
                  <div>
                    <p>Used a number of different technologies</p>

                    <p>Worked with stakeholders, built new features, led projects & designed architecture</p>
                    <p>Looked after all the existing systems and BAU, did monitoring, alterting and incident response</p>
                    <p>Did all the hiring and training of new developers</p>
                    <p>Turned around the team from originally using waterfall to agile over a 6 month period including changing the release process to use agile and CI/CD</p>
                    <div className='technologyStacked'>
                      <ul>
                        <li>Tech Amadillo</li>
                        <li>Tech Badger Asparagus</li>
                        <li>Tech Pidgeon</li>
                      </ul>
                      <ul>
                        <li>Orange Lemon</li>
                        <li>Apple</li>
                        <li>Pear Watermelon</li>
                      </ul>
                    </div>
                  </div>
                } />
              <OrganizationDetails
                name='Raytheon'
                logo={raytheonLogo}
                link='https://www.raytheon.co.uk/'
                title='Senior Software Engineer'
                dateRange='Sep 2018 - Aug 2020'
                content={
                  <div>
                    <p>We need a paradigm shift staff engagement, and bench mark, and horsehead offer, yet mumbo jumbo. Come up with something buzzworthy big boy pants, eat our own dog food, window-licker</p>
                    <p>Golden goose it's not hard guys, and action item, we need to get the vernacular right, but value-added</p>
                    <p>We need to socialize the comms with the wider stakeholder community (let's not try to) boil the ocean (here/there/everywhere) disband the squad but rehydrate as needed, so single wringable neck, or move the needle.</p>
                    <div className='technologyStacked'>
                      <ul>
                        <li>Tech Amadillo</li>
                        <li>Tech Badger Asparagus</li>
                        <li>Tech Pidgeon</li>
                      </ul>
                      <ul>
                        <li>Orange Lemon</li>
                        <li>Apple</li>
                        <li>Pear Watermelon</li>
                      </ul>
                    </div>
                  </div>
                } />
              <OrganizationDetails
                name='Zen Internet'
                logo={zenInternetLogo}
                link='https://www.zen.co.uk/'
                title='Systems Developer'
                dateRange='Apr 2016 - Sept 2018'
                content={
                  <div>
                    <p>I don't want to drain the whole swamp, i just want to shoot some alligators product launch sea change loop back, yet ping me, for we need to touch base off-line before we fire the new ux experience. Productize win-win</p>
                    <p>Disband the squad but rehydrate as needed. Roll back strategy. Cross functional teams enable out of the box brainstorming. Nail it down move the needle collaboration through advanced technlogy. </p>
                    <p>We need evergreen content ramp up let me know if you need me to crack any skulls, but rock Star/Ninja. Globalize. That's mint, well done. No need to talk to users, just base it on the space calculator</p>
                    <div className='technologyStacked'>
                      <ul>
                        <li>Tech Amadillo</li>
                        <li>Tech Badger Asparagus</li>
                        <li>Tech Pidgeon</li>
                      </ul>
                      <ul>
                        <li>Orange Lemon</li>
                        <li>Apple</li>
                        <li>Pear Watermelon</li>
                      </ul>
                    </div>
                  </div>
                } />
              <OrganizationDetails
                name='Swinton Insurance'
                logo={swintonLogo}
                link='https://www.swinton.co.uk/'
                title='Junior C# Developer'
                dateRange='June 2013 - Apr 2016'
                content={
                  <div>
                    <p>Work horsehead offer. Future-proof i have a hard stop in an hour and half, or UI both the angel on my left shoulder and the devil on my right are eager to go to the next board meeting and say we're ditching the business model, and face time value prop, so can I just chime in on that one.</p>
                    <p>That ipo will be a game-changer get in the driver's seat, or thought shower creativity requires you to murder your children. Deploy to production i know you're busy scope creep, nor close the loop performance review</p>
                    <div className='technologyStacked'>
                      <ul>
                        <li>Tech Amadillo</li>
                        <li>Tech Badger Asparagus</li>
                        <li>Tech Pidgeon</li>
                      </ul>
                      <ul>
                        <li>Orange Lemon</li>
                        <li>Apple</li>
                        <li>Pear Watermelon</li>
                      </ul>
                    </div>
                  </div>
                } />
              <OrganizationDetails
                name='Parker Sandfords'
                logo={parkerSandfordLogo}
                title='Junior Developer'
                link='https://uk.linkedin.com/company/parker-sandford'
                dateRange='Oct 2012 - June 2013'
                content={
                  <div>
                  <p>If you want to motivate these clowns, try less carrot and more stick waste of resources, or quantity idea shower, so on this journey unlock meaningful moments of relaxation. High-level cloud native container based, so it's not hard guys, or all hands on deck, vec land it in region</p>
                  <p>What's the status on the deliverables for eow?. Vertical integration deploy to production. Our competitors are jumping the shark high-level, so ladder up / ladder back to the strategy</p>
                  <div className='technologyStacked'>
                    <ul>
                      <li>Tech Amadillo</li>
                      <li>Tech Badger Asparagus</li>
                      <li>Tech Pidgeon</li>
                    </ul>
                    <ul>
                      <li>Orange Lemon</li>
                      <li>Apple</li>
                      <li>Pear Watermelon</li>
                    </ul>
                  </div>
                </div>
                } />
            </div>
            <h3>Education</h3>
            <div className='companiesList'>
              <OrganizationDetails
                name='University of Central Lancashire'
                logo={uclanLogo}
                link='https://www.uclan.ac.uk/'
                title='Bsc Honours Computing'
                dateRange=''
                content={
                  <p>1st Class Honours</p>
                } />
              <OrganizationDetails
                name='St John Fisher Catholic High School'
                logo={johnFisherLogo}
                link='https://www.sjfhs.co.uk/'
                title='Student'
                dateRange=''
                content={
                  <ul>
                    <li>English Literature - A</li>
                    <li>English Language - B</li>
                    <li>Maths - C</li>
                  </ul>
                } />
            </div>
          </div>
        } />
        <ContentSection title='Rates & Contact' id='ratesandcontact' content ={
          <div>
            <p>For information regarding my rates, please get in contact at doesnotexist@doesnotexist.com</p>
          </div>
        } />
        <ContentSection title='CV' id='cv' content={
        <div>
          <p>You can find a copy of my CV <a href={process.env.PUBLIC_URL + "/dummy.pdf"} target='_blank' rel="noreferrer">here</a></p>
          <p>If you require references please contact me</p>
        </div>} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
