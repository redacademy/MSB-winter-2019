import { StyleSheet, Dimensions } from 'react-native';
import {
  center,
  colors,
  fonts,
  h1,
  hr,
  margin,
  row,
  subtitle1
} from '../../config/styles';

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    height: Dimensions.get('window').height * 0.6,
    padding: 12,
    paddingBottom: 5
  },
  slide: {
    ...center
  },

  /**
   * Carousel
   **/
  imgWrapper: {
    shadowOffset: { width: 1, height: 3.5 },
    shadowColor: colors.neutralDark,
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: '#fff'
  },
  img: {
    width: 200,
    maxWidth: 215,
    maxHeight: 215
  },
  title: { ...h1, ...center, paddingTop: 8, paddingBottom: 1 },
  subtitle: {
    color: colors.neutralDark,
    fontSize: fonts.sm
  },

  /**
   * Info
   **/
  dataWrapper: {
    width: Dimensions.get('window').width * 0.8,
    ...row,
    ...center,
    justifyContent: 'space-evenly',
    paddingLeft: 15,
    paddingRight: 15
  },
  infoSpacing: {
    alignItems: 'flex-start'
  },
  beerData: {
    ...subtitle1,
    fontSize: 14,
    fontFamily: fonts.primary,
    paddingTop: 2,
    paddingBottom: 2
  },
  boldData: {
    ...subtitle1
  },
  border: {
    ...hr,
    marginVertical: margin.xxs,
    width: '100%',
    maxWidth: 250
  }
});

export default styles;
