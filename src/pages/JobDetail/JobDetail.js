import { View, Text, ScrollView,Dimensions, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import styles from "./JobDetail.style"
import useFetch from '../../hooks/useFetch'
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import RenderHtml from 'react-native-render-html';
import Config from "react-native-config"
import { useDispatch,useSelector } from "react-redux";
import { addFavorite , favoriteSelectors ,deleteFavorite } from "../../redux/favoritesSlice"
import Icon from 'react-native-vector-icons/Ionicons';

const JobDetail = ({route}) => {
  const favorites = useSelector(favoriteSelectors.selectAll);
  const dispatch = useDispatch();
  const {id} = route.params

  const {error, data, loading} = useFetch(Config.API_URL+`/${id}`);

  const source = {
    html: `${data.contents}`,
  };

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }
          //#ef5350

  const item = favorites.map(item => item.id)

  return (
    <View style={styles.container}>

      <View style={styles.header_container}>
        <Text style={styles.job_title}>{data.name}</Text>
        <Text><Text style={styles.job_location_title}>Locations:</Text> <Text style={styles.job_location}>{data.locations[0].name}</Text></Text>
        <Text><Text style={styles.job_level_title}>Job Level:</Text> <Text style={styles.job_level}>{data.levels[0].name}</Text></Text>
      </View>

      <ScrollView style={styles.content_container}>
        <RenderHtml
            baseStyle={{marginHorizontal:10,color:"#000",fontSize:14}}
            contentWidth={Dimensions.get('window').width}
            source={source}
          />
      </ScrollView>

      <View style={styles.button_group}>

        <TouchableOpacity style={styles.button}
        onPress={() => Linking.openURL(data.refs.landing_page)} 
        >
          <Icon name="md-arrow-redo-sharp" size={20} color="#fff" />
          <Text style={{color:"#fff",fontSize:16}}> Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={item.includes(data.id) ? styles.button_remove : styles.button}
        onPress={item.includes(data.id) ? () => dispatch(deleteFavorite(data.id)) : () => dispatch(addFavorite(data))}
        >
          {
            item.includes(data.id) ? (<><Icon name="ios-trash" size={20} color="#0076b5" /></>)  : (<><Icon name="star" size={16} color="#fff" /></>)
          }
          <Text style={item.includes(data.id) ? styles.remove_text : styles.favourite_text}>{item.includes(data.id) ? " Remove" : " Favorite"}</Text>
        </TouchableOpacity >
        
      </View>

    </View>
  )
}

export default JobDetail