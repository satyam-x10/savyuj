import Error404 from "@/components/pages/404";
import { Blog } from "@/components/pages/blog";
import { Footer } from "@/components/pages/footer";
import { Chat } from "@/components/pages/chat";
import { Discussion } from "@/components/pages/discussion";
import { Faq } from "@/components/pages/faq";
import { Groups } from "@/components/pages/groups";
import { LoginSignup } from "@/components/pages/login_signup";
import { Navbar } from "@/components/pages/navbar";
import { Profile } from "@/components/pages/profile";
import { Poll } from "@/components/pages/poll";
import { Premium } from "@/components/pages/premium";
import { Hero } from "@/components/pages/hero";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
