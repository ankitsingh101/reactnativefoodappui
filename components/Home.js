import * as React from 'react';
import {View, Image, StyleSheet, SafeAreaView, Text, FlatList, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import categoriesData  from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';


const Home = () => {  

  const renderCategoryItem = ({ item }) => {
    return (
      <View  style={[styles.categoriesItemWrapper,
        {
          backgroundColor: item.selected ? colors.primary : colors.white, 
          marginLeft: item.id == 1 ? 20 :0,
        }
        ]}>
        <Image  style={styles.categoriesItemImage} source={item.image} />
        <Text  style={styles.categoriesItemTitle}>{item.title}</Text>
        <View  style={[styles.categoriesSelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary, 
            }
        ]}>
          <Feather style={styles.categoriesSelectIcon} name="chevron-right" size={8} color={item.selected ? colors.black : colors.white}/>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}> 
     <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image source={require('../assets/images/profile.png')} style={styles.profileImage}/>
            <Feather name="menu" size={24} color={colors.textDark}/>
          </View>
        </SafeAreaView>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleSubtitle}>Food</Text>
          <Text style={styles.titleTitle}>Delivery</Text>
        </View>
        <View  style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View  style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>
        <View  style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>
        <View style={styles.popularWrapper}>
    
        <Text  style={styles.popularTitle}>Popular</Text>

          {
            popularData.map((item) => (
              <View style={[styles.popularCardWrapper,
                { 
                 marginTop: item.id == 1 ? 10 : 20
                }]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons name="crown" size={12} color={colors.primary}/>
                      <Text style={styles.popularTopText}>top of the week</Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                        <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                        <Text style={styles.popularTitlesWeight}>Weight {item.weight}</Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Feather name="plus" size={10} color={colors.textDark}/>
                    </View>
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons name="star" size={10} color={colors.textDark}/>
                      <Text style={styles.rating}> {item.rating}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.popularCardRight}>
                  <Image source={item.image} style={styles.popularCardImage} />
                </View>
              </View>
            ))
          }
        </View>
        </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },

  headerWrapper:{
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal:20,
    paddingTop:20,
    alignItems: 'center'
  },
  profileImage:{
    width:40,
    height:40,
    borderRadius:40
  },
  titleWrapper:{
    marginTop:30,
    paddingHorizontal:20
  },
  titleSubtitle:{
    fontFamily:'Montserrat',
    fontSize:16,
    color:colors.textDark
  },
  titleTitle:{
    fontFamily:'Montserrat',
    fontSize:32,
    color:colors.textDark,
    marginTop:5,
    fontWeight:'bold',
  },
  searchWrapper:{
    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal:20,
    marginTop:30
  },
  search:{
    flex:1,
    marginLeft:10,
    borderBottomColor:colors.textLight,
    borderBottomWidth:2,
  },
  searchText:{
    fontFamily:'Montserrat',
    fontSize:14,
    marginBottom:5,
    color: colors.textLight
  },
  categoriesWrapper:{
    marginTop:30,
  },
  categoriesTitle:{
    fontFamily:'Montserrat',
    fontWeight:'bold',
    fontSize:16,
    paddingHorizontal:20
  },
  categoriesListWrapper:{
    paddingTop:15,
    paddingBottom:20,
  },
  categoriesItemWrapper:{
    backgroundColor:'#F5CA89',
    marginRight:20,
    borderRadius:20,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.05,
    shadowRadius:10,
    elevation:2,
  },
  categoriesItemImage:{
    width:60,
    height:60,
    marginTop:24,
    alignSelf:'center',
    marginHorizontal:20,
  },
  categoriesItemTitle:{
    textAlign:'center',
    fontFamily:'Montserrat',
    fontWeight:400,
    fontSize:14,
    marginTop: 10
  },
  categoriesSelectWrapper:{
    alignSelf:'center',
    justifyContent: 'center',
    marginTop:20,
    width:26,
    height:26,
    borderRadius:26,
    marginBottom:20
  },
  categoriesSelectIcon:{
    alignSelf:'center', 
  },
  popularWrapper:{
    paddingHorizontal:20,
  },
  popularTitle:{
    fontSize:16,
    fontFamily:'Montserrat',
    fontWeight:'bold',
  },
  popularCardWrapper:{
    backgroundColor:colors.white,
    borderRadius:25,
    paddingTop:20,
    paddingLeft:20,
    flexDirection: 'row',
    overflow:'hidden',
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.05,
    shadowRadius:10,
    elevation:2,
  },
  popularTopWrapper:{
    flexDirection:'row',
  },
  popularTopText:{
    marginLeft:10,
    fontWeight:600,
    fontSize:14,
    marginBottom:10,
    fontFamily: 'Montserrat',
  },
  popularTitlesTitle:{
    margintop:20,
  },
  popularTitlesWeight:{
    fontWeight: 500,
    fontSize:14,
    color:colors.textLight,
    marginTop:5,
  },

  popularCardBottom:{
   flexDirection:'row',
   alignItems: 'center',
   marginTop:10,
   marginLeft:-20,
   justifyContent: 'space-between'
  },
  addPizzaButton:{
    backgroundColor:colors.primary,
    paddingHorizontal:40,
    paddingVertical:20,
    borderTopRightRadius:25,
    borderBottomLeftRadius:25
  },
  ratingWrapper:{
    flexDirection:'row',
    alignItems: 'center',
  },
  rating:{
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight:{
    marginTop:20
  },
  popularCardImage:{
    fontSize:colors.textDark,
    color: colors.textDark,
    fontFamily: 'Montserrat-SemiBold',
    width:174,
    height:85,
    marginLeft:45
  },

}); 
export default Home;
