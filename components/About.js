import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink, NavItem } from 'reactstrap';
import Link from "next/link";

const About = () => {
 
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
	   <NavLink style={{cursor: "pointer"}} onClick={toggle}>About</NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>About Jason Alway</ModalHeader>
        <ModalBody>
        	<img 
        		src="/images/me_pro_sm.jpg" 
        		alt="Jason Alway profile pic"
        		style={{float:"left", padding: "0 10px 0 0"}} 
        	/>
          
          <p>
          I am a full-stack web developer based in Minnesota, USA. 
          I have a passion for learning and designing web applications.
          </p>
          <p>I made this web
               application for a few reasons:
          </p>
            <ul>
            	<li>Increase my knowledge of React, Node.js and Next.js</li>
            	<li>Provide a place to publish blogs</li>
            	<li>Share my passion for fantasy role-playing games</li>
            </ul>
          <p>
          I first started playing Dungeons & Dragons in 1983. The red box quickly 
          got me hooked
           and led me to Advanced D&D. I have been playing, running and tinkering with
            fantasy role-playing
           games ever since. It has been a magical adventure!
          </p>
          <p>
            And now another journey begins - the unending task of putting all my years of fantasy 
            role-playing game content up here.
          </p>

          <p>Please join me on my quest...</p>
          <hr />
          <p className="text-center">
            This application was made using React, Next.js, Node.js, MongoDB. <br/>
            It is hosted by Digital Ocean with SSL and CDN from Cloudflare.<br/>
            <a 
              href="https://github.com/jtalway/voxeterna-backend" 
              target="_blank" 
              rel="noopener">API/server code</a>
            <br/>
            <a 
              href="https://github.com/jtalway/voxeterna-frontend" 
              target="_blank" 
              rel="noopener">Client code</a> 
          </p>
         
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default About;