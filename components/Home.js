import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

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
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { users } = this.state;

    return(
      <FlatList
        data={users}
        renderItem={({item}) => this.contactItem(item)}
        keyExtractor={(item) => item.id.toString()}
      />
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
  }
});