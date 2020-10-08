import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';

const SLOTS = [
  '12:00 AM',
  '2:00 AM',
  '4:00 AM',
  '6:00 AM',
  '8:00 AM',
  '10:00 AM',
  '12:00 PM',
  '2:00 PM',
  '4:00 PM',
  '6:00 PM',
  '8:00 PM',
  '10:00 PM',
];
export default class FilterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedslot: '',
      size: '',
    };
  }
  render() {
    var {isVisible, onCancel, onConfirm} = this.props;

    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => {
          if (onCancel) onCancel();
        }}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
          style={{}}
          behavior={Platform.select({
            android: 'height',
            ios: 'padding',
          })}
          enabled
          keyboardVerticalOffset={100}>
          <View style={styles.modalContainer}>
            <View style={styles.headcontainer}>
              <Text style={styles.reservetext}>{`Filters`}</Text>
            </View>

            <View style={styles.modalContent}>
              <View style={styles.detailcontainer}>
                <Text style={styles.selectslot}>Size</Text>
                <View style={styles.sizecontainer}>
                  <TextInput
                    keyboardType={'number-pad'}
                    maxLength={2}
                    style={styles.textinput}
                    value={this.state.size}
                    onChangeText={(size) => {
                      this.setState({size});
                    }}
                  />
                  <Text style={styles.people}>People</Text>
                </View>
              </View>
              <View style={styles.detailcontainer}>
                <Text style={styles.selectslot}>Select a slot</Text>
                <View style={styles.slotcontainer}>
                  {SLOTS.map((item, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        this.setState({
                          selectedslot: item,
                        });
                      }}
                      style={[
                        styles.slotchip,
                        {
                          backgroundColor:
                            item == this.state.selectedslot
                              ? '#FA8334'
                              : 'white',

                          borderColor:
                            item == this.state.selectedslot
                              ? '#FA8334'
                              : '#FA8334',
                          borderWidth: 1,
                        },
                      ]}>
                      <Text
                        style={[
                          styles.slottext,
                          {
                            color:
                              item == this.state.selectedslot
                                ? 'white'
                                : '#FA8334',
                          },
                        ]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View style={styles.btnrow}>
                <TouchableOpacity
                  style={[styles.deleteRowItem]}
                  onPress={() => {
                    this.setState({
                      selectedslot: '',
                      size: '',
                    });
                  }}>
                  <Text style={styles.deleteText}>{'Reset'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.deleteRowItem]}
                  onPress={() => {
                    if (onConfirm) {
                      onConfirm(this.state.selectedslot, this.state.size);
                    }
                  }}>
                  <Text style={styles.deleteText}>{'Apply'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',

    padding: 16,
  },
  headcontainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#388697',
    marginBottom: 16,
  },
  reservetext: {
    fontSize: 18,
    marginBottom: 16,
    color: '#388697',
    fontWeight: '700',
  },
  sizecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  modalContent: {
    width: '100%',
  },
  detailcontainer: {marginBottom: 16},
  deleteRow: {
    width: '100%',
  },
  selectslot: {
    fontSize: 16,
  },
  deleteRowItem: {
    backgroundColor: '#271033',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    paddingVertical: 12,
    borderRadius: 5,
  },
  slotcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  slotchip: {
    marginRight: 10,
    backgroundColor: 'red',
    marginBottom: 8,
    borderRadius: 3,
  },
  textinput: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    paddingLeft: 8,
    width: 100,
    marginTop: 10,
    fontSize: 16,
  },
  people: {
    fontSize: 16,
    paddingVertical: 10,
    marginTop: 10,
    paddingLeft: 8,
  },
  slottext: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  btnrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
