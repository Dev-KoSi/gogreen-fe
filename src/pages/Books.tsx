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

            <section className="category c-s">
                <div className="head">
                    Climate Science
                </div>

                <div className="txt">
                    Explore the fundamentals of how our planet’s climate system works. These books break down the science behind global warming, greenhouse gases, extreme weather, and long-term climate trends—perfect for readers who want clear, evidence-based understanding.
                </div>

                <div className="grid">
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                </div>
            </section>

            <section className="category i">
                <div className="head">
                    Impacts
                </div>

                <div className="txt">
                    Dive into how climate change affects the world around us. From rising seas and shifting ecosystems to public health, agriculture, and economies, this section highlights the real-world consequences shaping communities and environments worldwide.
                </div>

                <div className="grid">
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                </div>
            </section>

            <section className="category s">
                <div className="head">
                    Solutions
                </div>

                <div className="txt">
                    Discover the paths toward a sustainable future. These books cover renewable energy, carbon reduction, climate-smart technologies, conservation strategies, and practical steps individuals and societies can take to reduce climate risks.
                </div>

                <div className="grid">
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                </div>
            </section>

            <section className="category p-s">
                <div className="head">
                    Policy & Society
                </div>

                <div className="txt">
                    Learn how governments, organizations, and communities respond to climate challenges. This category covers climate policy, global agreements, environmental law, climate justice, and the social movements pushing for systemic change.
                </div>

                <div className="grid">
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                </div>
            </section>

            <section className="category s-e">
                <div className="head">
                    Stories & Education
                </div>

                <div className="txt">
                    A collection of narrative-driven works, youth-friendly materials, and educational guides. Whether you’re looking for personal stories, accessible explanations for students, or engaging accounts of people fighting for the planet, this section has something for every reader.
                </div>

                <div className="grid">
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                    
                    <div className="book">
                        <img src="/mock-book.jpeg"/>

                        <div className="title">
                            Mock book
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}