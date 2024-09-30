import { TECHNOLOGIES } from "../../data/Technologies";
import Badget from "../badget/Badget";


export default function MobileProfile() {
    return (
        <div className="relative mx-auto mt-10 w-[320px] h-[640px] bg-neutral-800 rounded-[40px] shadow-xl border-2 border-gray-700">
            {/* Contenedor del móvil */}
            <div className="grid grid-rows-2 h-full mt-10">
                <div className="flex flex-col items-center justify-center space-y-3">
                    <img
                        src="/resources/exampleImage.avif"
                        alt="Imagen de mi perfil"
                        className="h-40 w-40 rounded-full object-cover"
                    />
                    <h3>Marcos Riau Senar</h3>
                    <h4>Fullstack mobile developer</h4>
                    {/* Añadir chapas de habilidades */}
                    <div className="flex flex-wrap justify-center gap-2 m-4">
                        {
                            TECHNOLOGIES.map((tech) => (
                                <Badget key={tech.name} color={tech.color} name={tech.name} />
                            ))
                        }
                    </div>
                </div>

                {/* Parte inferior (texto y otras cosas) */}
                <div className="flex flex-col items-center text-center p-4 pt-10">
                    <p className="text-sm mb-4">
                        Bienvenido a mi portfolio,  aquí podrás encontrar algo de información sobre mi y algunos de mis proyectos.
                    </p>
                    {/* TODO: Añadir links a github y linkedin */}
                    <div className="grid grid-cols-2 gap-10 mt-11">
                        <div className="flex flex-col">
                            <a href="https://www.linkedin.com/in/marcos-riau-senar/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/resources/linkedinIcon.png"
                                    alt="enlace a mi perfil de linkedin"
                                    className="h-10 w-10"
                                />
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <a href="https://www.linkedin.com/in/marcos-riau-senar/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/resources/githubIcon.png"
                                    alt="enlace a mi perfil de linkedin"
                                    className="h-10 w-12"
                                />
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}