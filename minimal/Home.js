import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Home extends React.Component {
  render() {
    if (this.props.data.error) {
      return (
        <View style={styles.container}>
          <Text>{JSON.stringify(this.props.data.error)}</Text>
        </View>
      )
    }

    if (this.props.data.loading) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text>{this.props.data.hello}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

const HELLO_QUERY = gql`
  query HelloQuery {
    hello
  }
`

export default graphql(HELLO_QUERY, {
  options: {
    fetchPolicy: 'network-only',
  },
})(Home)
