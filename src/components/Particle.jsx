// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";


// import React from 'react'

// function Particle() {
//     const particlesInit = useCallback(async engine => {
//         console.log(engine);
//         await loadFull(engine);
//     }, []);

//     const particlesLoaded = useCallback(async container => {
//         await console.log(container);
//     }, []);



//   return (
//     <div>
//           <Particles
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={{
//                 background: {
//                     color: {
//                         value: "#RRGGBB",
//                     },
//                 },
//                 fpsLimit: 120,
//                 interactivity: {
//                     events: {
//                         onClick: {
//                             enable: true,
//                             mode: "push",
//                         },
//                         onHover: {
//                             enable: true,
//                             mode: "repulse",
//                         },
//                         resize: true,
//                     },
//                     modes: {
//                         push: {
//                             quantity: 1,
//                         },
//                         repulse: {
//                             distance: 2,
//                             duration: 0.4,
//                         },
//                     },
//                 },
//                 particles: {
//                     color: {
//                         value: "#ffffff",
//                     },
//                     links: {
//                         color: "#ffffff",
//                         distance: 2,
//                         enable: false,
//                         opacity: 0.1,
//                         width: 1,
//                     },
//                     collisions: {
//                         enable: true,
//                     },
//                     move: {
//                         directions: "none",
//                         enable: true,
//                         outModes: {
//                             default: "bounce",
//                         },
//                         random: true,
//                         speed: 1,
//                         straight: false,
//                     },
//                     number: {
//                         density: {
//                             enable: true,
//                             area: 2000,
//                         },
//                         value: 80,
//                     },
//                     opacity: {
//                         value: 0.5,
//                     },
//                     shape: {
//                         type: "circle",
//                     },
//                     size: {
//                         value: { min:1, max: 2 },
//                     },
//                 },
//                 detectRetina: true,
//             }}
          
//         />
//     </div>
//   )
// }

// export default Particle;

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import React from 'react'

function Particle() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none'
        }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "transparent", // Changed from "#RRGGBB" to transparent
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 1,
                            },
                            repulse: {
                                distance: 2,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 2,
                            enable: false,
                            opacity: 0.1,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 2000,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 2 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    )
}

export default Particle;