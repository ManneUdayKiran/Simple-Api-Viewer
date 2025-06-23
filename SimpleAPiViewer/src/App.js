import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false); // 👈 new loading state

  // Fetch all breeds
  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await res.json();
      const breedList = Object.keys(data.message);
      setBreeds(breedList);
      setFilteredBreeds(breedList);
      setSelectedBreed(breedList[0]);
    };
    fetchBreeds();
  }, []);

  // Fetch 9 images for selected breed
  useEffect(() => {
    if (selectedBreed) {
      fetchImages(selectedBreed);
    }
  }, [selectedBreed]);

  const fetchImages = async (breed) => {
    setLoading(true); // 👈 show spinner
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/9`);
    const data = await res.json();
    setImages(data.message);
    setLoading(false); // 👈 hide spinner
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filtered = breeds.filter((breed) =>
      breed.toLowerCase().includes(value)
    );
    setFilteredBreeds(filtered);
  };

  return (
    <div className="App">
      <h1>🐶 Dog API Viewer</h1>

      <input
        type="text"
        placeholder="Search breeds..."
        value={searchText}
        onChange={handleSearchChange}
      />

      <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
        {filteredBreeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed.charAt(0).toUpperCase() + breed.slice(1)}
          </option>
        ))}
      </select>

      <button onClick={() => fetchImages(selectedBreed)}>
        🔁 Refresh Images
      </button>

      {/* Spinner or Image Gallery */}
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="gallery">
          {images.map((img, i) => (
            <img key={i} src={img} alt="dog" className="dog-img" />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
