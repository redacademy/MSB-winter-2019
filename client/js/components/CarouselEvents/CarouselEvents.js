import React, { Component } from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import moment from 'moment';
import PropTypes from 'prop-types';
import SaveEventButton from '../Buttons/SaveEventButton';
import styles from './styles';
import ShareButton from '../Buttons/ShareButton';
import { center } from '../../config/styles';

class CarouselEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      hideIcons: true
    };
  }

  getCurrentEvent = () => {
    const { events } = this.props;
    return events[this.state.currentIndex] || events[events.length - 1];
  };

  componentDidUpdate = prevProps => {
    const { events } = this.props;
    if (this.state.currentIndex >= events.length) {
      this.setState({ currentIndex: events.length - 1 });
    }
  };

  updateIndex = () => {
    if (this._carousel) {
      Store.updateIndex(this._carousel.currentIndex);
    }
  };

  toggleIcons = () => {
    this.setState({
      hideIcons: !this.state.hideIcons
    });
  };

  render() {
    const { events, navigation, user } = this.props;
    const currentEvent = this.getCurrentEvent();

    return (
      <View style={styles.container}>
        <View style={styles.carousel}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={events}
            loop={true}
            loopClonesPerSide={2}
            firstItem={0}
            onSnapToItem={index => {
              this.setState({ currentIndex: index });
            }}
            renderItem={({ item }) => {
              let eventImg;
              if (item.title === 'Live Music & Beers') {
                eventImg = require('../../assets/images/Events/livemusic.jpg');
              } else if (item.title === 'Brewery Tour') {
                eventImg = require('../../assets/images/Events/Oskar_Blues_Festival_1200.jpg');
              }

              return (
                <TouchableHighlight
                  underlayColor={'transparent'}
                  onPress={() => {
                    navigation.navigate('Event', { eventId: item.id });
                  }}
                >
                  <View style={styles.carouselContainer}>
                    <View style={styles.imgWrapper}>
                      <Image
                        style={styles.img}
                        source={
                          eventImg
                            ? eventImg
                            : require('../../assets/images/Events/craft-beer-background-5.jpg')
                        }
                      />
                    </View>
                    <View style={{ ...center }}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.subtitle}>{item.subtitle}</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              );
            }}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={250}
          />
        </View>

        <View style={styles.infoWrapper}>
          <View style={styles.border} />

          <View style={styles.dataWrapper}>
            <Text style={styles.eventData}>
              <Text style={styles.boldData}>Date: </Text>
              {moment(currentEvent.date).format('dddd, MMMM D, YYYY')}
            </Text>
            <Text style={styles.eventData}>
              <Text style={styles.boldData}>Time: </Text>
              {currentEvent.time}
            </Text>
            <Text style={styles.eventData}>
              <Text style={styles.boldData}>Location: </Text>
              {currentEvent.location}
            </Text>
          </View>

          <View style={styles.border} />
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.outerBtnContainer} />
          <ShareButton />
          <SaveEventButton
            style={styles.outerBtnContainer}
            user={user}
            event={currentEvent}
          />
        </View>
      </View>
    );
  }
}

CarouselEvents.propTypes = {
  events: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withNavigation(CarouselEvents);
