import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'; 
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Home = ({navigation}) => {
  const handlepress = () => {navigation.navigate('TransactionList')}
  const handlepageinprogress = () => {navigation.navigate('Pageinprogress')}

  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSection}>
      <TouchableOpacity onPress={handlepageinprogress}>
        <View style={{
          width: 50,
          height: 50,
          borderRadius: 99,
          borderWidth: 2,
          borderColor: '#59a4ed', 
          backgroundColor: '#f4faff', 
          justifyContent: 'center',
          alignItems: 'center',
          
        }} >
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
            color: '#59a4ed'
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
          backgroundColor: '#6337EC', // User icon color
          justifyContent: 'center',
          alignItems: 'center',
          zIndex:-1
        }}>
          <Icon name="briefcase" size={26} color="white" />
        </View>
        </TouchableOpacity>
          
        <View style={{
          justifyContent:'top',
        }}>
          <Text style={styles.greetingText}>Good evening,</Text>
          <Text style={styles.userName}>SAMSON <Text style={styles.waveEmoji}>👋</Text></Text>
        </View>
      </View>

      {/* Icons (Bell and QR Code) */}
      <View style={styles.rightSection}>
      <TouchableOpacity onPress={handlepageinprogress}>

          <Icon name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlepageinprogress}>

          <MaterialIcons name="history" size={24} color="black" style={{marginLeft: 10,}}/>        </TouchableOpacity>
          <TouchableOpacity onPress={handlepageinprogress}>

          <Icon name="qr-code-outline" size={24} color="#000" style={styles.qrIcon} />
        </TouchableOpacity>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceContainer}>
          <Text style={{padding:10, fontSize:18, color:'#7d7d7d'}}>Balance</Text>
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

<TouchableOpacity onPress={handlepageinprogress} style={{width:'25%'}}>
          <View style={styles.iconcards}>
            
          <Image 
          source={require('../assets/snicon.png')} 
          style={styles.iconcardsimage}
        />
        <Text style={styles.icontags}>SEND AND REQUEST</Text>
        
          </View>
        </TouchableOpacity>

  <TouchableOpacity onPress={handlepageinprogress} style={{width:'25%'}}>
          <View style={styles.iconcards}>
            
          <Image 
          source={require('../assets/payicon.png')} 
          style={styles.iconcardsimage}
        />
        <Text style={styles.icontags}>PAY</Text>
        
          </View>
        </TouchableOpacity>

  <TouchableOpacity onPress={handlepageinprogress} style={{width:'25%'}}>
          <View style={styles.iconcards}>
            
          <Image 
          source={require('../assets/withdrawicon.png')} 
          style={styles.iconcardsimage}
        />
        <Text style={styles.icontags}>WITHDRAW</Text>
        
          </View>
        </TouchableOpacity>

  <TouchableOpacity onPress={handlepageinprogress} style={{width:'25%'}}>
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
        <View style={{display:'flex', flexDirection:'row',
                      justifyContent: 'space-between',

        }}>
          <Text style={styles.sectionTitle}>M-PESA STATEMENTS</Text>
          <TouchableOpacity onPress={handlepress}  >
            <Text style={styles.seeAll}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statementItem}>
          <View >
            <View style={{display:'flex', flexDirection: 'row'}}>
              <View style={{
              width: 30,
              height: 30,
              borderRadius: 99,
              borderWidth: 3,
              borderColor: 'blue', 
              backgroundColor: '#FFC300', 
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '10px',
            }} >
              <Text style={{
                fontSize: 10,
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>CO</Text>
            </View>
            <View>
            <Text style={styles.statementTitle}>COOL OBUNGA</Text>
            <Text style={styles.statementDate}>590016</Text>
            </View>
            </View>
            

          </View>
          <View style={{alignItems:'flex-end'}}>
            <Text style={styles.statementAmount}>- Ksh. 1,000.00</Text>
            <Text style={styles.statementDate}>30 Sep, 04:59 PM</Text>
          </View>
        </View>
      </View>



      {/* TRIPS CARD */}
              <View>
              <Image 
          source={require('../assets/trips.jpg')} 
          style={{

            width:'350px',
            height: '200px',
            alignSelf: 'center',
            marginVertical:'10px',
            borderRadius:'10px',
            resizeMode: 'stretch', // Keep aspect ratio while maintaining image size
          }}
        />
        </View>


        {/* financial services */}
        <View style={styles.statementsSection}>
          <View style={{
        display:'flex',
        flexDirection:'row',
        // justifyContent:'space-evenly',
        }}>           <TouchableOpacity style={{width:'25%'}}>
              <View style={styles.iconcards}>
                
              <Image 
              source={require('../assets/maliicon.png')} 
              style={{
                width:'100%',
                height: '50px',
                resizeMode: 'contain'
          }}

            />
            <Text style={styles.icontags}>Mali</Text>
            
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'25%'}}>
              <View style={styles.iconcards}>
                
              <Image 
              source={require('../assets/mpesa-go.png')} 
              style={{
                    width:'50px',
                    height: '50px',
                    resizeMode: 'contain'
              }}

            />
            <Text style={styles.icontags}>MPESA-Go</Text>
            
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'25%'}}>
              <View style={styles.iconcards}>
                
              <Image 
              source={require('../assets/mshwari.jpg')} 
              style={styles.iconcardsimage}
            />
            <Text style={styles.icontags}>M-Shwari</Text>
            
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'25%'}}>
              <View style={styles.iconcards}>
                
              <Image 
              source={require('../assets/kcblogo.png')} 
              style={styles.iconcardsimage}
            />
            <Text style={styles.icontags}>KCB M-PESA</Text>
            
              </View>
            </TouchableOpacity>
        </View>
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
    fontSize: 18,
    color: '#7d7d7d', // Gray for greeting text
    paddingBottom: 10,
    
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
    shadowColor: '#000', // Optional: shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10, // Shadow for Android
  
    
  },
  balanceText: {
    paddingRight:10,
    fontSize: 26,
    // fontWeight: 'bold',
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
   statementsSection: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff', // Set the background color for the section
    borderRadius: 10,
    shadowColor: '#000', // Optional: shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Shadow for Android
  },
  sectionTitle: {
    // fontSize: 16,
    // fontWeight: 'bold',
    // color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#65c18c',
    fontWeight: '800',
    // textAlign: 'right', // Align the SEE ALL text to the right
    // marginTop: 5,
  },
  statementItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#eee',
  },
  statementTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  statementDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  statementAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e53935', // Red for negative amounts
    textAlign: 'right',
  }

  // buttonicon{},
});

export default Home;
