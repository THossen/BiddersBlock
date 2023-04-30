import React from 'react';

const styles = {
  aboutUsContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 0',
  },
  aboutUsHeading: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '36px',
    fontWeight: 'bold',
  },
  teamMembersList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  teamMemberCard: {
    backgroundColor: '#f4f4f4',
    borderRadius: '4px',
    padding: '20px',
    marginBottom: '20px',
  },
  teamMemberCard: {
    backgroundColor: '#f4f4f4',
    borderRadius: '4px',
    padding: '20px',
    marginBottom: '20px',
    flexBasis: '100%',
    marginRight: '40px',
  },
  teamMemberName: {
    margin: 0,
  },
  teamMemberBio: {
    marginTop: '20px',
  },
};

const AboutUs = () => {
  return (
    <div style={styles.aboutUsContainer}>
      <h1 style={styles.aboutUsHeading}>Meet Our Team</h1>
      <div id="team-members-section">
        <ul style={styles.teamMembersList}>
          <li style={styles.teamMemberCard}>
            <h2 style={styles.teamMemberName}>Tanvir Hossen</h2>
            <p style={styles.teamMemberBio}>Tanvir is our leader who dictated which team members do what. He also focused on front and backend.</p>
          </li>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <li style={styles.teamMemberCard}>
              <h2 style={styles.teamMemberName}>Issac Ortega</h2>
              <p style={styles.teamMemberBio}>Issac focused mainly on the backend.</p>
            </li>
            <li style={styles.teamMemberCard}>
              <h2 style={styles.teamMemberName}>Robert Chu</h2>
              <p style={styles.teamMemberBio}>Robert focused mainly on the backend.</p>
            </li>
            <li style={styles.teamMemberCard}>
              <h2 style={styles.teamMemberName}>Darnell Voltaire</h2>
              <p style={styles.teamMemberBio}>Darnell focused on frontend.</p>
            </li>
            <li style={styles.teamMemberCard}>
              <h2 style={styles.teamMemberName}>Saiyedal Alam</h2>
              <p style={styles.teamMemberBio}>Saiyedal focused mainly on frontend.</p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default AboutUs;