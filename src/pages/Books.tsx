import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import '../styles/Books.css'

export function Books() {
    const navigate = useNavigate();

    return (
        <>
            <header className="books-header">
                <svg onClick={() => navigate('/learn')} xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" width={34} height={24} viewBox="0 0 512 243.58"><path fill-rule="nonzero" d="M138.43 243.58 0 122.84 140.47 0l20.92 23.91-94.92 83 445.53-.42v31.75l-445.54.41 92.89 81.02z"/></svg>

                <div className="overlay">
                    <div className="head">
                        Welcome To The Bookshelf
                    </div>

                    <div className="txt">
                        We’re glad you’re here. This space is all about learning, exploring, and empowering action. Below, you’ll find a collection of free books dedicated to climate change—covering everything from the science behind it to the solutions shaping a sustainable future.
                    </div>
                </div>
            </header>

            <section className="books-search">
                <input placeholder="Search books..."/>

                <svg fill="none" stroke="currentColor" width="20" height="20" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </section>

            <div id="bb">

            </div>

            <Footer/>
        </>
    )
}