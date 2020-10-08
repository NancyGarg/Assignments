import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import Snackbar from 'react-native-snackbar';
export default class ReserveModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedslot: '',
      name: '',
    };
  }
  render() {
    var {isVisible, onCancel, onConfirm, data} = this.props;

    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => {
          if (onCancel) onCancel();
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.headcontainer}>
            <Text
              style={
                styles.reservetext
              }>{`Reserve this table for ${data.item.size} people`}</Text>
          </View>

          <View style={styles.modalContent}>
            <View style={styles.detailcontainer}>
              <Text style={styles.selectslot}>Enter Name</Text>
              <TextInput
                style={styles.textinput}
                value={this.state.name}
                onChangeText={(name) => {
                  this.setState({name});
                }}
              />
            </View>
            <View style={styles.detailcontainer}>
              <Text style={styles.selectslot}>Select a slot</Text>
              <View style={styles.slotcontainer}>
                {data.item.reservations.map((item, i) => (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        selectedslot: item.slot,
                      });
                    }}
                    disabled={item.reserved}
                    style={[
                      styles.slotchip,
                      {
                        backgroundColor: item.reserved
                          ? 'gray'
                          : item.slot == this.state.selectedslot
                          ? '#FA8334'
                          : 'white',

                        borderColor: item.reserved
                          ? 'gray'
                          : item.slot == this.state.selectedslot
                          ? '#FA8334'
                          : '#FA8334',
                        borderWidth: 1,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.slottext,
                        {
                          color: item.reserved
                            ? 'white'
                            : item.slot == this.state.selectedslot
                            ? 'white'
                            : '#FA8334',
                        },
                      ]}>
                      {item.slot}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity
              style={[styles.deleteRowItem]}
              onPress={() => {
                if (onConfirm) {
                  if (this.state.name == '') {
                    Snackbar.show({
                      text: 'Please enter your Name',
                      duration: Snackbar.LENGTH_SHORT,
                      backgroundColor: 'red',
                    });
                  } else if (this.state.selectedslot == '') {
                    Snackbar.show({
                      text: 'Please select a slot',
                      duration: Snackbar.LENGTH_SHORT,
                      backgroundColor: 'red',
                    });
                  } else {
                    onConfirm(data, this.state.selectedslot, this.state.name);
                  }
                }
              }}>
              <Text style={styles.deleteText}>{'Reserve'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    // alignItems: 'center',
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
    width: '100%',
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
    marginTop: 10,
  },
  slottext: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
