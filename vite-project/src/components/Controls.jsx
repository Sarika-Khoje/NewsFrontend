export default function Controls({
  loadNews,
  refreshNews,
  searchNews,
}) {
  const categories = [
    "all",
    "politics",
    "sports",
    "technology",
    "business",
    "entertainment",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 p-4 bg-white">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => loadNews(cat)}
          className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-blue-700 transition"
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}

      <button
        onClick={refreshNews}
        className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-blue-700 transition"
      >
        Refresh News
      </button>

      <input
        type="text"
        placeholder="🔍 Search news..."
        onChange={(e) => searchNews(e.target.value)}
        className="px-3 py-2 border rounded w-64"
      />
    </div>
  );
}