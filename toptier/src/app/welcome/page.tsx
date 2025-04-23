import Welcome from "@/components/Welcome";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function WelcomePage() {
    return (
        <div>
            <Card>
                <Navbar isLoggedIn={false}/>
            </Card>
            <Card>
                <Welcome />
            </Card>
        </div>
    );
} // welcome page Home component