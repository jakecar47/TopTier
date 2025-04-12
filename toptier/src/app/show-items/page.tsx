import Navbar from "@/components/Navbar";
import Content from "@/components/Content";

interface HomeProps {
    isLoggedIn: boolean;
} // HomeComponents

export default function Home(props: HomeProps) {

    return (
        <div>
        <header>
          <Navbar isLoggedIn={props.isLoggedIn}/>
        </header>
        <main>
            <Content />
        </main>
      </div>
      );
} // show-items Home component