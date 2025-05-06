import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../components/MOLEKUL/Headersyeela/headerSignUpLogIn';
import {NavigationProp} from '@react-navigation/native';

interface ReportSummaryScreenProps {
  // props (parameter) untuk komponen
  navigation: NavigationProp<any>;
}

interface PlayerScore {
  name: string;
  score: string;
  percentage: string;
}

const ReportSummaryScreen: React.FC<ReportSummaryScreenProps> = ({
  navigation,
}) => {
  const totalPlayers = 23;
  const totalQuestions = 15;
  const quizDuration = '30 minutes';
  const startedEnded = '13.00 - 13.30 (WITA)'; // Anda bisa menambahkan informasi waktu mulai dan selesai

  const playersSummary: PlayerScore[] = [
    {name: 'Student A', score: '15/15', percentage: '100 %'},
    {name: 'Student B', score: '10/15', percentage: '65 %'},
    {name: 'Student C', score: '8/15', percentage: '30 %'},
    {name: 'Student D', score: '7/15', percentage: 'xyz %'},
    {name: 'Student E', score: '12/15', percentage: 'xyz %'},
    {name: 'Student F', score: '14/15', percentage: 'xyz %'},
    {name: 'Student G', score: '15/15', percentage: 'xyz %'},
    {name: 'Student H', score: '15/15', percentage: 'xyz %'},
    {name: 'Student I', score: '10/15', percentage: 'xyz %'},
    {name: 'Student J', score: '15/15', percentage: 'xyz %'},
    // Tambahkan data pemain lainnya sesuai kebutuhan
  ];

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            source={require('../../assets/backicon.png')} // Ganti dengan path ikon back Anda
            style={styles.backIcon}
            resizeMode="contain"
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.summaryCard}>
          <Text style={styles.cardTitle}>Quiz Summary</Text>
          <View style={styles.summaryItem}>
            <Image
              source={require('../../assets/playericon.png')} // Ganti dengan path ikon people Anda
              style={styles.summaryIcon}
              resizeMode="contain"
            />
            <Text style={styles.summaryLabel}>TOTAL PLAYERS</Text>
            <Text style={styles.summaryValue}>x {totalPlayers}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Image
              source={require('../../assets/questionmark.png')} // Ganti dengan path ikon help Anda
              style={styles.summaryIcon}
              resizeMode="contain"
            />
            <Text style={styles.summaryLabel}>TOTAL QUESTIONS</Text>
            <Text style={styles.summaryValue}>x {totalQuestions}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Image
              source={require('../../assets/timer.png')} // Ganti dengan path ikon timer Anda
              style={styles.summaryIcon}
              resizeMode="contain"
            />
            <Text style={styles.summaryLabel}>QUIZ DURATIONS</Text>
            <Text style={styles.summaryValue}>{quizDuration}</Text>
          </View>
          <View style={styles.summaryItem}>
            <Image
              source={require('../../assets/calendar.png')} // Ganti dengan path ikon calendar Anda
              style={styles.summaryIcon}
              resizeMode="contain"
            />
            <Text style={styles.summaryLabel}>STARTED - END</Text>
            <Text style={styles.summaryValue}>{startedEnded}</Text>
          </View>
        </View>

        <View style={styles.playersCard}>
          <View style={styles.tableHeader}>
            <Text style={[styles.headerCell, {flex: 2}]}>PLAYERS NAME</Text>
            <Text style={[styles.headerCell, {flex: 1}]}>SCORE</Text>
            <Text style={[styles.headerCell, {flex: 2}]}> %PERCENTAGE</Text>
          </View>
          {playersSummary.map((player, index) => (
            <View
              key={index}
              style={[
                styles.tableRow,
                index % 2 === 0 ? styles.evenRow : styles.oddRow,
              ]}>
              <Text style={[styles.cell, {flex: 2}]}>{`${index + 1}. ${
                player.name
              }`}</Text>
              <Text style={[styles.cell, {flex: 1}]}>{player.score}</Text>
              <Text style={[styles.cell, {flex: 2}]}>{player.percentage}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={[styles.bottomButton, styles.activeBottomButton]}>
          <Image
            source={require('../../assets/reportnote.png')} // Ganti dengan path ikon document Anda
            style={styles.bottomIcon}
            resizeMode="contain"
          />
          <Text style={styles.bottomButtonText}>Report Summary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('QuestionStatistics')}>
          <Image
            source={require('../../assets/statistics.png')} // Ganti dengan path ikon stats Anda
            style={styles.bottomIcon}
            resizeMode="contain"
          />
          <Text style={styles.bottomButtonText}>Questions Statistics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFDA63',
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
    tintColor: '#000', // Jika ikon Anda perlu diwarnai
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  summaryIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#000', // Jika ikon Anda perlu diwarnai
  },
  summaryLabel: {
    flex: 1,
    fontSize: 16,
  },
  summaryValue: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  playersCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#333',
    textAlign: 'left',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  oddRow: {
    backgroundColor: '#fff',
  },
  cell: {
    fontSize: 14,
    color: '#555',
    textAlign: 'left',
  },
  bottomNavigation: {
    backgroundColor: '#FFDA63',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  bottomButton: {
    flex: 1,
    alignItems: 'center',
  },
  bottomIcon: {
    width: 24,
    height: 24,
    tintColor: '#000', // Jika ikon Anda perlu diwarnai
  },
  activeBottomButton: {
    // Style untuk tombol aktif
  },
  bottomButtonText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default ReportSummaryScreen;
