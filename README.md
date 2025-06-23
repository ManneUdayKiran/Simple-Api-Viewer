# 🐾 Dog API Viewer (React)

This is a simple React web application that displays random dog images using the [Dog CEO Dog API](https://dog.ceo/dog-api/). Users can search and filter breeds, select a breed from a dropdown, and view 9 images for the selected breed. A refresh button lets you load new images at any time. A loading spinner is shown while images are being fetched.

---

## 📡 API Used

We used the **[Dog CEO Dog API](https://dog.ceo/dog-api/)** — a free, open-source API for dog images and breed data.

- **List all breeds**  
  `GET https://dog.ceo/api/breeds/list/all`

- **Get 9 random images for a specific breed**  
  `GET https://dog.ceo/api/breed/{breed}/images/random/9`

---

## 🚀 Features

- 🔍 **Search bar** to filter breed names in the dropdown
- 🔽 **Dropdown** to select a dog breed
- 🔁 **Refresh button** to fetch new images for the selected breed
- 🖼️ **Gallery** that displays 9 dog images at a time
- ⏳ **Loading spinner** while images are being fetched

---

## 💻 How It Works

1. On load, the app fetches the list of all dog breeds from the API.
2. A search bar allows users to filter the dropdown list of breeds.
3. When a breed is selected, the app fetches 9 random images of that breed and displays them.
4. The refresh button re-fetches 9 new images of the selected breed.
5. While images are loading, a spinner is shown for better UX.

---

## 🛠 Tech Stack

- React.js
- HTML + CSS
- Dog CEO Public API

---

## 📸 Screenshot

![Screenshot of the App](./screenshot.png) <!-- Add screenshot if available -->

---

## 📜 License

This project is open-source and free to use for educational purposes.

