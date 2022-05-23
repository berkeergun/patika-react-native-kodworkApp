import { View, Text,FlatList,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./FavoriteJobs.style"
import { useSelector } from "react-redux"
import { favoriteSelectors } from '../../redux/favoritesSlice'
import JobCard from '../../components/JobCard'



const FavoriteJobs = ({navigation}) => {
  const favorites = useSelector(favoriteSelectors.selectAll);

  const handleJobSelect = (id) => {
    navigation.navigate('JobDetailPage', {id});
  };
  
  const renderJobs = ({item}) => (
      <JobCard jobItem={item} onSelect={() => handleJobSelect(item.id)} remove />
  )

  return (
    <>
      {
        favorites.length === 0 ? 
        <View style={styles.empty_container}>
          <Text style={styles.empty_text}>Folder Empty</Text>
        </View>
          : 
          <FlatList data={favorites} renderItem={renderJobs} />
      }
      
    </>
  )
}

export default FavoriteJobs