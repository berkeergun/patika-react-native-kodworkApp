import {StyleSheet} from "react-native"

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f2f2f2",
    },
    page_buttons:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        margin:3,
        padding:3
    },
    button:{
        padding:5,
        borderRadius:50,
    },
    page_text:{
        paddingHorizontal:10,
        color:"#fff",
        fontSize:16,
        borderRadius:50,
        textAlign:"center",
        fontWeight:"bold",
        backgroundColor:"#0076b5",
}
    
})