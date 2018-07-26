import React, { Fragment, PureComponent } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, Text, Image } from 'react-native';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
const thumbImage = 'https://cdn0.iconfinder.com/data/icons/typicons-2/24/contacts-512.png';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get(API_URL).then(result => this.setState({ users: result.data }));
  }

  contactItem = (item) => {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => navigate('Detail', item)}
      >
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>{item.name}</Text>
          <View style={{ width: 25, height: 20 }}>
            <Text style={{ fontSize: 20, color: 'gray' }}>&gt;</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { users } = this.state;

    return(
      <Fragment>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: thumbImage}}
          />
        </View>
        <FlatList
          data={users}
          renderItem={({item}) => this.contactItem(item)}
          keyExtractor={(item) => item.id.toString()}
        />
      </Fragment>
    );
  }
  
}

export default Home;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 15,
    borderColor: 'lightgray', 
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  thumbnailContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8c00',
  },
  thumbnailStyle: {
    height: 100,
    width: 100,
  },
});