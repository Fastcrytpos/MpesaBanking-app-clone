import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'; 
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Profile and Greeting Section */}
        <View style={styles.leftSection}>
          <View style={styles.profileIcon}>
            <Text style={styles.profileText}>SM</Text>
          </View>
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Good evening,</Text>
            <Text style={styles.userName}>SAMSON <Text style={styles.waveEmoji}>👋</Text></Text>
          </View>
        </View>

        {/* Notification and QR icons */}
        <View style={styles.rightSection}>
          <TouchableOpacity>
            <Icon name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="history" size={24} color="black" style={styles.historyIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="qr-code-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <View style={styles.balanceAmountContainer}>
          <Text style={styles.balanceText}>Ksh. 293.00</Text>
          <TouchableOpacity>
            <Icon name="eye-off-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Icons */}
      <View style={styles.actionIconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="arrow-forward-circle-outline" size={30} color="green" />
          <Text style={styles.iconText}>SEND AND REQUEST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="cash-outline" size={30} color="blue" />
          <Text style={styles.iconText}>PAY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="wallet-outline" size={30} color="red" />
          <Text style={styles.iconText}>WITHDRAW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="phone-portrait-outline" size={30} color="cyan" />
          <Text style={styles.iconText}>AIRTIME</Text>
        </TouchableOpacity>
      </View>

      {/* MPESA Statements */}
      <View style={styles.statementsSection}>
        <View style={styles.statementsHeader}>
          <Text style={styles.sectionTitle}>M-PESA STATEMENTS</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statementItem}>
          <Text style={styles.statementTitle}>COOL OBUNGA</Text>
          <Text style={styles.statementAmount}>- Ksh. 1,000.00</Text>
        </View>
        <Text style={styles.statementDate}>30 Sep, 04:59 PM</Text>
      </View>

      {/* Financial Services Section */}
      <View style={styles.financialServicesSection}>
        <Text style={styles.sectionTitle}>Financial Services</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.serviceIcon}>
            <Image source={require('../assets/payicon.png')} style={styles.serviceImage} />
            <Text style={styles.serviceText}>Mali</Text>
          </View>
          <View style={styles.serviceIcon}>
            <Image source={require('../assets/payicon.png')} style={styles.serviceImage} />
            <Text style={styles.serviceText}>MPESA GO</Text>
          </View>
          <View style={styles.serviceIcon}>
            <Image source={require('../assets/payicon.png')} style={styles.serviceImage} />
            <Text style={styles.serviceText}>M-Shwari</Text>
          </View>
          <View style={styles.serviceIcon}>
            <Image source={require('../assets/payicon.png')} style={styles.serviceImage} />
            <Text style={styles.serviceText}>KCB M-PESA</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFC300',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  greetingText: {
    fontSize: 14,
    color: '#7d7d7d',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  waveEmoji: {
    fontSize: 16,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyIcon: {
    marginLeft: 10,
  },
  balanceContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    margin: 16,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#7d7d7d',
  },
  balanceAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  actionIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  iconButton: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  statementsSection: {
    padding: 16,
  },
  statementsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'green',
  },
  statementItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statementTitle: {
    fontSize: 14,
  },
  statementAmount: {
    fontSize: 14,
    color: 'red',
  },
  statementDate: {
    fontSize: 12,
    color: '#7d7d7d',
    marginTop: 5,
  },
  financialServicesSection: {
    padding: 16,
  },
  serviceIcon: {
    alignItems: 'center',
    marginRight: 20,
  },
  serviceImage: {
    width: 50,
    height: 50,
  },
  serviceText: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default Dashboard;
