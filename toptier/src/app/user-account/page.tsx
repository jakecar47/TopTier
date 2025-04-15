import Menu, { MenuItemData } from '@/components/Menu';
import CardGridUserTopScore from '@/components/CardGridUserTopScore';
import wordlepic from '@/assets/wordle.png';
import fortnitepic from '@/assets/fortnite.png';
import warzonepic from '@/assets/warzone.png';

export default function Home() {
  return (
    <div>
      <div className="flex">
        <main className="flex-1 p-8">
          <CardGridUserTopScore />
        </main>
      </div>
    </div>
  );
} // show-items Home component
