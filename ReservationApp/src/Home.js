import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  Alert,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import HeadComp from './components/HeadComp';
import TableCard from './components/TableCard';
import ReserveModal from './components/ReserveModal';
import Banner from './components/Banner';
import {DUMMY_DATA} from './constants/data';
import Snackbar from 'react-native-snackbar';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserve: false,
      reservationModalData: null,
      data: [],
    };
  }
  componentDidMount() {
    this.setState({
      data: DUMMY_DATA,
    });
  }
  renderItem = (item) => {
    return (
      <TableCard
        key={item.index}
        data={item}
        handleClick={() => {
          this.setState({reserve: true, reservationModalData: item});
        }}
      />
    );
  };
  handleReserve = (details, slot, name) => {
    let datanew = [...this.state.data];

    datanew[details.index].reservations.map((item, i) => {
      if (item.slot == slot) {
        item.reserved = true;
        item.bookingBy = name;
      }
    });

    this.setState(
      {
        data: datanew,
        reserve: false,
      },
      () => {
        Snackbar.show({
          text: 'Your Table has been Reserved',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'green',
        });
      },
    );
  };
  handleFilter = (slot, size) => {
    let filtered = [];
    DUMMY_DATA.map((item, i) => {
      if (slot && size) {
        var exists = item.reservations.some((item2, i) => {
          return item2.slot == slot;
        });
        if (item.size == size && exists) {
          filtered.push(item);
        }
      } else if (!slot && !size) {
        filtered.push(item);
      } else if (!slot) {
        if (item.size == size) {
          filtered.push(item);
        }
      } else if (!size) {
        var exists = item.reservations.some((item2, i) => {
          return item2.slot == slot;
        });
        if (exists) {
          filtered.push(item);
        }
      } else {
        filtered.push(item);
      }
    });

    this.setState({
      data: filtered,
    });
  };
  render() {
    return (
      <SafeAreaView styles={styles.SafeAreaView}>
        <View style={styles.outercontainer}>
          {this.state.reserve && (
            <ReserveModal
              data={this.state.reservationModalData}
              isVisible={this.state.reserve}
              title={'Reserve'}
              description={'Apply g'}
              onCancel={() => {
                this.setState({
                  reserve: false,
                });
              }}
              onConfirm={(details, slot) => {
                this.handleReserve(details, slot);
              }}
            />
          )}
          <Banner />
          <HeadComp handleFilter={this.handleFilter} />
          <View style={{paddingBottom: 700}}>
            {this.state.data.length > 0 ? (
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.index.toString()}
              />
            ) : (
              <View>
                <Text style={styles.norecords}>No table available</Text>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
  outercontainer: {
    backgroundColor: 'white',
  },
  head: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 18,
  },
  norecords: {
    fontSize: 16,
    alignSelf: 'center',
    paddingVertical: 50,
    color: 'rgba(0,0,0,0.8)',
  },
});
