import React, { Fragment } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const thumbImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_aaFnRzeMzJpHEAHvc3LC52mLtOfBnDfrQF-_2Re-zXYAKoSgQ';

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
        <Text style={styles.dataContainer}>{username}</Text>
        <Text style={styles.dataContainer}>{name}</Text>
        <Text style={styles.dataContainer}>{phone}</Text>
        <Text style={styles.dataContainer}>{email}</Text>
        <Text style={styles.dataContainer}>{website}</Text>
      </View>
    </Fragment>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  dataContainer: {
    padding: 15,
    borderColor: 'lightgray', 
    borderWidth: 1,
  },
  thumbnailContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  thumbnailStyle: {
    height: 100,
    width: 100,
  },
});