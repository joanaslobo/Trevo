import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { insertContactMessageSchema } from '@shared/schema';

// Extend the schema with more validation
const contactFormSchema = insertContactMessageSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const response = await apiRequest('POST', '/api/contact', values);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Message failed to send",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  function onSubmit(values: ContactFormValues) {
    contactMutation.mutate(values);
  }

    const ContactForm = () => {
        const { toast } = useToast();

        const form = useForm<ContactFormValues>({
            resolver: zodResolver(contactFormSchema),
            defaultValues: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
        });

        const contactMutation = useMutation({
            mutationFn: async (values: ContactFormValues) => {
                const response = await apiRequest('POST', '/api/contact', values);
                return response.json();
            },
            onSuccess: () => {
                toast({
                    title: "Message sent!",
                    description: "We'll get back to you as soon as possible.",
                });
                form.reset();
            },
            onError: (error: any) => {
                toast({
                    title: "Message failed to send",
                    description: error?.message || "Please try again later.",
                    variant: "destructive",
                });
            }
        });

        function onSubmit(values: ContactFormValues) {
            contactMutation.mutate(values);
        }

        return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a subject" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="private-lessons">Private Lessons</SelectItem>
                                        <SelectItem value="group-classes">Group Classes</SelectItem>
                                        <SelectItem value="workshops">Workshops</SelectItem>
                                        <SelectItem value="open-days">Open Days</SelectItem>
                                        <SelectItem value="other">Other Inquiry</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Enter your message" rows={4} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full bg-[#1a7a3d] hover:bg-[#156e35]"
                        disabled={contactMutation.isPending}
                    >
                        {contactMutation.isPending ? (
                            <>
                                <i className="fas fa-spinner fa-spin mr-2"></i>
                                Sending...
                            </>
                        ) : "Send Message"}
                    </Button>
                </form>
            </Form>
        );
    };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#e6f5ec]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a7a3d]">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-[#c66b3e] mx-auto mt-4 mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-[#333333]">
            Reach out to join our COOLlectivo or get more information about our programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-[#1a7a3d] mb-6">
                  Send Us a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-[#c66b3e] mb-6">
                  Find Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-[#c66b3e] mr-4 mt-1">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p>Porto, Portugal</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#c66b3e] mr-4 mt-1">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p>info@trevomusic.pt</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#c66b3e] mr-4 mt-1">
                      <i className="fas fa-phone text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p>Call Us</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#c66b3e] mr-4 mt-1">
                      <i className="fas fa-clock text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Hours</h4>
                      <p>Monday-Friday: 9:00 - 21:00<br/>Saturday: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-[#f4b942] mb-6">
                  Connect With Us
                </h3>
                <div className="flex gap-4 mb-6">
                  <a href="#" className="w-12 h-12 bg-[#1a7a3d] hover:bg-[#156e35] text-white rounded-full flex items-center justify-center transition duration-300" aria-label="Instagram">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#1a7a3d] hover:bg-[#156e35] text-white rounded-full flex items-center justify-center transition duration-300" aria-label="Facebook">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#1a7a3d] hover:bg-[#156e35] text-white rounded-full flex items-center justify-center transition duration-300" aria-label="YouTube">
                    <i className="fab fa-youtube text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#1a7a3d] hover:bg-[#156e35] text-white rounded-full flex items-center justify-center transition duration-300" aria-label="Spotify">
                    <i className="fab fa-spotify text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;