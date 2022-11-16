import CategoryItem from "../category-item/category-item.component";
import './category-menu.styles.scss'
import { categories } from "../../categories";

export default function CategoryMenu(){

    return(
        <div className='categories-container'>
        {categories.map((category) => (
          <CategoryItem key={category.id} category = {category}/>
        ))}
      </div>
    )

   
}