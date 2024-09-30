"use client"
import MagicText from "../components/magicText/MagicText";
import MobileProfile from "../components/mobileProfile/MobileProfile";

export default function SectionOne() {
    return (
        <section className="h-screen w-screen flex justify-center items-center snap-start bg-neutral-900">
            <div className="grid grid-cols-3 w-full h-full">
                {/* Parte izquierda */}
                <div className="col-span-2 flex justify-center items-center m-10 gap-3">
                    {/* Aquí puedes poner cualquier contenido que desees para la izquierda */}
                    <p className="text-5xl">Especializado en...</p>
                    <MagicText />
                </div>

                {/* Parte derecha */}
                <div className="flex justify-center items-center">
                    {/* Aquí puedes poner cualquier contenido que desees para la derecha */}
                    <MobileProfile />
                </div>
            </div>
        </section>
    );
}