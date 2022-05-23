import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 5,
    borderWidth: 2,
    padding: 2,
    flex: 1,
    borderColor: '#c1c1c1',
    borderRadius: 10,
  },
  job_name: {
    margin: 2,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  job_company_name: {
    fontSize: 14,
    margin: 4,
    color: '#000',
    
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location_text: {
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#0076b5',
    padding: 4,
    marginLeft: 2,
    borderRadius: 50,
  },
  job_level_text: {
    fontSize: 15,
    color: '#0076b5',
    fontWeight: 'bold',
    margin: 5,
  },
  remove_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  remove_group_buttons: {
    flex: 1,
    backgroundColor: '#0076b5',
    padding: 3,
    margin: 3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  remove_group_texts: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    margin: 5,
  },
});
