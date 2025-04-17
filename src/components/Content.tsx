import Menu, { MenuItemData } from "@/components/Menu";
import CardGridContentList from "@/components/CardGridContentList";
import wordlepic from "@/assets/wordle.png";
import fortnitepic from "@/assets/fortnite.png";
import warzonepic from "@/assets/warzone.png";

export default function Content() {
    const sampleItems: MenuItemData[] = [
        {
          id: "1",
          icon: fortnitepic.src,
          label: "Fortnite",
        },
        {
          id: "2",
          icon: warzonepic.src,
          label: "Warzone",
        },
        {
          id: "3",
          icon: wordlepic.src,
          label: "Wordle",
        },
      ];
    
    return (
        <div>
            <div className="flex">
                <aside className="w-[320px] p-6 border-r-2 border-[#D4AF37]">
                    <Menu items={sampleItems} />
                </aside>
                <main className="flex-1 p-6">
                    <CardGridContentList />
                </main>
            </div>
        </div>
    );
} // Content