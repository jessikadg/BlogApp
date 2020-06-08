import React, { useContext, useEffect } from 'react';
import {View, Button, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { Context } from '../Screens/context/BlogContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost, getBlogPosts} = useContext(Context);
    
    useEffect(()=> {
        getBlogPosts();

        navigation.addListener('didFocus', () => {
            getBlogPosts();
        })
    },[]);

    return(
        <View>
            
            <Button
                title="Create Post"
                onPress={()=> navigation.navigate('Create')}
            />
            <FlatList 
                data={state}
                keyExtractor={blogPost=> blogPost.title }
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Show', { id: item.id })}
                            >
                            <View style={styles.row} >
                               <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <FontAwesome5 style={styles.icon} name="trash-alt" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        
                    )
                }}
            />
        </View>

    )
}

//error in creating icon on header
 IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () =>
      {
                return <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Feather name="plus" size={30} />
                </TouchableOpacity>;
            }
  }
 }



const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'silver',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 22
    }
});

export default IndexScreen;
