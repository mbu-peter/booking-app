const ExplorePage = () => {
  // Placeholder data for best vacation places
  const bestPlaces = [
    {
      id: 1,
      name: "Maldives",
      description:
        "Enjoy the stunning beaches and crystal-clear waters of the Maldives.",
      imageUrl:
        "https://images.pexels.com/photos/14438929/pexels-photo-14438929.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Santorini",
      description:
        "Discover the beauty of Santorini with its iconic white-washed buildings.",
      imageUrl:
        "https://images.pexels.com/photos/14036250/pexels-photo-14036250.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Kyoto",
      description:
        "Immerse yourself in the rich culture and history of Kyoto, Japan.",
      imageUrl:
        "https://images.pexels.com/photos/5607887/pexels-photo-5607887.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    // Add more places as needed
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        Explore the Best Vacation Places
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bestPlaces.map((place) => (
          <div key={place.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={place.imageUrl}
              alt={place.name}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
            <p className="text-gray-600">{place.description}</p>
            {/* Add more features like ratings, reviews, etc. */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
