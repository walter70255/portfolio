import { Section } from "./Section";
import { Card } from "./Card";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Shamvil delivered our marketplace app on time and was very responsive to feedback. His ability to handle both the frontend and backend made the process smooth and fast. Would definitely hire again.",
      author: "Nihana Niamath",
      role: "Founder of Lakmart"
    },
    {
      quote: "Thanks to Shamvil's queue system, our waiting time dropped dramatically and customer satisfaction improved. He understood our needs and delivered a complete robust solution. Great communication despite the time difference.",
      author: "Jihil Rahman",
      role: "Owner of Jazz Stylist"
    }
  ];

  return (
    <Section id="testimonials" className="bg-background">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Client <span className="text-primary">Testimonials</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Don&apos;t just take my word for it. Here&apos;s what founders and business owners have to say.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((test, idx) => (
          <Card key={idx} className="relative p-8 md:p-10 flex flex-col h-full mt-4 group">
            <div className="absolute -top-6 left-8 bg-primary rounded-full p-3 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>
            
            <blockquote className="mt-4 mb-8 text-lg text-muted-foreground leading-relaxed flex-grow italic">
              &quot;{test.quote}&quot;
            </blockquote>
            
            <div className="mt-auto border-t border-border pt-4">
              <p className="font-bold text-foreground text-lg">{test.author}</p>
              <p className="text-primary text-sm font-medium">{test.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
