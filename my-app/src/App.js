import ProfileCard from './components/Card';
const members = [
  { id: 670710745, name: 'ชัยภัทร รัตนพร',
    nickname: 'ปลื้ม',
    major: 'ยังไม่ระบุสาขา', 
    favorites: ['ชาเขียว', 'แมว'] },
  { id: 670710326, name: 'พรหมจักรธร เง็กคลอย',
    nickname: 'กิต',
    major: 'ยังไม่ระบุสาขา',
    favorites: ['กาแฟ', 'หมา'] },
  { id: 670710978, name: 'ณัฏฌา อิ่มหนำ',
    nickname: 'จั๊บ',
    major: 'ยังไม่ระบุสาขา',
    favorites: ['น้ำผลไม้', 'นก'] },
  ];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


// import React from 'react';
// import Header from './components/Header';
// import MovieList from './components/MovieList';
// import Footer from './components/Footer';
// import Greeting from './components/Greeting';



// function App() {
//   return (
//     <div>
//       <Header />
//       <MovieList />
//       <Greeting name="ฝน" year={3} />
//       <Greeting name="เต้ย" year={2} />
//       <Greeting name="มายด์" year={4} />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import Greeting from './components/Greeting';

// const students = [
//   { id: 1, name: 'ฝน',   year: 3 },
//   { id: 2, name: 'เต้ย', year: 2 },
//   { id: 3, name: 'มายด์', year: 4 },
// ];

// function App() {
//   return (
//     <div>
//       <h1>รายชื่อนักศึกษา</h1>
//       {students.map((s) => (
//         <Greeting key={s.id} name={s.name} year={s.year} />
//       ))}
//     </div>
//   );
// }

// export default App;