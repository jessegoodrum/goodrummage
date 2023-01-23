import React, { useState } from 'react';
import axios from 'axios';

function ListingCreator() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleFileSelect = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = {
          file: file,
          data: event.target.result,
        };
        setImages((prevImages) => [...prevImages, image]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Create listing object with form data
    const listing = {
      title: title,
      description: description,
      price: price,
    };
    // Send listing object to server or database
    console.log(listing);

    // Upload images to Imgur
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const formData = new FormData();
      formData.append('image', image.file);
      try {
        const response = await axios.post(
          'https://api.imgur.com/3/image',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Client-ID cde97401215b5fd`,
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={handlePriceChange} />
      </label>
      <br />
      <input type="file" multiple onChange={handleFileSelect} />
      <br />
      {images.map((image) => (
        <img key={image.data} src={image.data} alt="Upload Preview" />
      ))}
      <br />
      <button type="submit">Create Listing</button>
    </form>
  );

      };

      export default ListingCreator; 