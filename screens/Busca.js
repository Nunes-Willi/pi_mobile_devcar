import React from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

const cars = [
  {
    id: '1',
    name: 'Honda Civic',
    description: 'A reliable and efficient car.',
  },
  {
    id: '2',
    name: 'Toyota Corolla',
    description: 'A popular car with good resale value.',
  },
  {
    id: '3',
    name: 'Mazda 3',
    description: 'A sporty and fun-to-drive car.',
  },
];

export default function Search() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  const handleSearch = () => {
    const filteredResults = cars.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a car"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={results}
        renderItem={({ item }) => (
          <View style={styles.result}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
