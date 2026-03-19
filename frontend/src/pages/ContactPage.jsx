import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { submitContactForm } from '../services/api';
import { pageMeta, siteConfig } from '../utils/site';

const initialForm = {
  name: '',
  email: '',
  message: ''
};

function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (formData.message.trim().length < 20) nextErrors.message = 'Message must be at least 20 characters.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validate()) {
      return;
    }

    try {
      setIsSubmitting(true);
      await submitContactForm(formData);
      setStatus({ type: 'success', message: 'Your message has been sent successfully.' });
      setFormData(initialForm);
      setErrors({});
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Seo title={pageMeta.contact.title} description={pageMeta.contact.description} />
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        description="Interested in our IT services or need advice? Then please get in touch and we will be glad to help."
      />

      <AnimatedSection className="section-space pt-0">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[1.75rem] p-7 glass-panel">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-[color:var(--primary)]" />
                <div>
                  <h3 className="font-semibold">Registered Address</h3>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--text-soft)]">{siteConfig.address}</p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.75rem] p-7 glass-panel">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-[color:var(--primary)]" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <div className="mt-2 space-y-1 text-sm leading-7 text-[color:var(--text-soft)]">
                    <p>9326744884</p>
                    <p>9834611381 (HR)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[1.75rem] p-7 glass-panel">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-[color:var(--primary)]" />
                <div>
                  <h3 className="font-semibold">Reach US</h3>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--text-soft)]">{siteConfig.email}</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] glass-panel">
              <iframe
                title="Xceller IT Services location"
                src="https://www.google.com/maps?q=Parsodi%20Nagpur%20Maharashtra%20440022&z=15&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] p-8 glass-panel md:p-10">
            <h2 className="font-display text-3xl font-bold">Send Us a Message</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--text-soft)]">
              Tell us about your requirement and we will get back to you with the best next step.
            </p>

            <div className="mt-8 grid gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border bg-transparent px-4 py-3 outline-none transition focus:border-[color:var(--primary)] soft-border"
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border bg-transparent px-4 py-3 outline-none transition focus:border-[color:var(--primary)] soft-border"
                  placeholder="name@company.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border bg-transparent px-4 py-3 outline-none transition focus:border-[color:var(--primary)] soft-border"
                  placeholder="Tell us about your project, support need, or training goal."
                />
                {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
              </div>
            </div>

            {status.message && (
              <div
                className={`mt-6 rounded-2xl px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'bg-emerald-500/15 text-emerald-500'
                    : 'bg-red-500/15 text-red-500'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 rounded-full bg-[color:var(--primary)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[color:var(--primary-strong)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
            </button>
          </form>
        </div>
      </AnimatedSection>
    </>
  );
}

export default ContactPage;
