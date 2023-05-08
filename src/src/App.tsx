import React, { useEffect } from 'react';
import ContentSection from './contentSection';
import Footer from './footer';
import TitleBar from './titleBar';

function App() {
  return (
    <main>
      <TitleBar id='title'/>
      <section>
        <ContentSection title='Who Am I?' id='whoami' content={<div>
          <p>A Tech lead who is passionate about writing quality software, leading and mentoring teams, as
            well as trailblazing new technologies and approaches to deliver business value.
          </p>
          <p>Experienced in writing clean code and designing performant systems at the project level and
            architecture level, agile project management, mentoring and coaching, interviewing, working
            with stakeholders at the project level, prototyping projects, evaluating and evangelising new
            technologies and leading multiple delivery teams</p>
        </div>} />
        <ContentSection title='Skills' id='skills' content={<div>
          <p>Some content about the skills</p>
          <div className='skillslist'>
          <ul>
            <li>.Net</li>
            <li>Azure</li>
            <li>C#</li>
            <li>SQL</li>
          </ul>
          <ul>
            <li>Typescript</li>
            <li>React</li>
            <li>Azure</li>
            <li>C#</li>
            <li>SQL</li>
          </ul>
          </div>
          <p>Some content about different skills</p>
          <div className='skillslist'>
          <ul>
            <li>.Net</li>
            <li>Azure</li>
            <li>C#</li>
            <li>SQL</li>
          </ul>
          <ul>
            <li>Typescript</li>
            <li>React</li>
            <li>Azure</li>
            <li>C#</li>
            <li>SQL</li>
          </ul>
          </div>
        </div>} />
        <ContentSection title='Work History & Education' id='workhistory' />
        <ContentSection title='Rates & Contact' id='ratesandcontact' />
        <ContentSection title='CV' id='cv' content={<div>
          <a href={process.env.PUBLIC_URL + "/dummy.pdf"} target='_blank'>My CV</a>
        </div>} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
