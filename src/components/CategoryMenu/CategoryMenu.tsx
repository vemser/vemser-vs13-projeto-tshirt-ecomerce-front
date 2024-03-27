import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { CategoryMenuProps } from '../../types/CategoryMenuProps';



function CategoryMenu({ categories, setCategory }: CategoryMenuProps) {
  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Categorias</h2>
      <List component="nav">
        {categories.map((cat, index) => (
          <div key={index}>
            <ListItem button onClick={() => handleCategoryChange(cat)}>
              <ListItemText primary={cat} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </>
  );
}

export default CategoryMenu;
