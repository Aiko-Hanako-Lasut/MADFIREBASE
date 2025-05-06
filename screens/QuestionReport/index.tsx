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
import Body from '../../components/ATOM/Body';
import Footer, {FooterItem} from '../../components/MOLEKUL/Footer'; // Pastikan path ke Footer benar

interface QuestionStat {
  question: string;
  correctAnswer: string;
  successRate: string;
}

interface ImprovementArea {
  title: string;
  description: string;
  stats: QuestionStat[];
}

const QuestionStatisticsScreen = ({navigation}) => {
  const improvementAreas: ImprovementArea[] = [
    {
      stats: [
        {question: 'Question F', correctAnswer: '5/15', successRate: '10 %'},
        {question: 'Question B', correctAnswer: '10/15', successRate: '65 %'},
        {question: 'Question C', correctAnswer: '8/15', successRate: '30 %'},
      ],
    },
    {
      stats: [
        {question: 'Question A', correctAnswer: '15/15', successRate: '100 %'},
        {question: 'Question B', correctAnswer: '10/15', successRate: '65 %'},
        {question: 'Question C', correctAnswer: '8/15', successRate: '30 %'},
      ],
    },
    // Tambahkan area peningkatan lainnya sesuai kebutuhan
  ];

  const handleReportSummaryPress = () => {
    // Logika untuk Report Summary
    console.log('Report Summary Pressed');
    // Tambahkan logika navigasi atau aksi lainnya
  };

  const handleQuestionStatisticsPress = () => {
    // Logika untuk Question Statistics
    console.log('Question Statistics Pressed');
    // Tambahkan logika navigasi atau aksi lainnya
  };

  const footerItems: FooterItem[] = [
    {
      label: 'Report Summary',
      iconSource: require('../../assets/reportnote.png'), // Pastikan path ikon ini benar
      onPress: handleReportSummaryPress,
      accessibilityLabel: 'Report Summary Button',
    },
    {
      label: 'Question Statistics',
      iconSource: require('../../assets/statistics.png'), // Pastikan path ikon ini benar
      onPress: handleQuestionStatisticsPress,
      accessibilityLabel: 'Question Statistics Button',
    },
    // Anda bisa menambahkan item footer lainnya di sini
  ];

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Body>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image
              source={require('../../src/assets/backicon.png')} // Ganti dengan path ikon back Anda
              style={styles.backIcon}
              resizeMode="contain"
            />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.content}>
          {improvementAreas.map((area, index) => (
            <View key={index} style={styles.improvementArea}>
              {area.description && (
                <Text style={styles.areaDescription}>{area.description}</Text>
              )}
              <View style={styles.tableHeader}>
                <Image
                  source={require('../../src/assets/questionmark.png')} // Ganti dengan path ikon trending up Anda
                  style={styles.rateIcon}
                  resizeMode="contain"
                />
                <Text style={[styles.headerCell, {flex: 2}]}>Question</Text>
                <Image
                  source={require('../../src/assets/checklist.png')} // Ganti dengan path ikon checkmark Anda
                  style={styles.correctIcon}
                  resizeMode="contain"
                />
                <Text style={[styles.headerCell, {flex: 2}]}>
                  Correct Answer
                </Text>
                <Text style={[styles.headerCell, {flex: 2}]}>
                  %Success Rate
                </Text>
              </View>
              {area.stats.map((stat, statIndex) => (
                <View key={statIndex} style={styles.tableRow}>
                  <Text style={[styles.cell, {flex: 2}]}>{stat.question}</Text>
                  <Text style={[styles.cell, {flex: 1}]}>
                    {stat.correctAnswer}
                  </Text>
                  <Text style={[styles.cell, {flex: 1}]}>
                    {stat.successRate}
                  </Text>
                </View>
              ))}
              {index < improvementAreas.length - 1 && (
                <View style={styles.separator} />
              )}
            </View>
          ))}
        </ScrollView>
        {/* Menghapus bottomNavigation yang lama */}
      </Body>
      <Footer items={footerItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#F5F5F5',
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
  improvementArea: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  areaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  helpIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#000', // Jika ikon Anda perlu diwarnai
  },

  tableHeader: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingHorizontal: 5,
    alignItems: 'center', // Agar ikon dan teks sejajar
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 8,
    color: '#333',
    textAlign: 'left',
  },
  correctIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#000', // Jika ikon Anda perlu diwarnai
  },
  rateIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#000', // Jika ikon Anda perlu diwarnai
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center', // Agar ikon (jika ada nanti) dan teks sejajar
  },
  cell: {
    fontSize: 10,
    color: '#555',
    textAlign: 'left',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  // Hapus atau komentari styles bottomNavigation, bottomButton, bottomIcon, activeBottomButton, bottomButtonText
  // karena kita tidak lagi menggunakannya
});

export default QuestionStatisticsScreen;
