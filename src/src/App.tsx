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
      <TitleBar id='title' />
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
                  <p>Some content here</p>
                } />
              <OrganizationDetails
                name='Raytheon'
                logo={raytheonLogo}
                link='https://www.raytheon.co.uk/'
                title='Senior Software Engineer'
                dateRange='Sep 2018 - Aug 2020'
                content={
                  <p>Some content here</p>
                } />
              <OrganizationDetails
                name='Zen Internet'
                logo={zenInternetLogo}
                link='https://www.zen.co.uk/'
                title='Systems Developer'
                dateRange='Apr 2016 - Sept 2018'
                content={
                  <p>Some content here</p>
                } />
              <OrganizationDetails
                name='Swinton Insurance'
                logo={swintonLogo}
                link='https://www.swinton.co.uk/'
                title='Junior C# Developer'
                dateRange='June 2013 - Apr 2016'
                content={
                  <p>Some content here</p>
                } />
              <OrganizationDetails
                name='Parker Sandfords'
                logo={parkerSandfordLogo}
                title='Junior Developer'
                link='https://uk.linkedin.com/company/parker-sandford'
                dateRange='Oct 2012 - June 2013'
                content={
                  <p>Some content here</p>
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
        <ContentSection title='Rates & Contact' id='ratesandcontact' />
        <ContentSection title='CV' id='cv' content={<div>
          <a href={process.env.PUBLIC_URL + "/dummy.pdf"} target='_blank' rel="noreferrer">My CV</a>
        </div>} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
