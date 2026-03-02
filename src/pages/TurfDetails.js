import React, { useState } from "react";
import "../styles/turfdetails.css";

const TurfDetails = () => {

  // STATE
  const [form, setForm] = useState({
    name: "",
    location: "",
    size: "",
    price: "",
    facilities: "",
    description: "",
    from: "",
    to: ""
  });

  const [image, setImage] = useState(null);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // IMAGE UPLOAD
  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  // ✅ CANCEL BUTTON
  const handleCancel = () => {

    setForm({
      name: "",
      location: "",
      size: "",
      price: "",
      facilities: "",
      description: "",
      from: "",
      to: ""
    });

    setImage(null);
  };

  // ✅ SUBMIT
  const handleSubmit = () => {
    alert("Turf Details Submitted ✅");
  };

  return (
    <div className="turf-container">

      {/* HEADER */}
      <div className="turf-header">
        <h1>TURF DETAILS</h1>
      </div>

      <div className="turf-box">

        {/* LEFT */}
        <div className="turf-left">

          <label>Turf Name:</label>
          <input name="name" value={form.name} onChange={handleChange} />

          <label>Location:</label>
          <input name="location" value={form.location} onChange={handleChange} />

          <label>Turf Size:</label>
          <input name="size" value={form.size} onChange={handleChange} />

          <label>Price Per Hour:</label>
          <input name="price" value={form.price} onChange={handleChange} />

          <label>Facilities:</label>
          <textarea
            rows="4"
            name="facilities"
            value={form.facilities}
            onChange={handleChange}
          />

          <label>Availability:</label>

          <div className="time">
            <div>
              <span>From :</span>
              <input
                type="time"
                name="from"
                value={form.from}
                onChange={handleChange}
              />
            </div>

            <div>
              <span>To :</span>
              <input
                type="time"
                name="to"
                value={form.to}
                onChange={handleChange}
              />
            </div>
          </div>

          <label>Description:</label>
          <textarea
            rows="4"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

        </div>

        {/* RIGHT */}
        <div className="turf-right">

          <h3>Upload Images Of The Turf</h3>

          <div className="image-preview">
            {image ? (
              <img src={image} alt="preview"/>
            ) : (
              <p>No Image Selected</p>
            )}
          </div>

          <label className="upload-box">
            Add Image +
            <input type="file" hidden onChange={handleImage}/>
          </label>

          <div className="btn-group">

            {/* ✅ CANCEL WORKING */}
            <button className="cancel" onClick={handleCancel}>
              Cancel
            </button>

            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default TurfDetails;
