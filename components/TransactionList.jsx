import React from 'react';
import { SafeAreaView, SectionList } from 'react-native';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { RefreshControl } from 'react-native';

const transactions = [
  { id: '1', name: 'Hellen Mwangi', phone: '254790***922', amount: '+ KSH. 500.00', time: '10:25 PM', type: 'credit', date: '2024-10-01' },
  { id: '2', name: 'M-Shwari', phone: '262626', amount: '- KSH. 1,500.00', time: '06:06 PM', type: 'debit', date: '2024-10-02' },
  { id: '3', name: 'Safaricom', phone: '254700***123', amount: '+ KSH. 200.00', time: '08:12 AM', type: 'credit', date: '2024-10-03' },
  { id: '4', name: 'John Doe', phone: '254711***456', amount: '- KSH. 300.00', time: '11:45 AM', type: 'debit', date: '2024-10-03' },
  { id: '5', name: 'Mpesa Shop', phone: '254722***789', amount: '+ KSH. 1,000.00', time: '03:30 PM', type: 'credit', date: '2024-10-04' },
  { id: '6', name: 'Rent Payment', phone: '254733***852', amount: '- KSH. 7,500.00', time: '02:00 PM', type: 'debit', date: '2024-10-05' },
  { id: '7', name: 'Electricity Bill', phone: '254744***963', amount: '- KSH. 2,200.00', time: '09:10 AM', type: 'debit', date: '2024-10-06' },
  { id: '8', name: 'Jane Wanjiku', phone: '254755***321', amount: '+ KSH. 4,500.00', time: '05:20 PM', type: 'credit', date: '2024-10-06' },
  { id: '9', name: 'KPLC', phone: '123456', amount: '- KSH. 1,000.00', time: '07:45 AM', type: 'debit', date: '2024-10-07' },
  { id: '10', name: 'Internet Subscription', phone: '254765***654', amount: '- KSH. 3,000.00', time: '08:50 AM', type: 'debit', date: '2024-10-07' },
  { id: '11', name: 'Jumia', phone: '254776***987', amount: '+ KSH. 2,000.00', time: '06:15 PM', type: 'credit', date: '2024-10-08' },
  { id: '12', name: 'Mpesa', phone: '254788***432', amount: '+ KSH. 600.00', time: '12:30 PM', type: 'credit', date: '2024-10-08' },
  { id: '13', name: 'Water Bill', phone: '254799***213', amount: '- KSH. 900.00', time: '11:00 AM', type: 'debit', date: '2024-10-09' },
  { id: '14', name: 'Groceries', phone: '254710***543', amount: '- KSH. 1,200.00', time: '04:55 PM', type: 'debit', date: '2024-10-09' },
  { id: '15', name: 'Mary Wanjiru', phone: '254723***345', amount: '+ KSH. 800.00', time: '09:40 AM', type: 'credit', date: '2024-10-09' },
  { id: '16', name: 'Netflix', phone: '123789', amount: '- KSH. 1,200.00', time: '07:00 PM', type: 'debit', date: '2024-10-10' },
  { id: '17', name: 'Kenya Airways', phone: '254798***654', amount: '+ KSH. 7,000.00', time: '03:10 PM', type: 'credit', date: '2024-10-10' },
  { id: '18', name: 'Salim Ali', phone: '254799***123', amount: '- KSH. 2,000.00', time: '02:45 PM', type: 'debit', date: '2024-10-11' },
  { id: '19', name: 'Petrol Station', phone: '254733***987', amount: '- KSH. 3,500.00', time: '09:30 AM', type: 'debit', date: '2024-10-11' },
  { id: '20', name: 'Ali Mwenda', phone: '254700***432', amount: '+ KSH. 1,500.00', time: '11:55 AM', type: 'credit', date: '2024-10-11' },
];

const groupTransactionsByDate = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    const { date } = transaction;

    const formattedDate = new Date(date).toLocaleDateString('en-UK', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    // Check if the date already exists in the accumulator
    const existingSection = acc.find(section => section.title === formattedDate);
    
    if (existingSection) {
      // If the date exists, push the transaction to the data array of that section
      existingSection.data.push(transaction);
    } else {
      // If the date does not exist, create a new section
      acc.push({
        title: formattedDate,
        data: [transaction]
      });
    }
    
    return acc;
  }, []);
};

// Grouped transactions
const transactionsByDate = groupTransactionsByDate(transactions);
console.log(transactionsByDate);

const TransactionList = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true); // Start refreshing
    console.log('Refreshing...'); // Check if it logs correctly
    // Simulate an API fetch or data update
    setTimeout(() => {
      setRefreshing(false); // Stop refreshing after 1 second
      console.log('Refreshed!');  // Check if it logs correctly
    }, 1000);
  }, []);
  

  const renderItem = ({ item }) => (
    <View style={styles.transactionContainer}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name.split(" ").map(first=>first.charAt(0).toUpperCase()).join("")}</Text>
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionName}>{item.name.toUpperCase()}</Text>
        <Text style={styles.transactionPhone}>{item.phone}</Text>
      </View>
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionName}>
          {item.amount}
        </Text>
        <Text style={styles.transactionTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
  <SectionList
      sections={transactionsByDate}  // Grouped transactions by date
      renderItem={renderItem}        // Function to render each transaction
      renderSectionHeader={({ section: { title } }) => ( // Rendering section headers (dates)
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
      keyExtractor={(item) => item.id}  // Unique key for each transaction
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }

/>
</SafeAreaView>
  )}

const styles = StyleSheet.create({
  transactionContainer: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 10,
    marginRight: 5
    // borderBottomWidth: 1,
    // borderColor: '#ddd',
  },
  sectionHeader:{
    fontSize: 12,
    fontWeight: 'bold',
    padding: 10,
    color:'grey',
    // backgroundColor: '#eee',
    marginVertical: 10,
    textTransform: 'uppercase',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f2faff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#3c86de',
    fontSize: 12,
    fontWeight: 'bold',
  },
  transactionDetails: {
    flex: 2,
    paddingLeft: 10,
  },
  transactionName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6b6b6b',
  },
  transactionPhone: {
    color: '#999',
  },
  transactionInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignItems:'flex-start',
    // flex: 1,
    // alignItems: 'flex-end',
  },
  
  transactionTime: {
    color: '#999',
    fontSize: 12,
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'flex-end',
  },

});

export default TransactionList;
