import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            })
        }

        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} imageUrl={itemData.item.imageUrl} onPress={pressHandler}/>
        )
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

function renderCategoryItem(itemData) {
    function pressHandler() {
        navigation.navigate('MealsOverview', {
            categoryId: itemData.item.id
        });
    }

    return (
        <CategoryGridTile 
            title={itemData.item.name} 
            color={itemData.item.color}
            imageUrl={itemData.item.imageUrl}
            onPress={pressHandler}
        />
    );
}



export default CategoriesScreen