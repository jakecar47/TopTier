import CardGridUserScores from "@/components/CardGridUserScores";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <main className="flex-1 p-6">
          <Card>
            <CardGridUserScores />
          </Card> 
        </main>
      </div>
    </div>
  );
} // show-items Home component
