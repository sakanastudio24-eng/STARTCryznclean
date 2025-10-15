import Section from "../components/layout/Section";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <Section>
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-3">Page not found</h1>
        <p className="text-base leading-7 text-muted-foreground mb-6">Sorry, we couldn’t find the page you’re looking for.</p>
        <Button asChild>
          <a href="/">Back to home</a>
        </Button>
      </div>
    </Section>
  );
}
