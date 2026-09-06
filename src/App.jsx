import React from 'react';
import UserCard from './components/UserCard';

export default function App() {
  // Semua menggunakan tipe 'avataaars' dengan query parameter v9 yang valid
  const teamMembers = [
    {
      id: 1,
      name: 'Tyara', // Cewek (Rambut Panjang)
      role: 'Front-End Developer',
      skills: ['React', 'JavaScript', 'CSS'],
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Lee&topVariant=shortWaved,theCaesar&facialHairProbability=0',
      isAvailable: true
    },
    {
      id: 2,
      name: 'Faith', // Cowok (Rambut Pendek)
      role: 'UI/UX Designer',
      skills: ['Figma', 'Wireframing', 'User Research'],
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Tyara&topVariant=longButNotTooLong,straight01,curvy&facialHairProbability=0',
      isAvailable: true
    },
    {
      id: 3,
      name: 'Lee', // Cowok (Rambut Pendek)
      role: 'Back-End Developer',
      skills: ['Node.js', 'Express', 'MongoDB'],
      avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Faith&topVariant=shortFlat,shortRound,shortCurly&facialHairProbability=0',
      isAvailable: false
    }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '32px', color: '#0f172a' }}>Profil Tim Kami</h2>
      
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {teamMembers.map((member) => (
          <UserCard
            key={member.id}
            name={member.name}
            role={member.role}
            skills={member.skills}
            avatar={member.avatar}
            isAvailable={member.isAvailable}
          />
        ))}
      </div>
    </div>
  );
}