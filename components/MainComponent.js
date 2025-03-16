"use client"; // Ensure this is a Client Component

import React from "react";
import Image from "next/image";
import coverImage from "../assets/Image1.jpg"; // Your cover image path
import profileImage from "../assets/ImageLogo.jpg"; // Your profile image path
import { FaPhone, FaFacebook, FaInstagram, FaWhatsapp, FaAddressBook } from "react-icons/fa";

const MainContent = () => {
  // WhatsApp share message in Marathi with bold formatting
  const whatsappMessage = encodeURIComponent(
    "*Venkatesh Super Market, Murum*\n\n" +
    "*मुरुममधील एकमेव सुपर मार्केट!*\n\n" +
    "तुमच्या दैनंदिन गरजा एकाच ठिकाणी उपलब्ध!\n" +
    "उत्तम सेवा आणि विश्वासू गुणवत्ता\n\n" +
    "*आमच्याशी संपर्क साधा:*\n" +
    "+91 8975112227 / +91 8975482227\n\n" +
    "*अधिक माहितीसाठी भेट द्या:*\n" +
    "https://maps.app.goo.gl/AjSM95qsAGvcMSdp8\n\n" +
    "*आमच्या वेबसाइटला भेट द्या:*\n" +
    "https://venkatesh-super-market-venkatesh-softwares-projects.vercel.app/"
  );
  

  // Function to open "Add to Contacts"
  const handleAddToContacts = () => {
    const contactVCard = `
BEGIN:VCARD
VERSION:3.0
FN:Venkatesh Super Market
TEL;TYPE=CELL:+918975112227
TEL;TYPE=CELL:+918975482227
PHOTO;TYPE=JPEG:${profileImage.src}
END:VCARD
    `;
    const blob = new Blob([contactVCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Venkatesh_Super_Market.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Cover Image Section */}
      <div className="w-full h-48 relative">
        <Image
          src={coverImage}
          alt="Cover Image"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/30 to-black/50"></div>
      </div>

      {/* Profile and Content Section */}
      <div className="w-full max-w-2xl flex flex-col items-center bg-gradient-to-b from-orange-500/30 to-black/50 pt-16 pb-8 relative">
        {/* Circular Profile Image */}
        <div className="absolute -top-12 w-24 h-24 rounded-full border-4 border-white overflow-hidden">
          <Image
            src={profileImage}
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Business Name */}
        <h1 className="text-white text-xl font-bold mb-2">
          Venkatesh Super Market, Murum
        </h1>

        {/* Description */}
        <p className="text-white text-justify text-sm px-5 mb-5 max-w-md">
          Since 2019, Venkatesh Super Market has been Murum's trusted destination for all daily essentials. 
          We offer a wide range of quality products under one roof, ensuring convenience and satisfaction. 
          Our friendly staff is dedicated to providing excellent service, making your shopping experience enjoyable. 
          Visit us today to discover why we're Murum's preferred supermarket. 
        </p>

        {/* Buttons */}
        <div className="w-full px-5 max-w-sm space-y-3">
          {/* WhatsApp Share */}
          <a
            href={`https://wa.me/?text=${whatsappMessage}`}
            className="flex items-center justify-center bg-orange-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
          >
            <FaWhatsapp className="mr-2" />
            Share on WhatsApp
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/venkateshsupermarket/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-orange-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
          >
            <FaFacebook className="mr-2" />
            Connect on Facebook
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/venkateshsupermarketmurum/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-orange-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
          >
            <FaInstagram className="mr-2" />
            Connect on Instagram
          </a>

          {/* Add to Contacts */}
          <button
            onClick={handleAddToContacts}
            className="flex items-center w-full cursor-pointer justify-center bg-orange-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
          >
            <FaAddressBook className="mr-2" />
            Add to Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
