import { categoryModel } from '../../entities/category';
import { CategoryList } from '../../widgets/category-list';

export const Screen = () => {
  const { data } = categoryModel.hooks.useQuery();

  return <CategoryList data={data} />;
};
