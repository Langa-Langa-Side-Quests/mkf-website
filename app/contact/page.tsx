"use client";

import React, { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mail, Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    setIsPending(false);

    if (result.success) {
      setStatus({ 
        success: true, 
        message: "Thank you! Your inquiry has been sent successfully." 
      });
      (event.target as HTMLFormElement).reset(); 
    } else {
      setStatus({ 
        success: false, 
        message: result.error || "Failed to send message. Please try again." 
      });
    }
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Connect With Us</h1>
        <p className="text-slate-500">Reach out directly to our headquarters location inside Tororo Municipality.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info Sidebar Column */}
        <div className="space-y-4 md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MapPin className="text-blue-700" /> Location
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              Agururu 1A, Tororo Municipality, Tororo District<br />
              P.O. Box 300504, Tororo
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Mail className="text-emerald-600" /> Email Channels
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 break-all space-y-1">
              <p>info@mamakevinafoundation.org</p>
              <p>mamakevinafoundation@gmail.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Phone className="text-orange-600" /> Telephone
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-1">
              <p>+256 701 963704</p>
              <p>+256 772 303785</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Input Form Component */}
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Status Alert Banner */}
                {status && (
                  <div className={`p-4 rounded-xl flex gap-3 text-sm font-medium border ${
                    status.success 
                      ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
                      : "bg-red-50 border-red-200 text-red-800"
                  }`}>
                    {status.success ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-700">Your Name</label>
                    <Input id="name" name="name" type="text" placeholder="Name" required disabled={isPending} />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-700">Email Address</label>
                    <Input id="email" name="email" type="email" placeholder="email@example.com" required disabled={isPending} />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-700">Subject</label>
                  <Input id="subject" name="subject" type="text" placeholder="Partnership Opportunity / Child Sponsorship" required disabled={isPending} />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-700">Message Text</label>
                  <Textarea id="message" name="message" placeholder="Write down your inquiry details here..." rows={5} required disabled={isPending} />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isPending} 
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium flex items-center justify-center gap-2"
                >
                  {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                  {isPending ? "Sending Message..." : "Submit Form Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}