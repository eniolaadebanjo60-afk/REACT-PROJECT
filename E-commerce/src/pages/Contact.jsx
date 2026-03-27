import{Link} from 'react-router-dom'
import { useState } from 'react'
import './Contact.css'

function Contact(){

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thanks for reaching out! We\'ll get back to you within 24 hours.'
      });
  
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1000);
  };
    
  return (
    <div className='contact-page'>
      <div className='contact-hero'>
        <h1>Contact <span>Us</span></h1>
        <p>We'd love to hear from you! Get in touch with our team</p>
      </div>

      <div className='contact-container'>
        {/* Contact Info Cards */}
        <div className='contact-info-cards'>
          <div className='info-card'>
            <div className='info-icon'>📍</div>
            <h3>Visit Us</h3>
            <p>123 Commerce Street<br />New York, NY 10001<br />United States</p>
          </div>
          
          <div className='info-card'>
            <div className='info-icon'>📞</div>
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567<br />Mon-Fri, 9am-6pm EST</p>
          </div>
          
          <div className='info-card'>
            <div className='info-icon'>✉️</div>
            <h3>Email Us</h3>
            <p>support@yourstore.com<br />help@yourstore.com</p>
          </div>
          
          <div className='info-card'>
            <div className='info-icon'>💬</div>
            <h3>Live Chat</h3>
            <p>Available 24/7<br />Click the chat icon below</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className='contact-form-section'>
          <div className='contact-form-container'>
            <h2>Send Us a Message</h2>
            <p>Have questions? Fill out the form and we'll respond within 24 hours.</p>
            
            {formStatus.submitted && (
              <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-error'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className='contact-form'>
              <div className='form-group'>
                <label htmlFor='name'>Your Name *</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='John Doe'
                />
              </div>
              
              <div className='form-group'>
                <label htmlFor='email'>Email Address *</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='john@example.com'
                />
              </div>
              
              <div className='form-group'>
                <label htmlFor='subject'>Subject *</label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder='Order Inquiry, Product Question, etc.'
                />
              </div>
              
              <div className='form-group'>
                <label htmlFor='message'>Message *</label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='6'
                  placeholder='Tell us how we can help...'
                ></textarea>
              </div>
              
              <button 
                type='submit' 
                className='submit-btn'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
          
          <div className='map-container'>
            <h2>Find Us</h2>
            <div className='map-placeholder'>
              <iframe
                title='Store Location'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb13b15%3A0x8c7c2c1a5e8c9e5f!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1645567890123!5m2!1sen!2sus'
                width='100%'
                height='300'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
              ></iframe>
            </div>
            
            <div className='business-hours'>
              <h3>Business Hours</h3>
              <ul>
                <li><span>Monday - Friday:</span> 9:00 AM - 6:00 PM</li>
                <li><span>Saturday:</span> 10:00 AM - 4:00 PM</li>
                <li><span>Sunday:</span> Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Contact