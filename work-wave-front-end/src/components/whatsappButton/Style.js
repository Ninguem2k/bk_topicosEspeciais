import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        width: "93%",
        justifyContent: "center",
        zIndex: 99,
        backgroundColor: "#d3d3d3",
        marginBottom: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    icon: {
        marginLeft: 5,
        marginRight: 5,
    },

    button: {
        backgroundColor: "blue",
        paddingVertical: 6,
        paddingHorizontal: 20,
        top: 24,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;