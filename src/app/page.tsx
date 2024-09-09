import SectionProductsAnime from "@/components/sections-main/SectionProductsAnime"
import SectionProductsKpop from "@/components/sections-main/SectionProductsKpop"

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <SectionProductsKpop />
      <SectionProductsAnime />
    </div>
  )
}

export default HomePage
