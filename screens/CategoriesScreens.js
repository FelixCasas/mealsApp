import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData) {
        console.log(itemData)
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            })
        }

        return (
            <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color} 
            imageUrl={itemData.item.imageUrl} 
            onPress={pressHandler}/>
        )
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
            style={{backgroundColor:'#F2F2F2'}}
        />
    )
}




export default CategoriesScreen