import ProfileCard from './components/Card';
const members = [
  { id: 1, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
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