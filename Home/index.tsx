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

const Home = () => {
  const [quizzes, setQuizzes] = useState([
    {
      id: '1',
      name: 'Quiz 1',
      status: 'not_started',
      description: 'Quiz has not started yet',
    },
    {id: '2', name: 'Quiz 2', status: 'ongoing'},
    {
      id: '3',
      name: 'Quiz 3',
      status: 'finished',
      totalPlayers: 23,
      finishedDate: 'April 11, 2025 (17.00)',
    },
    {
      id: '4',
      name: 'React Basics',
      status: 'ongoing',
    },
    {
      id: '5',
      name: 'Final Exam',
      status: 'finished',
      totalPlayers: 12,
      finishedDate: 'April 10, 2025 (20.00)',
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

  const handleStartQuiz = quizId => {
    console.log('Start Quiz:', quizId);
    // Implementasi logika mulai kuis
  };

  const handleCloseQuiz = quizId => {
    console.log('Close Quiz:', quizId);
    // Implementasi logika tutup kuis
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
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Image
            source={require('../../assets/searchicon.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search quiz..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Daftar Kuis */}
        <ScrollView style={styles.quizList}>
          {filteredQuizzes.map(quiz => (
            <View style={styles.quizCard} key={quiz.id}>
              <Text style={styles.quizName}>{quiz.name}</Text>
              <TouchableOpacity style={styles.moreOptions}>
                <Text style={styles.moreOptionsIcon}>...</Text>
              </TouchableOpacity>

              {quiz.status === 'not_started' && (
                <>
                  <Text style={styles.quizDescription}>{quiz.description}</Text>
                  <View style={styles.quizButtons}>
                    <TouchableOpacity
                      style={styles.closeButton}
                      onPress={() => handleCloseQuiz(quiz.id)}>
                      <Text style={styles.closeButtonText}>Close Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.startButton}
                      onPress={() => handleStartQuiz(quiz.id)}>
                      <Text style={styles.startButtonText}>START QUIZ</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}

              {quiz.status === 'ongoing' && (
                <>
                  <View style={styles.statusContainer}>
                    <Text style={styles.statusText}>Quiz is ongoing</Text>
                  </View>
                  <View style={styles.quizButtons}>
                    <TouchableOpacity
                      style={styles.closeButtonRed}
                      onPress={() => handleCloseQuiz(quiz.id)}>
                      <Text style={styles.closeButtonText}>close quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.startButtonOutline}
                      onPress={() => handleStartQuiz(quiz.id)}>
                      <Text style={styles.startButtonOutlineText}>
                        Start Quiz
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}

              {quiz.status === 'finished' && (
                <>
                  <View style={styles.statusContainerFinished}>
                    <Text style={styles.statusText}>Quiz is finished</Text>
                  </View>
                  <View style={styles.playersInfo}>
                    <Image
                      source={require('../../assets/playericon.png')}
                      style={styles.playerIcon}
                    />
                    <Text style={styles.playerCount}>
                      {quiz.totalPlayers} players
                    </Text>
                  </View>
                  <Text style={styles.finishedDate}>
                    quiz finished on {quiz.finishedDate}
                  </Text>
                </>
              )}
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
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    position: 'relative',
  },
  quizName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  quizDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  quizButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  closeButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 5,
  },
  closeButtonText: {
    color: '#333',
    fontSize: 14,
  },
  startButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  startButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
  moreOptions: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  moreOptionsIcon: {
    fontSize: 20,
    color: '#888',
  },
  statusContainer: {
    backgroundColor: '#2196F3',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  statusContainerFinished: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#FFF',
    fontSize: 14,
  },
  closeButtonRed: {
    backgroundColor: '#F44336',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 5,
  },
  startButtonOutline: {
    borderColor: '#2196F3',
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 11,
    borderRadius: 5,
  },
  startButtonOutlineText: {
    color: '#2196F3',
    fontSize: 14,
  },
  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  playerIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
    tintColor: '#757575',
  },
  playerCount: {
    fontSize: 14,
    color: '#757575',
  },
  finishedDate: {
    fontSize: 12,
    color: '#757575',
  },
});

export default Home;
