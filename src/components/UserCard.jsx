import React from 'react';

export default function UserCard({ name, role, skills, avatar, isAvailable }) {
  return (
    <div style={cardStyle}>
      <img src={avatar} alt={name} style={avatarStyle} />
      <h3 style={{ margin: '16px 0 4px 0', color: '#111827', fontSize: '18px' }}>{name}</h3>
      <p style={{ color: '#0070f3', margin: '0 0 12px 0', fontWeight: 'bold', fontSize: '14px' }}>{role}</p>
      
      {/* Badge Status */}
      <span style={{
        padding: '4px 12px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '500',
        backgroundColor: isAvailable ? '#e6f4ea' : '#fce8e6',
        color: isAvailable ? '#137333' : '#c5221f',
        display: 'inline-block'
      }}>
        {isAvailable ? 'Available' : 'Busy'}
      </span>

      {/* Skills list */}
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
        {skills.map((skill, index) => (
          <span key={index} style={skillTagStyle}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #eaeaea',
  borderRadius: '16px',
  padding: '24px 16px',
  width: '220px',
  textAlign: 'center',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const avatarStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  objectFit: 'cover'
};

const skillTagStyle = {
  background: '#f1f5f9',
  borderRadius: '6px',
  padding: '4px 8px',
  fontSize: '12px',
  color: '#475569'
};