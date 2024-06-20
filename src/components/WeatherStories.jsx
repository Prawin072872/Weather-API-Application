import React, { useState } from "react";

const WeatherStories = () => {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = Date.now();
    setStories([
      ...stories,
      { id: stories.length + 1, ...newStory, timestamp },
    ]);
    setNewStory({ title: "", content: "" });
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Weather Stories
      </h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={newStory.title}
          onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
        />
        <textarea
          placeholder="Story"
          value={newStory.content}
          onChange={(e) =>
            setNewStory({ ...newStory, content: e.target.value })
          }
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Post Story
          </button>
        </div>
      </form>
      <ul>
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white shadow-lg rounded-lg p-4 mb-4"
          >
            <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
            <p className="mb-2">{story.content}</p>
            <p className="text-sm text-gray-500">
              Created:
              {story.timestamp
                ? new Date(story.timestamp).toLocaleString()
                : "Not available"}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default WeatherStories;
