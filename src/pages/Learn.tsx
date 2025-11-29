import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import '../styles/Learn.css'


export function Learn() {

    return (
        <>
            <Header/>

            <section className=" learn first-page">
                <div id="head">
                    Learn About Climate Change
                </div>

                <div className="txt">
                    Explore our collection of books, PDFs, and articles to expand your knowledge about climate change and its impacts.
                </div>

                <div className="collection">
                    <div className="head">
                        Resources
                    </div>

                    <div className="grid">
                        <div className="books">
                            <img src="/books.webp" alt="" />
                            <div id="name">Books</div>
                        </div>

                        <div className="pdfs">
                            <img src="/pdfs.webp" alt="" />
                            <div id="name">PDFs</div>
                        </div>

                        <div className="articles">
                            <img src="/articles.avif" alt="" />
                            <div id="name">Articles</div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>
        </>
    )
}