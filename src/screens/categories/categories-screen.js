import { useCategories } from '../../entities/category/model/hooks';
import { CategoryList } from '../../widgets/category-list/category-list';

export const Screen = () => {
  const { data } = useCategories();

  return <CategoryList data={data} />;
};
