const ContactUs = () => {
    return (
      <div className="w-full p-6 max-w-3xl mx-auto pt-32">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Last updated: 11/04/2025
        </p>
  
        <p className="mb-6">
          We’d love to hear from you! Whether you have questions, feedback, or
          partnership inquiries, the <strong>HireHack</strong> team is here to
          help.
        </p>
  
        <h2 className="text-xl font-semibold mb-2">Our Contact Information</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Website: https://www.hirehack.ai</li>
          <li>Email/s: hirehack.ai@gmail.com, support@hirehack.ai</li>
        </ul>
  
        {/* <h2 className="text-xl font-semibold mb-2">Send Us a Message</h2>
        <form className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded-md p-2 text-sm bg-background"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-md p-2 text-sm bg-background"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full border rounded-md p-2 text-sm bg-background"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form> */}
      </div>
    );
  };
  
  export default ContactUs;
  