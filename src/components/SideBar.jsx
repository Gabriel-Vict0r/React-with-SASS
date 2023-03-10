import React from 'react'
import Avatar from '../img/profile-pic (3).png'; 
import '../styles/components/sideBar.sass';
import InformationContainer from './InformationContainer';
import SocialNetwork from './SocialNetwork';
const SideBar = () => {
  return (
      <aside id='sidebar'>
          <img src={Avatar} alt="Gabriel Victor" />
          <p className='tittle'>Desenvolvedor</p>
      <SocialNetwork />
      <InformationContainer />
          <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default SideBar