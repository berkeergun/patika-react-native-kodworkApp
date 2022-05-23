import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from "./Jobs.style"
import Config from "react-native-config"
import useFetch from "../../hooks/useFetch"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import JobCard from "../../components/JobCard"
import Icon from 'react-native-vector-icons/Ionicons';

const Jobs = ({navigation}) => {
  const [page,setPage] = useState(0)

  const {error, data, loading} = useFetch(Config.API_URL+`?page=${page}`);

  const handleJobSelect = (id) => {
    navigation.navigate('JobDetailPage', {id});
  };

  const renderJobs = ({item}) => (
    <JobCard jobItem={item} onSelect={() => handleJobSelect(item.id)} />
  )

  const nextPage = () => {
    setPage(prev => 
      {if (prev >= 50) {
          return (prev = 0);
        } else {
          return prev + 1;
        }
      })

  }
  const prevPage = () => {
    setPage(prev => {
      if (prev <= 0) {
        return (prev = 50);
      } else {
        return prev - 1;
      }
    })
  }

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      
      <FlatList data={data.results} renderItem={renderJobs} />

      <View style={styles.page_buttons}>

        <TouchableOpacity
        style={styles.button}
        onPress={prevPage}>
              <Icon name="caret-back-circle-sharp" size={24} color="#0076b5" />
          </TouchableOpacity>

          <Text style={styles.page_text}>{page+1}</Text>

          <TouchableOpacity 
          style={styles.button}
          onPress={nextPage}>
              <Icon name="caret-forward-circle-sharp" size={24} color="#0076b5" />
          </TouchableOpacity>

        
      </View>
      

    </View>
  )
}

export default Jobs