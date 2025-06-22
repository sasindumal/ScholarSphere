'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically handle authentication, e.g., an API call.
    // On success, store the JWT token and redirect.
    console.log(values);

    toast({
      title: "Login Successful",
      description: "Redirecting to your dashboard...",
    });
    
    // Simulate role-based redirection
    // const userRole = 'student'; // This would come from your auth response
    router.push('/dashboard');
  }

  return (
    <Card className="w-full max-w-md bg-card/60 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
        <CardDescription>Sign in to access your dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>University Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@university.edu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                   <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="/forgot-password"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex-col">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-semibold text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
