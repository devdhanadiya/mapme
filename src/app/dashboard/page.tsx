import Background from "@/components/Background";
import CardSection from "@/components/CardSection";
import { Separator } from "@/components/ui/separator";
import ProgressSection from "@/components/ProgressSection";

export default function Page() {
    return (
        <div className='w-full h-screen' >
            <div>
                <div className="flex flex-col items-center justify-center h-screen w-full">
                    <div className="w-full h-2/3 px-4 pb-0">
                        <CardSection />
                    </div>
                    <Separator className='w-full h-[4px] bg-gradient-to-b from-black via-gray-800 to-black shadow-lg blur-[1px]' />
                    <div className="w-full h-1/3 flex items-center justify-center">
                        <ProgressSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
