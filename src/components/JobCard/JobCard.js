import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import {useDispatch } from "react-redux"
import { deleteFavorite } from "../../redux/favoritesSlice"
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./JobCard.style"



const JobCard = ({jobItem,onSelect,remove}) => {
  const dispatch = useDispatch()
  return (

    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>

        <Text style={styles.job_name}>{jobItem.name}</Text>
        <Text style={styles.job_company_name}>{jobItem.company.name}</Text>

        <View style={styles.inner_container}>

          <View>
            <Text style={styles.location_text}>
              <Icon name="ios-location-sharp" size={16} color="#fff" />
              {""}{jobItem.locations[0].name}
              </Text>
          </View>

          <View>
            <Text style={styles.job_level_text}>{jobItem.levels[0].name}</Text>
          </View>

        </View>
        
        {
          remove && (
          <View style={styles.remove_container}>

            <TouchableOpacity style={styles.remove_group_buttons}
            onPress={() => Linking.openURL(jobItem.refs.landing_page)}>
              <Icon name="md-arrow-redo-sharp" size={20} color="#fff" />
              <Text style={styles.remove_group_texts}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.remove_group_buttons}
            onPress={() => dispatch(deleteFavorite(jobItem.id))}>
              <Icon name="ios-trash" size={20} color="#fff" />
              <Text style={styles.remove_group_texts}>Remove</Text>
            </TouchableOpacity>
          </View> )
        }
      
      </View>
    </TouchableWithoutFeedback>

  )
}

export default JobCard