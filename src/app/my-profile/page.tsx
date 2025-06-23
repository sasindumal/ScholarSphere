'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

export default function MyProfilePage() {
  // Placeholder state for user data - replace with actual fetched data
  const [profile, setProfile] = useState({
    firstname: 'John', // Replace with actual data
    lastname: 'Doe', // Replace with actual data
    username: 'johndoe', // Replace with actual data
    email: 'john.doe@eng.jfn.ac.lk' // Added email to profile object
  });

  const [email, setEmail] = useState(profile.email);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email.endsWith('@eng.jfn.ac.lk')) {
      setEmailError('University email must end with @eng.jfn.ac.lk');
      return;
    } else {
      setEmailError('');
    }

    // Basic password validation (if changing password)
    if (newPassword || confirmPassword || currentPassword) {
        if (newPassword !== confirmPassword) {
            setPasswordError("New password and confirm password do not match.");
            return;
        }
        if (newPassword.length < 8) {
             setPasswordError("New password must be at least 8 characters long.");
             return;
        }
        // You would also validate currentPassword against the backend
    }
    setPasswordError(''); // Clear password errors if validation passes

    // Handle profile update logic here
    console.log('Profile updated:', profile);
    console.log('Password update attempt:', { currentPassword, newPassword, email });
    // You would typically send this data to an API
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile(prevProfile => ({
        ...prevProfile,
        [id]: value
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-6rem)]">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">My Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="grid gap-2"><Label htmlFor="firstname">First Name</Label><Input id="firstname" type="text" value={profile.firstname} onChange={handleProfileChange} /></div>
                 <div className="grid gap-2"><Label htmlFor="lastname">Last Name</Label><Input id="lastname" type="text" value={profile.lastname} onChange={handleProfileChange} /></div>
             </div>
             <div className="grid gap-2"><Label htmlFor="username">Username</Label><Input id="username" type="text" value={profile.username} onChange={handleProfileChange} disabled /></div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
               {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            <h3 className="text-lg font-semibold mt-4">Change Password</h3>
            <div className="grid gap-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
               {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
            {/* Add more profile fields as needed */}
            <Button type="submit" className="w-full">
              Update Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}