import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import "../styles/Home.css"
import { Footer } from "../components/Footer";


export function Home() {

    const [value, setValue] = useState<number>(1);

    useEffect(() => {
        const id = setInterval(() => {
            setValue(prev => (prev >= 8 ? 1 : prev + 1));
        }, 5000);

        return () => clearInterval(id);
    }, []);

    return (
        <>
            <Header/>

            <section className="homepage">
                <div className="flex">
                    <div className="welcome">
                        <div className="head">
                            Learn, Act & Make The Difference
                        </div>

                        <div className="note">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, sapiente! Libero, error modi iste natus repudiandae corporis, vel, voluptate commodi sapiente quidem amet! Officia corrupti impedit voluptatum fugiat ea officiis.
                        </div>

                        <div className="btn">
                            <button>GET STARTED</button>
                        </div>
                    </div>

                    <div className="img">
                        <img src={`/home-${value}.jpg`}/>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}