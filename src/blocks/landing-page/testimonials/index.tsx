import { Testimonials, TestimonialsProps } from "@/blocks/landing-page/testimonials/ui";

export type TestimonialsContainerProps = TestimonialsProps;

export function TestimonialsContainer(props: TestimonialsProps) {
  return <Testimonials {...props} />;
}
