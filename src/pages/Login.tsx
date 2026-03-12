
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { LogIn, User } from 'lucide-react';
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login success
    toast.success("Login successful!");
    navigate('/dashboard');
  };
  
  return (
    <Layout hideFooter>
      <div className="min-h-[80vh] flex items-center justify-center py-12">
        <div className="w-full max-w-md px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-movie-blue/20 flex items-center justify-center mx-auto mb-6">
              <LogIn size={24} className="text-movie-blue" />
            </div>
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-white/70 mt-2">Sign in to continue your movie journey</p>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <form onSubmit={handleLogin} className="space-y-6">
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
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-movie-blue hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-movie-darker border-white/20"
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">Remember me</Label>
              </div>
              
              <Button type="submit" className="w-full bg-movie-blue hover:bg-movie-blue/80">
                Sign In
              </Button>
            </form>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-white/70">
              Don't have an account?{' '}
              <Link to="/signup" className="text-movie-blue hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
