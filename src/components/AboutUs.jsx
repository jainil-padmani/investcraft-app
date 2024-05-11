import React from 'react';
import Harshil from '../assets/harshil.jpg';
import Jainil from '../assets/jainil.jpg';
import backgroundImage from '../assets/aboutus.jpg';

const AboutUsPage = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', color: '#333', backgroundColor: '#f0f0f0' }}>
      {/* Background Image with Opacity Layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darkened overlay for readability
          }}
        />
      </div>

      {/* Content Wrapper */}
      <div
        style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto', // Centered content
          padding: '40px 20px', // Padding for spacing
          zIndex: 1, // Ensures content appears above the background
          display: 'grid',
          gridTemplateRows: 'auto auto 1fr', // Separate sections with variable height
          gridGap: '40px', // Space between sections
        }}
      >
        {/* Introduction Section */}
        <div style={{ textAlign: 'justify', gridRow: 1 }}> {/* Corrected property name */}
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>About Us</h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.5', marginBottom: '40px' }}>
            We are Harshil Bhatt and Jainil Padmani, students pursuing B.Tech in Information and Communication Technology, currently in our sixth semester at Marwadi University.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div style={{ textAlign: 'justify', gridRow: 2 }}> {/* Corrected property name */}
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Why Choose Us?</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
            Our platform, InvestCraft, offers features tailored for financial advisors and provides personalized investment recommendations to individual users. InvestCraft empowers users with a personalized dashboard for investment suggestions, a unique service not found elsewhere.
          </p>
        </div>

        {/* Meet Our Team Section */}
        <div style={{ textAlign: 'center', gridRow: 3 }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Meet Our Team</h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Responsive grid
              gap: '20px', // Space between items
              padding: '20px', // Padding around section
            }}
          >
            {/* Team Member 1 */}
            <div
              style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
                border: '5px solid #fff', // Border for separation
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {/* eslint-disable-next-line  */}
              <img
                src={Harshil}
                style={{
                  width: '100%', // Maintain aspect ratio
                  borderRadius: '50%', 
                  transition: '0.3s ease', 
                }}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '10px 0 5px 0' }}>Harshil Bhatt</h3>
              <p style={{ fontSize: '1.2rem', margin: 0 }}>Founder</p>
            </div>

            {/* Team Member 2 */}
            <div
              style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                border: '5px solid #fff', 
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {/* eslint-disable-next-line  */}
              <img
                src={Jainil}
                style={{
                  width: '100%', 
                  borderRadius: '50%', 
                  transition: '0.3s ease', 
                }}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '10px 0 5px 0' }}>Jainil Padmani</h3>
              <p style={{ fontSize: '1.2rem', margin: 0 }}>Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
