import { Link } from "wouter";
import CloverIcon from "@/components/ui/clover-icon";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useThemeColors } from "@/lib/theme-colors";
import { useLanguage } from "@/lib/language-context";

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
                <CloverIcon white />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">Trevo</h3>
                <p style={{ color: colors.accent }} className="font-handwritten -mt-1 transition-colors duration-300">
                  COOLlectivo
                </p>
              </div>
            </Link>
            <p style={{ color: colors.footerText }} className="mb-4 transition-colors duration-300">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3">
              {['instagram', 'facebook-f', 'youtube', 'spotify'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  style={{ color: colors.text }}
                  className="hover:text-accent transition duration-300"
                  aria-label={platform}
                >
                  <i className={`fab fa-${platform} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {[
                { href: "/", textKey: "nav.home" },
                { href: "/about", textKey: "nav.about" },
                { href: "/programs", textKey: "nav.programs" },
                { href: "/fees", textKey: "nav.fees" },
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
            <h3 className="font-serif text-lg font-semibold mb-4">{t("footer.programs")}</h3>
            <ul className="space-y-2">
              {[
                "footer.programs.private",
                "footer.programs.group", 
                "footer.programs.workshops",
                "footer.programs.combo",
                "footer.programs.openDays",
              ].map((programKey) => (
                <li key={programKey}>
                  <Link
                    href="/programs"
                    style={{ color: colors.footerText }}
                    className="hover:text-white transition duration-300"
                  >
                    {t(programKey)}
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
                { icon: "envelope", text: "info@trevomusic.pt", href: "mailto:info@trevomusic.pt" },
                { icon: "phone", text: "Call Us" },
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

            <div style={{ backgroundColor: colors.cardBg }} className="mt-6 p-4 rounded-lg">
              <h4 className="font-medium text-white mb-2">{t("footer.newsletter.title")}</h4>
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder={t("footer.newsletter.placeholder")}
                  className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: colors.inputBg,
                    color: colors.inputText,
                    borderColor: colors.inputBorder,
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  style={{ backgroundColor: colors.accent }}
                  className="text-white px-4 py-2 rounded-lg font-medium transition duration-300 hover:opacity-90"
                  disabled={newsletterMutation.isPending}
                >
                  {newsletterMutation.isPending ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    <i className="fas fa-paper-plane"></i>
                  )}
                </button>
              </form>
            </div>
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