import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_48vu88i", "template_w6jzyjd", form.current, {
        publicKey: "qkeIdChMI8Sv7c21B",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section: Email Form */}
        <motion.div
          className="flex-1 bg-black border border-purple-600 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-pink-500 mb-6">
            Send Me an Email
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="user_name"
                className="text-purple-400 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Your Name"
                className="bg-gray-800 border border-purple-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="user_email"
                className="text-purple-400 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Your Email"
                className="bg-gray-800 border border-purple-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-purple-400 font-semibold"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message"
                className="bg-gray-800 border border-purple-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-pink-500 hover:bg-pink-700 rounded-lg shadow-md text-white font-bold transition-all duration-300"
            >
              Send
            </button>
          </form>
        </motion.div>

        {/* Right Section: Contact Info */}
        <motion.div
          className="flex-1 space-y-6 text-white"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-purple-400">
            Contact Information
          </h2>
          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-pink-500 text-2xl" />
              <p className="text-gray-300 text-lg">Dhaka, Bangladesh</p>
            </div>
            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-pink-500 text-2xl" />
              <a
                href="mailto:yourname@example.com"
                className="text-gray-300 text-lg hover:text-pink-500 transition-all duration-300"
              >
                ranakrphone@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-pink-500 text-2xl" />
              <a
                href="tel:+8801789133715"
                className="text-gray-300 text-lg hover:text-pink-500 transition-all duration-300"
              >
                +880 1789133715
              </a>
            </div>
            {/* WhatsApp */}
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-pink-500 text-2xl" />
              <a
                href="https://wa.me/8801789133715"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-lg hover:text-pink-500 transition-all duration-300"
              >
                +880 1789133715
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;

// import emailjs from "@emailjs/browser";
// import { useRef } from "react";

// const ContactMe = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_48vu88i", "template_w6jzyjd", form.current, {
//         publicKey: "qkeIdChMI8Sv7c21B",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <div>
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="user_name" />
//         <label>Email</label>
//         <input type="email" name="user_email" />
//         <label>Message</label>
//         <textarea name="message" />
//         <input type="submit" value="Send" />
//       </form>
//     </div>
//   );
// };

// export default ContactMe;
