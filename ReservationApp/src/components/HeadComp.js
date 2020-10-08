import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FilterModal from './FilterModal';

const FILTER_ICON = require('../Images/filter.png');
export default class HeadComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.filter && (
          <FilterModal
            isVisible={this.state.filter}
            title={'Apply'}
            description={'Apply g'}
            onCancel={() => {
              this.setState({
                filter: false,
              });
            }}
            onConfirm={(slot, size) => {
              this.setState(
                {
                  filter: false,
                },
                () => {
                  this.props.handleFilter(slot, size);
                },
              );
            }}
          />
        )}
        <Text style={styles.head}>Available Tables are:</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              filter: true,
            });
          }}>
          <Image style={styles.filterimage} source={FILTER_ICON} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  head: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 18,
  },
  filterimage: {
    width: 30,
    height: 30,
  },
});
