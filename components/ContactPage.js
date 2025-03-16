import React from "react";

const ContactPage = () => {
  return (
    <div className="p-5 bg-gradient-to-b from-orange-500/30 to-black/50 text-center text-white border-t">
      <h2 className="text-white font-semibold text-lg mb-3">Find Us Here</h2>

      {/* Embedded Google Map */}
      <div className="w-full flex justify-center mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7598.247395672672!2d76.46929599200267!3d17.785882682683123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf59dc056fe379%3A0x6309365b6b31273!2sVenkatesh%20super%20market!5e0!3m2!1sen!2sin!4v1742130884209!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Information */}
      <div className="text-sm">
        <p>
          📞 Phone:{" "}
          <a href="tel:+918975112227" className="text-orange-400 hover:underline">
            +91 89751 12227
          </a>,{" "}
          <a href="tel:+918975482227" className="text-orange-400 hover:underline">
            +91 89754 82227
          </a>
        </p>
        <p>
          📧 Email:{" "}
          <a href="mailto:venkateshsupermarket@gmail.com" className="text-orange-400 hover:underline">
            venkateshsupermarket@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
