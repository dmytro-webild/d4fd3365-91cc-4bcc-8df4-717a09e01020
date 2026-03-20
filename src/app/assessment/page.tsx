"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AssessmentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    yardSize: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log the form data (replace with actual API call)
      console.log('Assessment Form Submitted:', formData);
      
      setSubmitted(true);
      
      // Reset form after 3 seconds and redirect
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="largeSmall"
      background="noise"
      cardStyle="inset"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Land Care 4 U"
          navItems={[
            { name: "Our Work", id: "showcase" }
          ]}
          button={{ text: "Back to Home", href: "/" }}
        />
      </div>

      <div className="min-h-screen bg-gradient-to-b from-background to-card py-12 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Thank You!</h2>
              <p className="text-lg text-foreground/70 mb-4">
                We've received your yard assessment request. Our team will contact you shortly at {formData.phone}.
              </p>
              <p className="text-sm text-foreground/50">Redirecting to home...</p>
            </div>
          ) : (
            <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Free Yard Assessment</h1>
              <p className="text-foreground/70 mb-8">
                Tell us about your yard and we'll contact you to schedule your free assessment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                      placeholder="123 Main St, City, State"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="yardSize" className="block text-sm font-medium text-foreground mb-2">
                    Approximate Yard Size
                  </label>
                  <select
                    id="yardSize"
                    name="yardSize"
                    value={formData.yardSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                  >
                    <option value="">Select yard size...</option>
                    <option value="small">Small (Under 1/4 acre)</option>
                    <option value="medium">Medium (1/4 - 1/2 acre)</option>
                    <option value="large">Large (1/2 - 1 acre)</option>
                    <option value="xlarge">Extra Large (Over 1 acre)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your yard and what you'd like to improve *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                    placeholder="Describe any issues, your vision for your yard, budget concerns, timeline, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-primary-cta text-primary-cta-text font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Request Free Assessment'}
                </button>

                <p className="text-xs text-foreground/50 text-center">
                  We'll call you within 24 hours to schedule your free yard assessment.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}