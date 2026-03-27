import { ClipboardList, Layers, Factory, Package } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const stepIcons = [ClipboardList, Layers, Factory, Package];

const ServiceProcess = () => {
  const { language } = useLanguage();
  const copy = translations[language];

  return (
    <section id="layanan" className="py-20 md:py-28 bg-secondary">
      <div className="container text-center">
        <h2 className="section-heading">{copy.serviceProcess.heading}</h2>
        <p className="section-subheading mt-3">{copy.serviceProcess.subheading}</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.serviceProcess.steps.map((step, i) => {
            const Icon = stepIcons[i];

            return (
              <div key={step.title} className="relative group">
                <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="text-xs font-bold text-accent mb-2 tracking-wider">
                    {copy.serviceProcess.stepLabel} {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{step.desc}</p>
                </div>

                {i < copy.serviceProcess.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-border">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
