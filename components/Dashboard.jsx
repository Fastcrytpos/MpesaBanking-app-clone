import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'; 
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Dashboard = () => {
  return (
    <View style={styles.headerContainer}>
     
      <View style={styles.leftSection}>
        
        <View style={{
          width: 50,
          height: 50,
          borderRadius: 99,
          borderWidth: 3,
          borderColor: 'blue', 
          backgroundColor: '#FFC300', 
          justifyContent: 'center',
          alignItems: 'center',
        }} >
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>SM</Text>
        </View>
        <View style={{
          position:'relative',
          top: 0,
          right: 20,
          width: 50,
          height: 50,
          padding: 20,
          borderRadius: 99,
          backgroundColor: 'blue', // User icon color
          justifyContent: 'center',
          alignItems: 'center',
          zIndex:-1
        }}>
          <Icon name="briefcase" size={25} color="white" />
        </View>
        <View style={{
          justifyContent:'top',
        }}>
          <Text style={styles.greetingText}>Good evening,</Text>
          <Text style={styles.userName}>SAMSON <Text style={styles.waveEmoji}>👋</Text></Text>
        </View>
      </View>

      {/* Icons (Bell and QR Code) */}
      <View style={styles.rightSection}>
        <TouchableOpacity>
          <Icon name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="history" size={24} color="black" style={{marginLeft: 10,}}/>        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="qr-code-outline" size={24} color="#000" style={styles.qrIcon} />
        </TouchableOpacity>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceContainer}>
          <Text style={{}}>Balance</Text>
          <View style={{display:'flex', flexDirection:'row'}}>
              <Text style={styles.balanceText}>Ksh. 293.00</Text>
            <TouchableOpacity>
              <Icon name="eye-off-outline" size={20} color="#000" />
            </TouchableOpacity>

          </View>
      </View>
      {/* icons section */}
      <View style={{
        display:'flex',
        flexDirection:'row',
        // justifyContent:'space-evenly',
        marginTop: 20,
      }}>

        <TouchableOpacity style={{width:'25%'}}>
          <View style={styles.iconcards}>
            
          <Image 
          source={require('../assets/snicon.png')} 
          style={styles.iconcardsimage}
        />
        <Text style={styles.icontags}>SEND AND REQUEST</Text>
        
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{width:'25%'}}>
          <View style={styles.iconcards}>
            
          <Image 
          source={require('../assets/payicon.png')} 
          style={styles.iconcardsimage}
        />
        <Text style={styles.icontags}>PAY</Text>
        
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{width:'25%'}}>
          <View style={styles.iconcards}>
            
          <Image 
          source={require('../assets/withdrawicon.png')} 
          style={styles.iconcardsimage}
        />
        <Text style={styles.icontags}>WITHDRAW</Text>
        
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{width:'25%'}}>
          <View style={styles.iconcards}>
            
          <Image 
          source={require('../assets/airtimeicon.png')} 
          style={styles.iconcardsimage}
        />
        <Text style={styles.icontags}>AIRTIME</Text>
        
          </View>
        </TouchableOpacity>

 

      </View>
      {/* statement section */}
       {/* M-PESA Statements */}
       <View style={styles.statementsSection}>
        <Text style={styles.sectionTitle}>M-PESA STATEMENTS</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>SEE ALL</Text>
        </TouchableOpacity>
        <View style={styles.statementItem}>
          <Text style={styles.statementTitle}>COOL OBUNGA</Text>
          <Text style={styles.statementAmount}>- Ksh. 1,000.00</Text>
        </View>
        <Text style={styles.statementDate}>30 Sep, 04:59 PM</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 50, // Adjust for proper placement on devices with notches
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF', // Background color
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#f0f0f0', // Placeholder background if no image
  },
  greetingText: {
    fontSize: 14,
    color: '#7d7d7d', // Gray for greeting text
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000', // Black for the username
  },
  waveEmoji: {
    fontSize: 16,
  },
  rightSection: {
    position: 'absolute',
    top: 60, 
    right: 16,
    flexDirection: 'row',
  },
  qrIcon: {
    marginLeft: 10,
  },
  balanceContainer: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#f5f5f5', 
    padding: 16,
    borderRadius: 10,
    shadowColor: 'black',
    // shadowOffset: 1,
    // shadowRadius: 10,
    // shadowOpacity: 0.3,
    // elevation: 5,
    elevation: 10,
    
  },
  balanceText: {
    paddingRight:10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000', 
  },
  icontags:{
    marginLeft: 10,
    fontSize: 10,
    // color: '#7d7d7d',
    // alignSelf:'center',
    textAlign:'center',
    marginTop:'5px',

  },
  iconcards:{
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '15%',
    
  },
  iconcardsimage:{
    paddingBottom: '10px',
    width:'50px',
    height:'50px',
    marginBottom: '10px',
    

  },

  // buttonicon{},
});

export default Dashboard;
