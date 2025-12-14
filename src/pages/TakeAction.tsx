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

            <div style={{marginTop: '50px'}}></div>
            
            <Footer/>
        </>
    )
}