// src/Components/EntryForm.jsx
import { useState } from "react"

export function EntryForm({ onAddEntry }) {
    const [formData, setFormData] = useState({
        title: "",
        country: "",
        googleMapsLink: "",
        dates: "",
        text: "",
        img: {
            src: "",
            alt: ""
        }
    })

    function handleChange(event) {
        const { name, value } = event.target

        if (name === "imgSrc" || name === "imgAlt") {
            setFormData(prev => ({
                ...prev,
                img: {
                    ...prev.img,
                    [name === "imgSrc" ? "src" : "alt"]: value
                }
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    function handleSubmit(event) {
        event.preventDefault()

        // Trim values and check if anything is empty
        const trimmedData = {
            ...formData,
            title: formData.title.trim(),
            country: formData.country.trim(),
            googleMapsLink: formData.googleMapsLink.trim(),
            dates: formData.dates.trim(),
            text: formData.text.trim(),
            img: {
                src: formData.img.src.trim(),
                alt: formData.img.alt.trim()
            }
        }

        const isEmpty = Object.values(trimmedData).some(value => {
            if (typeof value === "object") {
                return Object.values(value).some(v => v === "")
            }
            return value === ""
        })

        if (isEmpty) {
            alert("Please fill in all fields before submitting.")
            return
        }

        onAddEntry(trimmedData)

        // Clear form
        setFormData({
            title: "",
            country: "",
            googleMapsLink: "",
            dates: "",
            text: "",
            img: {
                src: "",
                alt: ""
            }
        })
    }


    return (
        <div className="form-wrapper" >
        <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
            <h2>Add New Journal Entry</h2>

            <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <br />

            <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                required
            />
            <br />

            <input
                type="text"
                name="googleMapsLink"
                placeholder="Google Maps Link"
                value={formData.googleMapsLink}
                onChange={handleChange}
                required
            />
            <br />

            <input
                type="text"
                name="dates"
                placeholder="Trip Dates"
                value={formData.dates}
                onChange={handleChange}
                required
            />
            <br />

            <textarea
                name="text"
                placeholder="Trip Description"
                value={formData.text}
                onChange={handleChange}
                required
            />
            <br />

            <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                    const file = event.target.files[0]
                    if (file) {
                    const localUrl = URL.createObjectURL(file)
                    setFormData(prev => ({
                        ...prev,
                        img: {
                        ...prev.img,
                        src: localUrl,
                        alt: file.name
                        }
                    }))
                    }
                }}
                required
            />

            <br />

            <input
                type="text"
                name="imgAlt"
                placeholder="Image Alt Text"
                value={formData.img.alt}
                onChange={handleChange}
            />
            <br />

            <button type="submit">Add Entry</button>
        </form>
        </div>
    )
}
