import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Footer from '../../components/MOLEKUL/Footer';
import Header from '../../components/MOLEKUL/Header';
import Body from '../../components/ATOM/Body';

const Report = () => {
  const [quizzes, setQuizzes] = useState([
    {
      id: '1',
      name: 'QUIZ NAME',
      status: 'finished',
      totalPlayers: 23,
      finishedDate: 'April 11, 2025 (17.00)',
    },
    {
      id: '2',
      name: 'QUIZ NAME',
      status: 'finished',
      totalPlayers: 23,
      finishedDate: 'April 11, 2025 (17.00)',
    },
    {
      id: '3',
      name: 'QUIZ NAME',
      status: 'finished',
      totalPlayers: 23,
      finishedDate: 'April 11, 2025 (17.00)',
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);

  useEffect(() => {
    const filtered = quizzes.filter(quiz =>
      quiz.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredQuizzes(filtered);
  }, [searchText, quizzes]);

  const handleViewReport = quizId => {
    console.log('View Report:', quizId);
  };

  const handleViewProfilePress = () => {
    console.log('View Profile pressed (from footer)');
  };

  const handleChangePasswordPress = () => {
    console.log('Change Password pressed (from footer)');
  };

  return (
    <Body>
      <Header />
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Image
            source={require('../../assets/searchicon.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="search quiz..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <ScrollView style={styles.quizList}>
          {filteredQuizzes.map(quiz => (
            <View style={styles.quizCard} key={quiz.id}>
              <View style={styles.cardTop}>
                <Text style={styles.quizName}>{quiz.name}</Text>
              </View>

              <View style={styles.cardMiddle}>
                <View style={styles.statusAndButton}>
                  <View style={styles.statusIndicator}>
                    <Text style={styles.statusText}>Quiz is finished</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.viewReportButton}
                    onPress={() => handleViewReport(quiz.id)}>
                    <Text style={styles.viewReportButtonText}>VIEW REPORT</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.playersInfo}>
                  <Image
                    source={require('../../assets/playericon.png')}
                    style={styles.playerIcon}
                  />
                  <Text style={styles.playerCount}>
                    total players x{quiz.totalPlayers}
                  </Text>
                </View>
                <Text style={styles.finishedDate}>
                  quiz finished on {quiz.finishedDate}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <Footer
        onViewProfile={handleViewProfilePress}
        onChangePassword={handleChangePasswordPress}
      />
    </Body>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#888',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  quizList: {
    flex: 1,
  },
  quizCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  quizName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  moreOptions: {
    padding: 5,
  },
  moreOptionsIcon: {
    width: 20,
    height: 20,
    tintColor: '#888',
    resizeMode: 'contain',
  },
  cardMiddle: {
    marginBottom: 15,
  },
  statusAndButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusIndicator: {
    backgroundColor: '#1976D2',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  statusText: {
    color: '#FFF',
    fontSize: 12,
  },
  viewReportButton: {
    width: 125,
    height: 41,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewReportButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  playerIcon: {
    width: 14,
    height: 14,
    marginRight: 3,
    tintColor: '#757575',
  },
  playerCount: {
    fontSize: 12,
    color: '#757575',
  },
  finishedDate: {
    fontSize: 10,
    color: '#757575',
  },
});

export default Report;
