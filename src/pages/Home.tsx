import { Header } from "../components/Header";
import "../styles/Home.css"


export function Home() {

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

                    <img src="/home-seed.jpg" alt="" />
                </div>
            </section>
        </>
    )
}