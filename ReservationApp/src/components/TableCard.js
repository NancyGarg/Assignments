import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ReserveModal from './ReserveModal';
export default class TableCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserve: false,
    };
  }
  render() {
    var {data} = this.props;
    return (
      <TouchableOpacity
        style={styles.cardcontainer}
        onPress={this.props.handleClick}>
        <View style={styles.leftsection}>
          <Text style={styles.location}>Location of Table #{data.index}</Text>
          <Text style={styles.position}>{data.item.position}</Text>
        </View>
        <View style={styles.rightsection}>
          <Text style={styles.size}>{data.item.size}</Text>
          <Text style={styles.sizetext}>People</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  cardcontainer: {
    backgroundColor: 'white',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    shadowColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 1.0,
    flex: 1,
    elevation: 4,
  },
  leftsection: {
    justifyContent: 'center',
    paddingLeft: 10,
    paddingVertical: 10,
  },
  rightsection: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#388697',
    paddingVertical: 10,
    width: 80,
  },
  size: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  sizetext: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  location: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 14,
  },
  position: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 14,
  },
});
