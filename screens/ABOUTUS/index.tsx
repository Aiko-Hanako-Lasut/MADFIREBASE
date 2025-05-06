/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/MOLEKUL/CustomHeader';
import Body from '../../components/ATOM/Body';

// Make sure these paths point to the real image files in your repo!
const teamMembers = [
  {name: 'Aiko', image: require('../../src/assets/AIKO.jpg')},
  {name: 'Syeela', image: require('../../src/assets/SYEELA.jpg')},
  {name: 'Aulia', image: require('../../src/assets/AULIA.jpg')},
];

const About: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body>
        <ScrollView contentContainerStyle={styles.body}>
          <Text style={styles.title}>ABOUT US</Text>

          <Text style={styles.subheading}>WHAT IS CALICO?</Text>
          <Text style={styles.paragraph}>
            CALICO adalah aplikasi kuis interaktif untuk pelajar dan guru. Guru
            dapat membuat kuis dan memantau hasil siswa, siswa dapat mengikuti
            kuis dengan kode yang diberikan. Aplikasi ini khusus untuk
            Universitas Klabat (UNKLAB).
          </Text>

          <Text style={styles.subheading}>OUR TEAM</Text>
          <View style={styles.teamContainer}>
            {teamMembers.map((member, index) => (
              <View key={index} style={styles.member}>
                <Image source={member.image} style={styles.memberImage} />
                <Text style={styles.memberName}>{member.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </Body>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {flex: 1},
  body: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  member: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  memberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  memberName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
  },
});
