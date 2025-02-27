import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Background from "@/components/Background"

export default function Home() {
    return (
        <div>
            <Background>
                <Hero />
                <Features />
                <CTA />
                <Footer />
            </Background>
        </div>
    )
}

