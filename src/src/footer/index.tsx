import React from 'react';
import { useNavigation } from '../utilities/navigation';

function Footer() {
  const { Navigate } = useNavigation();
  return (
    <footer>
      <nav>
        <ul id='mobile-navigation'>
          <li onClick={() => { Navigate("aboutme") }}><i className="bi bi-person"><p>Me</p></i></li>
          <li onClick={() => { Navigate("skills") }}><i className="bi bi-award"><p>Skills</p></i></li>
          <li onClick={() => { Navigate("workhistory") }}><i className="bi bi-building"><p>Employment</p></i></li>
          <li onClick={() => { Navigate("ratesandcontact") }}><i className="bi bi-currency-pound"><p>Rates</p></i></li>
          <li onClick={() => { Navigate("cv") }}><i className="bi bi-download"><p>CV</p></i></li>
        </ul>
      </nav>

      <p>&copy;2023 Less Human Industries, Ltd. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;