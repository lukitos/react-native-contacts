import React, { Fragment } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const thumbImage = 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Elliot_Grieveson.png';

const Detail = (props) => {
  const { name, username, phone, email, website } = props.navigation.state.params;

  return (
    <Fragment>
      <View style={styles.thumbnailContainer}>
        <Image
          style={styles.thumbnailStyle}
          source={{uri: thumbImage}}
        />
      </View>
      <View>
        <Text style={styles.titleStyle}>{name}</Text>
        <Text style={styles.dataStyle}>{phone}</Text>
        <Text style={styles.dataStyle}>{email}</Text>
        <Text style={styles.dataStyle}>Username: {username}</Text>
        <Text style={styles.dataStyle}>Website: {website}</Text>
      </View>
    </Fragment>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  dataStyle: {
    padding: 15,
    borderColor: 'lightgray', 
    borderWidth: 1,
  },
  titleStyle: {
    padding: 15,
    textAlign: 'center',
    color: '#696969',
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: 'lightgray', 
    borderWidth: 1,
    backgroundColor: 'white',
  },
  thumbnailContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9ACD32',
  },
  thumbnailStyle: {
    height: 80,
    width: 80,
  },
});