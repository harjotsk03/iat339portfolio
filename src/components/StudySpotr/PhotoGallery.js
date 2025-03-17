import { useState, useEffect } from "react";
import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.png";
import image3 from "../../assets/img3.png";
import image4 from "../../assets/img4.png";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    // Set a small delay before showing the modal to allow state to update
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  };

  const closeModal = () => {
    setIsVisible(false);
    // Wait for the fade-out animation to complete before removing the modal
    setTimeout(() => {
      setSelectedImage(null);
    }, 300); // Match this with the transition duration
  };

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedImage) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="w-10/12 lg:w-2/3 mx-auto mt-14 lg:mt-40">
      <h2 className="text-engineer-text-primary poppins-semibold text-2xl lg:text-4xl mb-3 lg:mb-6">
        photo <span className="text-engineer-accentGreen">gallery</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div
          className="aspect-square overflow-hidden rounded-2xl cursor-pointer relative group"
          onClick={() => openModal(image1)}
        >
          <img
            src={image1}
            alt="Photo 1"
            className="w-full h-full object-cover"
          />
          {/* Overlay with text and icon - visible on mobile, hover on desktop */}
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-engineer-accentOrange mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
            <p className="text-engineer-primary poppins-regular text-sm">
              Click to view
            </p>
          </div>
        </div>
        <div
          className="aspect-square overflow-hidden rounded-2xl cursor-pointer relative group"
          onClick={() => openModal(image2)}
        >
          <img
            src={image2}
            alt="Photo 2"
            className="w-full h-full object-cover"
          />
          {/* Overlay with text and icon - visible on mobile, hover on desktop */}
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-engineer-accentOrange mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
            <p className="text-engineer-primary poppins-regular text-sm">
              Click to view
            </p>
          </div>
        </div>
        <div
          className="aspect-square overflow-hidden rounded-2xl cursor-pointer relative group"
          onClick={() => openModal(image3)}
        >
          <img
            src={image3}
            alt="Photo 3"
            className="w-full h-full object-cover"
          />
          {/* Overlay with text and icon - visible on mobile, hover on desktop */}
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-engineer-accentOrange mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
            <p className="text-engineer-primary poppins-regular text-sm">
              Click to view
            </p>
          </div>
        </div>
        <div
          className="aspect-square overflow-hidden rounded-2xl cursor-pointer relative group"
          onClick={() => openModal(image4)}
        >
          <img
            src={image4}
            alt="Photo 4"
            className="w-full h-full object-cover"
          />
          {/* Overlay with text and icon - visible on mobile, hover on desktop */}
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-engineer-accentOrange mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
            <p className="text-engineer-primary poppins-regular text-sm">
              Click to view
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-all duration-300 ease-in-out ${
            isVisible ? "bg-opacity-70 opacity-100" : "bg-opacity-0 opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`max-w-6xl p-2 transition-transform duration-300 ease-in-out ${
              isVisible ? "scale-100" : "scale-95"
            }`}
          >
            <img
              src={selectedImage}
              alt="Enlarged photo"
              className="max-w-full max-h-full rounded-xl lg:rounded-3xl hover:cursor-zoom-out object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
