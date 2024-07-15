
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      bio: "John is the visionary behind our company, leading with innovation and passion.",
      photo: "https://images.pexels.com/photos/7562139/pexels-photo-7562139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Jane is the tech guru, ensuring our technology is cutting-edge and reliable.",
      photo: "https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Emily Johnson",
      role: "Marketing Head",
      bio: "Emily drives our marketing strategies with creativity and expertise.",
      photo: "https://images.pexels.com/photos/3021563/pexels-photo-3021563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="p-10 bg-slate-50 text-slate-600">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p><FaPhone className="inline mr-2" /> Phone: (123) 456-7890</p>
        <p><FaEnvelope className="inline mr-2" /> Email: contact@campershop.com</p>
        <p><FaMapMarkerAlt className="inline mr-2" /> Address: Chittagong, Bangladesh</p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.2298999781967!2d91.80783781533355!3d22.46978798524495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad27083233bf4d%3A0x6752479c26e54d1c!2sUniversity%20of%20Chittagong!5e0!3m2!1sen!2sbd!4v1621168982448!5m2!1sen!2sbd" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          loading="lazy"
          className="w-full h-96 rounded-lg"
        ></iframe>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-blue-600" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-blue-400" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-pink-500" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-700" />
          </a>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>At CampQuest, our mission is to provide high-quality camping gear that enhances your outdoor adventures. We value sustainability, innovation, and customer satisfaction above all.</p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md text-center">
              <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
