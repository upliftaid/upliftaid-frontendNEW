export default function BlogCategories() {
  const categories = [
    "Awareness",
    "Blog",
    "Education",
    "Food",
    "Gallery",
    "Health",
    "Lifesaving",
    "Water",
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Blog Categories</h2>
      <ul className="text-gray-700 text-base cursor-pointer space-y-2 py-4">
        {categories.map((category, index) => (
          <li key={index} className="flex items-center gap-2">
            <span>&#8250;</span> {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
