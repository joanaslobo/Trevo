
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

import { useToast } from '@/hooks/use-toast';
import { useThemeColors } from '@/lib/theme-colors';
import { useLanguage } from '@/lib/language-context';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  age: z.string().min(1, { message: "Age is required" }),
  classType: z.string().min(1, { message: "Please select a class type" }),
  instrument: z.string().min(1, { message: "Please select an instrument" }),
  location: z.string().min(1, { message: "Please select a location" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  comments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const colors = useThemeColors();
  const { t } = useLanguage();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      age: '',
      classType: '',
      instrument: '',
      location: '',
      phone: '',
      email: '',
      comments: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (values: FormValues) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Network error' }));
        throw new Error(errorData.message || 'Failed to send message');
      }
      
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

  function onSubmit(values: FormValues) {
    contactMutation.mutate(values);
  }

  return (
    <section id="contact" className="py-16 md:py-24" style={{ background: `linear-gradient(to bottom, ${colors.bgGradientFrom}, ${colors.bgGradientTo})` }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold" style={{ color: colors.primary }}>
            {t("contact.title")}
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 mb-6" style={{ backgroundColor: colors.secondary }}></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text }}>
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ backgroundColor: colors.cardBg }} className="rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: colors.text }}>{t("contact.form.name")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("contact.form.name")} {...field} style={{ backgroundColor: colors.inputBg, color: colors.inputText, borderColor: colors.inputBorder }} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: colors.text }}>Idade</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Idade" {...field} style={{ backgroundColor: colors.inputBg, color: colors.inputText, borderColor: colors.inputBorder }} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="classType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: colors.text }}>Tipo de Aula</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger style={{ backgroundColor: colors.inputBg, color: colors.inputText, borderColor: colors.inputBorder }}>
                                <SelectValue placeholder="Seleciona o tipo de aula" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="individual">Individual</SelectItem>
                              <SelectItem value="group">Grupo</SelectItem>
                              <SelectItem value="workshop">Workshop</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="instrument"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: colors.text }}>Instrumento</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger style={{ backgroundColor: colors.inputBg, color: colors.inputText, borderColor: colors.inputBorder }}>
                                <SelectValue placeholder="Seleciona o teu instrumento" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="guitar">Guitarra</SelectItem>
                              <SelectItem value="piano">Piano</SelectItem>
                              <SelectItem value="drums">Bateria</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: colors.text }}>Local</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger style={{ backgroundColor: colors.inputBg, color: colors.inputText, borderColor: colors.inputBorder }}>
                                <SelectValue placeholder="Seleciona onde queres praticar" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="porto">Porto</SelectItem>
                              <SelectItem value="ovar">Ovar</SelectItem>
                              <SelectItem value="ilhavo">Ílhavo</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: colors.text }}>{t("contact.form.phone")}</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder={t("contact.form.phone")} {...field} style={{ backgroundColor: colors.inputBg, color: colors.inputText, borderColor: colors.inputBorder }} />
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
                          <FormLabel style={{ color: colors.text }}>{t("contact.form.email")}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder={t("contact.form.email")} {...field} style={{ backgroundColor: colors.inputBg, color: colors.inputText, borderColor: colors.inputBorder }} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="comments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel style={{ color: colors.text }}>{t("contact.form.message")}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t("contact.form.message")}
                              className="min-h-[100px]"
                              {...field}
                              style={{ backgroundColor: colors.inputBg, color: colors.inputText, borderColor: colors.inputBorder }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      style={{ backgroundColor: colors.primaryBtnBg, color: colors.btnText }}
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? t("contact.form.sending") : t("contact.form.send")}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
