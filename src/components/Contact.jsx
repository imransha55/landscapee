export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-green-100">
      <h2 className="text-3xl font-bold text-center text-green-800">Contact Us</h2>
      <form className="mt-8 max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded-lg border" />
        <input type="email" placeholder="Your Email" className="p-3 rounded-lg border" />
        <textarea placeholder="Your Message" rows="4" className="p-3 rounded-lg border"></textarea>
        <button className="bg-green-700 text-white py-3 rounded-lg hover:bg-green-800">Send Message</button>
      </form>
    </section>
  );
}
