import { Award, Users, TrendingUp, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const stats = [
    { icon: Users, label: 'Active Users', value: '100K+' },
    { icon: TrendingUp, label: 'Jobs Posted', value: '50K+' },
    { icon: Globe, label: 'Countries', value: '25+' },
    { icon: Award, label: 'Success Rate', value: '95%' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former VP of Engineering at major tech companies with 15+ years of experience.'
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      bio: 'Technical leader passionate about building scalable platforms that connect talent.'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Product',
      bio: 'Product strategist focused on creating exceptional user experiences.'
    },
    {
      name: 'David Wilson',
      role: 'Head of Marketing',
      bio: 'Growth expert dedicated to helping companies find the right talent.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About JobPortal
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to connect talented professionals with amazing opportunities. 
            Our platform makes it easy for job seekers to find their dream job and for 
            companies to discover exceptional talent.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center border-0 shadow-md">
                <CardContent className="p-8">
                  <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe that finding the right job shouldn't be a struggle. That's why we've 
              built a platform that makes job searching simple, transparent, and accessible to everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Job Seekers</h3>
                <p className="text-gray-600">
                  Access thousands of opportunities from top companies with a simple, 
                  intuitive search experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Companies</h3>
                <p className="text-gray-600">
                  Connect with qualified candidates and build your dream team with 
                  our powerful hiring tools.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <Globe className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-gray-600">
                  Breaking down geographical barriers to connect talent with 
                  opportunities worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              We're a passionate team of professionals dedicated to revolutionizing how people find work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}