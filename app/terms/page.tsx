import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">Last updated: January 15, 2024</p>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using JobPortal ("the Service"), you agree to be bound by these Terms 
              and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              JobPortal is an online platform that connects job seekers with employers. We provide:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Job listing and search functionality</li>
              <li>Company profiles and information</li>
              <li>Application management tools</li>
              <li>Career resources and advice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features, you may need to create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and up-to-date information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Termination</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account if you violate these Terms 
              or engage in any harmful activities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using our Service, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Post false, misleading, or fraudulent information</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated tools to scrape or collect data</li>
              <li>Post spam or unsolicited content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content and Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">User Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of content you submit to our platform. However, by submitting 
              content, you grant us a license to use, modify, and display it in connection with our Service.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content and materials on our website are protected by intellectual property laws. 
              You may not copy, distribute, or create derivative works without our permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. Please review our Privacy Policy to understand how 
              we collect, use, and protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Service is provided "as is" and "as available." We make no warranties or 
              representations about:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>The accuracy or completeness of job listings</li>
              <li>The quality or legitimacy of employers</li>
              <li>Successful job placements</li>
              <li>Uninterrupted or error-free service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, JobPortal shall not be liable for any indirect, 
              incidental, special, or consequential damages arising from your use of our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify and hold JobPortal harmless from any claims, damages, or 
              expenses arising from your use of our Service or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of 
              significant changes via email or website notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="mt-4 text-gray-700">
              <p>Email: legal@jobportal.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Business Ave, San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}