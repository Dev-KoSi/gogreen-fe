import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import '../styles/TakeAction.css'


export function TakeAction() {

    const [value, setValue] = useState<number>(1);

    useEffect(() => {
        const id = setInterval(() => {
            setValue(prev => (prev >= 6 ? 1 : prev + 1));
        }, 10000);

        return () => clearInterval(id);
    }, []);

    return (
        <>
            <Header/>

            <section style={{height: '100vh'}}>
                <div className="action-landing">
                    {/* <div style={{marginTop: '50px'}}></div> */}
                    <img src={`/act-${value}.png`} />

                    <div className="head">
                        BE READY TO TAKE THE ACTION AND MAKE THE CHANGE
                    </div>
                </div>
            </section>

            <section id="actions" style={{height: '100vh'}}>
                <div className="head">
                    Small Act, Big Impact.
                </div>

                <div className="grid">
                    <div id="action" className="recycle">
                        <div className="img">
                            <img src="/recycle-action.avif" />
                        </div>

                        <div className="txt">
                            Don't be trashy! Recycle. Recycling isn’t just a habit, it’s a responsibility we all share to protect our planet for future generations.
                        </div>
                    </div>

                    <div id="action" className="affor">
                        <div className="img">
                            <img src="/affor-action.avif" />
                        </div>

                        <div className="txt">
                            Afforestation is more than planting trees—it’s planting hope, life, and a future for generations to come.
                        </div>
                    </div>

                    <div id="action" className="save-energy">
                        <div className="img">
                            <img src="/save-energy-action.jpg" />
                        </div>

                        <div className="txt">
                            Saving energy today means securing a cleaner, brighter, and more sustainable future for tomorrow.
                        </div>
                    </div>
                </div>
            </section>

            <div style={{marginTop: '50px'}}></div>
            
            <Footer/>
        </>
    )
}