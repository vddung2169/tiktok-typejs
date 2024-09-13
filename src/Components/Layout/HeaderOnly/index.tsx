import Header from "../components/Header"

export const HeaderOnly = ({ children }: { children: any }) => {
    return (
        <div>
            <Header />
            <div className="container">

                <div className="content">
                    <h2>{children}</h2>
                </div>

            </div>
        </div>
    )
}
