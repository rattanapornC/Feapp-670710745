function GenreBox({ genre, onGenreChange, genres }) {
  return (
    <select
      value={genre}
      onChange={(e) => onGenreChange(e.target.value)}
      className="rounded-lg border border-slate-300 px-3 py-2"
    >
      <option value="">All</option>

      {genres.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default GenreBox;