import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Security Engineer and CISSP certified",
                    "I help businesses 10x their growth with the help of safeguarding assets",
                    "Strengthening Security, Identifying Vulnerabilities ",
                    "Ex-Dwolla, Ex-MIT, EX-NEU",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
