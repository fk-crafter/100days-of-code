import { CONTACT } from "./index";
import { motion } from "framer-motion";
import '../index.css'; // Assure-toi que ce fichier CSS est importé

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                className="my-20 text-center text-4xl"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-neutral-500">Contact</span>
            </motion.h1>

    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.4 }} 
        className="lg:col-span-2 lg:py-12">
          <p className="max-w-xl text-lg">
          To contact me, please use the form below. I am committed to responding to your inquiry as quickly as possible.
          </p>

          <div className="mt-8">

            <address className="mt-2 not-italic">📍 Based in Paris</address>
          </div>
        </motion.div>

        <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="rounded-lg bg-black p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="#" className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm font-bold text-black placeholder-black"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm font-bold text-black placeholder-black"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">Phone</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm font-bold text-black placeholder-black"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">Message</label>

              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm font-bold text-black placeholder-black"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div className="border border-gray-300 p-2 rounded-lg inline-block">
            <button
                type="submit"
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Send
              </button>
            </div>

          </form>

        </motion.div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
