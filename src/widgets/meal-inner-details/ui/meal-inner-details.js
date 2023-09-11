import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { mealsModel } from '../../../entities/meal';
import { useModalContext } from '../../../shared/lib/modal/modal.hook';
import { toCapitalize } from '../../../shared/lib/texts/utils';

export default () => {
  const { modalData } = useModalContext();

  const { data = [] } = mealsModel.hooks.useByIdQuery(modalData.data?.mealId);

  return <ScrollView style={styles.listContainer}>
                <View style={styles.listTitleContainer}>
                    <Text style={styles.listTitle}>{toCapitalize(modalData.data.title)}</Text>
                </View>
                <View style={styles.list}>
                    {data[modalData.data?.title]?.map((it) => <Text key={it}t style={styles.listItem}>{it}</Text>)}
                </View>
        </ScrollView>;
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20
  },
  listTitleContainer: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  },
  listTitle: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center'
  },
  list: {
    marginBottom: 20,
    gap: 5
  },
  listItem: {
    padding: 10,
    borderRadius: 5,
    overflow: 'hidden',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#c5904f'
  }
});
