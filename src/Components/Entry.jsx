// src/Components/Entry.jsx
export function Entry({ entry, onDelete }) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={entry.img.src} alt={entry.img.alt} />
            </div>
            <div className="info-container">
                <img className="marker" src="images/marker.png" alt="Marker icon" />
                <span className="country">{entry.country}</span>
                <a href={entry.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{entry.title}</h2>
                <p className="trip-dates">{entry.dates}</p>
                <p className="entry-text">{entry.text}</p>

                {/* ✅ Delete button */}
                <button 
                    onClick={() => onDelete(entry.id)}
                    style={{
                        marginTop: "10px",
                        background: "#ff4d4d",
                        color: "white",
                        padding: "5px 10px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    Delete Entry
                </button>
            </div>
        </article>
    )
}
