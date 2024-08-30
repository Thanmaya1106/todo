import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { CircularProgress } from 'react-native-circular-progress';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FontAwesome name="check-square-o" size={36} color="#364ef0" style={styles.checkBoxIcon} />
        <Text style={styles.heading}>Dooit</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Task')}>
          <FontAwesome name="calendar-o" size={30} color="#595959" style={styles.calendarIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome !</Text>
        <Text style={styles.subtitle}>Here is your Today's task</Text>
      </View>

      <ScrollView 
        horizontal 
        pagingEnabled 
        showsHorizontalScrollIndicator={false} 
        style={styles.slidingWindow}>
        <View style={styles.slideContainer}>
          <View style={styles.chartContainer}>
            <CircularProgress
              size={80} // Minimized size
              width={10}
              fill={50}
              tintColor='hsl(208, 100%, 60%)'
              backgroundColor="#ffffff"
              arcSweepAngle={360}
              rotation={270}
              lineCap="round"
              renderInsideCircle={() => (
                <Text style={styles.percentageText}>50%</Text>
              )}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.slideHeading}>Today</Text>
            <Text style={styles.slideSubtitle}>12 tasks left to do, hurry up!</Text>
          </View>
        </View>
        <View style={styles.slideContainer}>
          <View style={styles.chartContainer}>
            <CircularProgress
              size={80} // Minimized size
              width={10}
              fill={80}
              tintColor='hsl(208, 100%, 60%)'
              backgroundColor="#ffffff"
              arcSweepAngle={360}
              rotation={270}
              lineCap="round"
              renderInsideCircle={() => (
                <Text style={styles.percentageText}>70%</Text>
              )}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.slideHeading}>Yesterday</Text>
            <Text style={styles.slideSubtitle}>2 tasks not completed</Text>
          </View>
        </View>
        <View style={styles.slideContainer}>
          <View style={styles.chartContainer}>
            <CircularProgress
              size={80} // Minimized size
              width={10}
              fill={60}
              tintColor='hsl(208, 100%, 60%)'
              backgroundColor="#e0e0e0"
              arcSweepAngle={360}
              rotation={270}
              lineCap="round"
              renderInsideCircle={() => (
                <Text style={styles.percentageText}>30%</Text>
              )}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.slideHeading}>Day before yesterday</Text>
            <Text style={styles.slideSubtitle}>3 tasks not completed</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <View style={styles.breakLine} />
        <Text style={styles.categoryHeading}>Category of To-Do</Text>
        
        <View style={styles.categoryContainer}>
          <View style={styles.squareContainer}>
          <TouchableOpacity>
          <Image source={require('../images/gra.png')} style={styles.squareImage} />
          </TouchableOpacity>
          <Text style={styles.squareText}>Education</Text>
          </View>
          <View style={styles.squareContainer}>
          <TouchableOpacity>
          <Image source={require('../images/holiday.png')} style={styles.squareImage} />
          </TouchableOpacity>
          <Text style={styles.squareText}>Holiday</Text>
          </View>
          <View style={styles.squareContainer}>
          <TouchableOpacity>
          <Image source={require('../images/busi.png')} style={styles.squareImage} />
          </TouchableOpacity>
          <Text style={styles.squareText}>Business</Text>
          </View>
          <View style={styles.squareContainer}>
          <TouchableOpacity>
          <Image source={require('../images/111.png')} style={styles.squareImage} />
          </TouchableOpacity>
          <Text style={styles.squareText}>Shopping</Text>
          </View>
        </View>

        <Text style={styles.bottomHeading}>Follow for your good health</Text>
        
        <View style={styles.imageGrid}>
          <View style={styles.imageContainer}>
          <Image source={require('../images/eat.png')} style={styles.image} />
          </View>
          <View style={styles.imageContainer}>
          <Image source={require('../images/water.png')} style={styles.image} />
          </View>
          <View style={styles.imageContainer}>
          <Image source={require('../images/yoga.png')} style={styles.image} />
          </View>
          <View style={styles.imageContainer}>
          <Image source={require('../images/1.png')} style={styles.image} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 20,
  },
  checkBoxIcon: {
    marginTop: 10,
    marginLeft: 5,
  },
  heading: {
    color: '#364ef0',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: -185,
    marginTop:10,
  },
  calendarIcon: {
    marginRight: 15,
  },
  welcomeContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom:-25,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    marginTop: -30,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  slidingWindow: {
    marginTop: 20,
  },
  slideContainer: {
    width: 330,
    height: 130, // Adjust height as needed
    backgroundColor: '#364ef0',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginLeft: 15,
    padding: 10,
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    flex: 2,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  slideHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  slideSubtitle: {
    fontSize: 14,
    color: '#bebdbd',
    marginTop: 5,
  },
  percentageText: {
    fontSize: 30, // Adjust as needed
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  bottomContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
    height: 450,
  },
  breakLine: {
    height: 2,
    backgroundColor: '#e0e0e0',
    width: '100%',
    marginVertical: 10,
    marginTop: -25,
  },
  categoryHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    marginLeft:-170,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  squareContainer: {
    width: 60, // Ensures four squares fit in one line
    aspectRatio: 1, // Makes the container square
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height:60,
  },
  squareImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop:25,
  },
  bottomHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
    marginLeft:-110,
    marginTop:15,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 330,
    height:120,
  },
  imageContainer: {
    width: '45%', // Adjust width for two columns
    height: 120,
    marginBottom: 10,
  },
  image: {
    width: 155,
    height: 110,
    borderRadius: 10,
  },
  squareText:{
    fontSize:12,
    marginTop:5,
    marginBottom:3,

  },
});
