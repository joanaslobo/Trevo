import { Link } from 'wouter';
import CloverIcon from '@/components/ui/clover-icon';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest('POST', '/api/newsletter', { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      setEmail('');
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <footer className="bg-[#1a7a3d] text-white pt-16 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="scale-75">
                <CloverIcon white />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">Trevo</h3>
                <p className="font-handwritten text-[#f4b942] -mt-1">COOLlectivo</p>
              </div>
            </Link>
            <p className="text-[#9dd6b7] mb-4">
              Where Irish tradition meets Portuguese passion in the heart of Porto.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="text-white hover:text-[#f4b942] transition duration-300" 
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#f4b942] transition duration-300" 
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#f4b942] transition duration-300" 
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#f4b942] transition duration-300" 
                aria-label="Spotify"
              >
                <i className="fab fa-spotify text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#9dd6b7] hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#9dd6b7] hover:text-white transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[#9dd6b7] hover:text-white transition duration-300">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/fees" className="text-[#9dd6b7] hover:text-white transition duration-300">
                  Fees & Schedule
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#9dd6b7] hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-[#9dd6b7] hover:text-white transition duration-300">
                  Private Lessons
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[#9dd6b7] hover:text-white transition duration-300">
                  Group Classes
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[#9dd6b7] hover:text-white transition duration-300">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[#9dd6b7] hover:text-white transition duration-300">
                  Combo Classes
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[#9dd6b7] hover:text-white transition duration-300">
                  Open Days
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-[#f4b942]"></i>
                <span className="text-[#9dd6b7]">Porto, Portugal</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-[#f4b942]"></i>
                <a 
                  href="mailto:info@trevomusic.pt" 
                  className="text-[#9dd6b7] hover:text-white transition duration-300"
                >
                  info@trevomusic.pt
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-[#f4b942]"></i>
                <span className="text-[#9dd6b7]">Call Us</span>
              </li>
            </ul>

            <div className="mt-6 bg-[#156e35] p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">Join Our Newsletter</h4>
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a7a3d] focus:border-transparent text-[#333333]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#f4b942] hover:bg-[#e79c0d] text-white px-4 py-2 rounded-lg font-medium transition duration-300"
                  disabled={newsletterMutation.isPending}
                >
                  {newsletterMutation.isPending ? 
                    <i className="fas fa-spinner fa-spin"></i> : 
                    <i className="fas fa-paper-plane"></i>
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#156e35] pt-6 text-center text-[#9dd6b7] text-sm">
          <p>© {new Date().getFullYear()} Trevo Music School & COOLlectivo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
