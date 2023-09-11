import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { useModalContext } from '../../../shared/lib/modal/modal.hook';
import MealInnerDetails from '../../meal-inner-details/ui/meal-inner-details';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default () => {
  const { modalData, setModalData } = useModalContext();

  if (!modalData.isVisible) {
    return null;
  }

  const closeModal = () => {
    setModalData({ isVisible: false });
  };

  const isMealInnerDetailsVisible = modalData.type === 'steps' || modalData.type === 'ingredients';

  return <>
  <StatusBar style='dark' />
<Modal visible={modalData.isVisible} animationType='fade'
>
        <View style={styles.root}>
              <Pressable style={styles.closeButton} onPress={closeModal}>
                <Ionicons name="arrow-back" size={31} color="black" />
              </Pressable>
                {isMealInnerDetailsVisible && <MealInnerDetails />}
            </View>
    </Modal>
</>;
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#F2D1A8',
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    left: 20,
    top: 55,
    zIndex: 1
  }

});
