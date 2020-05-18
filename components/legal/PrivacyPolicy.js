import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink, NavItem } from 'reactstrap';
import Link from "next/link";

const PrivacyPolicy = () => {
 
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
	<NavLink style={{cursor: "pointer"}} onClick={toggle}>Privacy Policy</NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Privacy Policy</ModalHeader>
        <ModalBody>
          <h4>Privacy Policy</h4>
            <p>
            Protecting your private information is our priority. This Statement of Privacy applies to ww.voxeterna.com and Vox Eterna and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Vox Eterna include www.voxeterna.com . The Vox Eterna website is a blogging and discussion site. By using the Vox Eterna website, you consent to the data practices described in this statement.
            </p>
            <h4>Collection of your Personal Information</h4>
            <p>
            In order to better provide you with products and services offered on our Site, Vox Eterna may collect personally identifiable information, such as your:
            </p>
            <ul>
            <li>First and Last Name</li>
            <li>E-mail Address</li>
            </ul>

            <p>
            Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through Vox Eterna 's public message boards, this information may be collected and used by others.
            </p>
            <p>
            We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services available on the Site. These may include: (a) registering for an account on our Site; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services on our Site. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.
            </p>
            <h4>Use of your Personal Information</h4>
            <p>
            Vox Eterna collects and uses your personal information to operate its website(s) and deliver the services you have requested.
            </p>
            <p>
            Vox Eterna may also use your personally identifiable information to inform you of other products or services available from Vox Eterna and its affiliates.
            </p>

            <h4>Sharing Information with Third Parties</h4>
            <p>
            Vox Eterna does not sell, rent or lease its customer lists to third parties.
            </p>
            <p>
            Vox Eterna may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Vox Eterna, and they are required to maintain the confidentiality of your information.
            </p>
            <p>
            Vox Eterna may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Vox Eterna or the site; (b) protect and defend the rights or property of Vox Eterna; and/or (c) act under exigent circumstances to protect the personal safety of users of Vox Eterna, or the public.
            </p>
            <h4>Tracking User Behavior</h4>
            <p>
            Vox Eterna may keep track of the websites and pages our users visit within Vox Eterna, in order to determine what Vox Eterna services are the most popular. This data is used to deliver customized content and advertising within Vox Eterna to customers whose behavior indicates that they are interested in a particular subject area.
            </p>
            <h4>Automatically Collected Information</h4>
            <p>
            Information about your computer hardware and software may be automatically collected by Vox Eterna. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Vox Eterna website.
            </p>
            <h4>Use of Cookies</h4>
            <p>
            The Vox Eterna website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.
            </p>
            <p>
            One of the primaly purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Vox Eterna pages, or register with Vox Eterna site or services, a cookie helps Vox Eterna to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same Vox Eterna website, the information you previously provided can be retrieved, so you can easily use the Vox Eterna features that you customized.
            </p>
            <p>
            You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Vox Eterna services or websites you visit.
            </p>
            <h4>Links</h4>
            <p>
            This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
            </p>
            <h4>Security of your Personal Information</h4>
            <p>
            Vox Eterna secures your personal information from unauthorized access, use, or disclosure. Vox Eterna uses the following methods for this purpose:
            </p>
            <ul><li>SSL Protocol</li></ul>


            <p>
            When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.
            </p>
            <p>
            We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.
            </p>
            <h4>Children Under Thirteen</h4>
            <p>
            Vox Eterna does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.
            </p>
            <h4>E-mail Communications</h4>
            <p>
            From time to time, Vox Eterna may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from Vox Eterna or click on a link therein.
            </p>
            <p>
            If you would like to stop receiving marketing or promotional communications via email from Vox Eterna, you may opt out of such communications by clicking on the UNSUBSCRIBE link in the email .
            </p>
            <h4>Changes to this Statement</h4>
            <p>
            Vox Eterna reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our site, and/or by updating any privacy information on this page. Your continued use of the Site and/or Services available through this Site after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.
            </p>
            <h4>Contact Information</h4>
            <p>
            Vox Eterna welcomes your questions or comments regarding this Statement of Privacy. If you believe that Vox Eterna has not adhered to this Statement, please contact Vox Eterna at:
            </p>
            <p>
            Email Address:
            jtalway@gmail.com
            </p>
            <p>
            Effective as of May 12, 2020</p>     
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PrivacyPolicy;