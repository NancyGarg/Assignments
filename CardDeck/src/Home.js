import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showcard: false,
      carddata: null,
      cards: [
        {
          name: 'spade',
          color: 'black',
          image: require('./images/spade.png'),
        },
        {
          name: 'Diamond',
          color: 'red',
          image: require('./images/diamond.png'),
        },
        {
          name: 'Club',
          color: 'black',
          image: require('./images/club.png'),
        },
        {
          name: 'Heart',
          color: 'red',
          image: require('./images/heart.png'),
        },
      ],
    };
  }

  generateCard = () => {
    let num = Math.floor(Math.random() * (3 + 1));
    let data = this.state.cards[num];
    let cardnum = Math.floor(Math.random() * (13 - 1 + 1)) + 1;
    let showdata = {
      name: data.name,
      image: data.image,
      color: data.color,
      number: cardnum,
    };
    this.setState({
      carddata: showdata,
      showcard: true,
    });
  };
  render() {
    return (
      <View>
        <Text style={styles.heading}>Pick a card by clicking on it</Text>

        <TouchableOpacity
          onPress={() => this.generateCard()}
          style={styles.btncard}>
          <Image
            style={{width: 200, height: 300}}
            source={require('./images/cover.png')}
          />
        </TouchableOpacity>

        {this.state.showcard && (
          <View
            onPress={() => this.generateCard()}
            style={styles.cardcontainer}>
            <View style={{alignSelf: 'flex-start'}}>
              <Text style={styles.numbertext}>
                {this.state.carddata.number}
              </Text>
            </View>

            <View style={styles.iconcontainer}>
              {[...Array(this.state.carddata.number)].map((item, i) => (
                <Image
                  style={styles.imagestyle}
                  source={this.state.carddata.image}
                />
              ))}
            </View>

            <View style={{alignSelf: 'flex-end'}}>
              <Text style={styles.numbertext}>
                {this.state.carddata.number}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    alignSelf: 'center',
    paddingTop: 20,
    color: 'rgba(0,0,0,0.8)',
    fontWeight: '500',
  },
  numbertext: {
    fontWeight: '500',
    fontSize: 26,
  },
  iconcontainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 120,
    justifyContent: 'space-around',
  },
  imagestyle: {width: 20, height: 20, margin: 7},
  cardcontainer: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
    padding: 8,
    width: 185,
    alignSelf: 'center',
    height: 260,
    borderRadius: 8,
    elevation: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1.0,
  },
  btncard: {
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
    padding: 8,
    alignSelf: 'center',
  },
});
