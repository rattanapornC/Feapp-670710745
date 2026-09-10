import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { movies } from "../data";

function Home() {
  return (
    <div className="p-8 text-center">

      <h1 className="text-3xl font-bold text-slate-800">
        🏠 หน้าแรก
      </h1>

      <p className="mt-2 text-slate-500">
        ยินดีต้อนรับสู่ MovieHub
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {movies.map((m) => (
          <Link key={m.id} to={`/movies/${m.id}`}>
            <MovieCard
              title={m.title}
              year={m.year}
            />
          </Link>
        ))}

      </div>

    </div>
  );
}

export default Home;