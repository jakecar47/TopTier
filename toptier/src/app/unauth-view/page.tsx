import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import Card from "@/components/Card";

export default function Home() {
    return (
        <div>
            <header>
                <Navbar isLoggedIn={false} />
            </header>
            <Content />
        </div>
    );
} // unauth-view Home component
