import '../styles/Profile.css'

export function Profile() {

    return(
        <section className='profile'>
            <div className="head">
                <div style={{width: '80px'}} className="p-pic">
                    <img src="/p-pic.webp" alt="" />
                </div>

                <div className="name-email">
                    <div className="name">
                        Kojo Sika
                    </div>

                    <div className="email">
                        otpog23@gmail.com
                    </div>
                </div>
            </div>

            <div className="status">
                🎯 Focusing
            </div>

            <nav>
                <div className="account">
                    Account
                </div>

                <div className="archive">
                    Archive
                </div>
            </nav>

            <div className="logout">
                Log Out
            </div>
        </section>
    )
}