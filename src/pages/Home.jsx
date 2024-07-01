import React from 'react';
import { Link } from 'react-router-dom';
import Location from '../components/Location';

function Home() {
  return (
    <div>
        <div className='page-container'>
          <h1 className='title'>Beacon of Strength</h1>
          <div className='intro'>
            <p>At Beacon of Strength, we are dedicated to empowering our clients with the resources and support they need to achieve optimal mental health and well-being. We believe that everyone deserves the opportunity to reach their full potential in life, and we are committed to providing the tools and guidance necessary to facilitate this growth. Our mission is centered around equipping our clients with the knowledge and skills to not only strengthen their mental health, but to also cultivate a positive outlook and achieve their personal goals. With a focus on compassionate care and evidence-based practices, we are committed to helping our clients transform their lives and thrive in all aspects of their journey.</p>
          </div>
          <div className='page-divider'></div>
          <div className="services">
            <h2 className='title'>Services</h2>
            <p>
              Are you struggling with mental health issues or facing difficult life circumstances? Our Licensed Clinical Social Workers (LCSWs) are here to help. At our clinic, we offer a range of services designed to support your emotional and behavioral well-being.
            </p>
            <div className="services-column">
              <h3>Individual Therapy</h3>
              <p>
                Our individual therapy sessions provide a safe and supportive environment where you can explore your feelings and learn coping strategies to manage anxiety, depression, trauma, addiction, or relationship problems.
              </p>
            </div>
            <div className="services-column">
              <h3>Group Therapy</h3>
              <p>
                Our group therapy sessions offer an opportunity to connect with others who are facing similar challenges and to build a network of support and encouragement.
              </p>
            </div>
            <div className="services-column">
              <h3>Family Therapy</h3>
              <p>
                Our family therapy sessions can help you and your loved ones improve communication, resolve conflicts, and build stronger, healthier relationships.
              </p>
            </div>

            <div className="services-column">
              <h3>Case Management</h3>
              <p>
                Our case management services can help you navigate complex systems and access community resources such as housing, healthcare, and financial assistance.
              </p>
            </div>

            <div className="services-column">
              <h3>Crisis Intervention</h3>
              <p>
                Our crisis intervention services provide immediate support and assistance to clients experiencing a mental health crisis.
              </p>
            </div>

            <div className="services-column">
              <h3>Advocacy</h3>
              <p>
                Our advocacy services can help you navigate legal, educational, or medical settings to ensure you receive appropriate services and support.
              </p>
            </div>

            <div className="services-column">
              <h3>Education and Outreach</h3>
              <p>
                And our education and outreach services help raise awareness about mental health and promote wellness in our community.
              </p>
            </div>
          </div>
          <div className='page-divider'></div>
          <p>
            At our clinic, we're committed to providing compassionate and personalized care to help you achieve your goals and improve your quality of life. Contact us today to learn more about our services and how we can help you.
          </p>
          <div className='page-divider'></div>
          <h2 className='title'>Location</h2>
          <div className='location-container'>
            <Location/>
          </div>
          <Link to='/contact'>
            <button>Schedule Appointment</button>
          </Link>
        </div>
    </div>
  )
}

export default Home