import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const DefaultLayout = ({ children }: { children: any }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    <h2>{children}</h2>
                </div>

            </div>
        </div>
    )
}
