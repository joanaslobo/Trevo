import { Link } from "wouter";
import CloverIcon from "@/components/ui/clover-icon";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useThemeColors } from "@/lib/theme-colors";
import { useLanguage } from "@/lib/language-context";
import trevo from '@/assets/images/teachers/trevo.png';

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const colors = useThemeColors();
  const { t } = useLanguage();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <footer
      style={{ backgroundColor: colors.footerBg }}
      className="text-white pt-16 pb-6 transition-colors duration-300 shadow-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="scale-75">
                <img src={trevo} alt="Trevo Coolectivo Logo" className="w-16 h-16" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">Trevo</h3>
                <p style={{ color: colors.accent }} className="font-handwritten -mt-1 transition-colors duration-300">
                  COOLlectivo
                </p>
              </div>
            </Link>
           
            <div className="flex gap-3">
              {[
                { name: "instagram", url: "https://www.instagram.com/trevocoolectivo/?igsh=MTdra29lcTd1cWNsNA%3D%3D" },
                { name: "spotify", url: "https://open.spotify.com/artist/yourid" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: colors.text }}
                  className="hover:text-accent transition duration-300"
                  aria-label={platform.name}
                >
                  <i className={`fab fa-${platform.name} text-xl`}></i>
                </a>
              ))}
            </div>

          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {[
                { href: "/", textKey: "nav.home" },
                { href: "/teachers", textKey: "nav.teachers" },
                { href: "/programs", textKey: "nav.methodology" },
                { href: "/contact", textKey: "nav.contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: colors.footerText }}
                    className="hover:text-white transition duration-300"
                  >
                    {t(link.textKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

      

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-2">
              {[
                { icon: "map-marker-alt", text: "Porto, Portugal" },
                { icon: "map-marker-alt", text: "Ílhavo, Portugal" },
                { icon: "envelope", text: "trevocoolectivo@gmail.com", href: "mailto:trevocoolectivo@gmail.com" },
                ].map((item) => (
                <li key={item.icon} className="flex items-center gap-2">
                  <i style={{ color: colors.accent }} className={`fas fa-${item.icon}`}></i>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{ color: colors.footerText }}
                      className="hover:text-white transition duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ color: colors.footerText }}>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>

           
          </div>
        </div>

        <div style={{ borderColor: colors.border }} className="border-t pt-6 text-center text-sm">
          <p style={{ color: colors.footerText }}>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;