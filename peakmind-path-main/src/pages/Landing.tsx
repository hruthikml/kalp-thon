import { NavLink } from 'react-router-dom';
import { Heart, Shield, Brain, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Landing = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get personalized recommendations based on your journal entries and mood patterns.',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data is encrypted end-to-end. We never share your personal information.',
    },
    {
      icon: Users,
      title: 'Student Focused',
      description: 'Designed specifically for students dealing with academic stress and life transitions.',
    },
  ];

  const benefits = [
    'Track your mood and mental health patterns',
    'Get personalized mindfulness recommendations',
    'Chat with an AI companion 24/7',
    'Access evidence-based wellness resources',
    'Completely private and secure',
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-calm p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-semibold">MindfulU</span>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink
              to="/signin"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </NavLink>
            <Button asChild>
              <NavLink to="/signup">Get Started</NavLink>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Your Mental Health
            <span className="bg-gradient-calm bg-clip-text text-transparent"> Companion</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI-powered support designed for students. Track your mood, journal your thoughts, 
            and get personalized recommendations in a completely private environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <NavLink to="/signup">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Your Wellbeing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform combines the latest in AI technology with evidence-based mental health practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center border-0 shadow-card hover:shadow-soft transition-shadow">
              <div className="bg-gradient-calm p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Everything you need for better mental health
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-soft rounded-2xl p-8 text-center">
              <div className="bg-gradient-calm p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Your Privacy Matters
              </h4>
              <p className="text-muted-foreground">
                All your data is encrypted and stored securely. We follow HIPAA guidelines 
                and never share your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-calm rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to prioritize your mental health?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using MindfulU to improve their wellbeing.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            <NavLink to="/signup">
              Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center border-t border-border">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="bg-gradient-calm p-2 rounded-lg">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold">MindfulU</span>
        </div>
        <p className="text-muted-foreground">
          Empowering students with AI-powered mental health support.
        </p>
      </footer>
    </div>
  );
};

export default Landing;