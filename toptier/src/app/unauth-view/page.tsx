import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import Card from "@/components/Card";

export default function Home() {
    return (
    <div>
        <header>
        <Card>
            <Navbar isLoggedIn={false}/>
        </Card>
        </header>
        <Card>
            <Content />
        </Card>
      </div>
    );
} // unauth-view Home component
