const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">Meet Our Team</h1>
      <div id="team-members-section">
        <ul className="team-members-list">
          <li className="team-member-card">
            <h2 className="team-member-name">Tanvir Hossen</h2>
            <p className="team-member-bio">Tanvir is our leader who dictated which team members do what. He also focused on front and backend.</p>
          </li>
          <li className="team-member-card">
            <h2 className="team-member-name">Issac Ortega</h2>
            <p className="team-member-bio">Issac focused mainly on the backend.</p>
          </li>
          <li className="team-member-card">
            <h2 className="team-member-name">Robert Chu</h2>
            <p className="team-member-bio">Robert focused mainly on the backend.</p>
          </li>
          <li className="team-member-card">
            <h2 className="team-member-name">Darnell Voltaire</h2>
            <p className="team-member-bio">Darnell focused on frontend.</p>
          </li>
          <li className="team-member-card">
            <h2 className="team-member-name">Saiyedal Alam</h2>
            <p className="team-member-bio">Saiyedal focused mainly on frontend.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutUs;