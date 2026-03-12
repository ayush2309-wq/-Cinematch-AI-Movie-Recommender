
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { User } from 'lucide-react';
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate signup success
    toast.success("Account created successfully!");
    navigate('/dashboard');
  };
  
  return (
    <Layout hideFooter>
      <div className="min-h-[80vh] flex items-center justify-center py-12">
        <div className="w-full max-w-md px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-movie-yellow/20 flex items-center justify-center mx-auto mb-6">
              <User size={24} className="text-movie-yellow" />
            </div>
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-white/70 mt-2">Join MovieMatch and start your personalized movie journey</p>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-movie-darker border-white/20"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-movie-darker border-white/20"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-movie-darker border-white/20"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-movie-darker border-white/20"
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{' '}
                  <Link to="/terms" className="text-movie-blue hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-movie-blue hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              
              <Button type="submit" className="w-full bg-movie-yellow text-black hover:bg-movie-yellow/80">
                Create Account
              </Button>
            </form>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-white/70">
              Already have an account?{' '}
              <Link to="/login" className="text-movie-blue hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
