import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  titulo: {
    fontSize: RFPercentage(4.5),
    fontWeight: "bold",
    marginVertical: 20,
    width: "90%",
    height: 85,
    textAlign: "center",
    textAlignVertical: "center",
    color: "blue",
    backgroundColor: "#D5DBDB",
    borderColor: "#2E4053",
    borderRadius: 20,
    borderWidth: 2,
    shadowColor: "#2E4053",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center",
    lineHeight: 30,
    textAlignVertical: "center",
    
  },
  texto: {
    fontSize: RFPercentage(2.8),
    marginVertical: 15,
    width: "85%",
    textAlign: "center",
    color: "blue",
    backgroundColor: "#blue",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#2E4053",
    shadowColor: "#2E4053",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center",
    lineHeight: 30,
    textAlignVertical: "center",
    fontFamily: "Poppins-Regular",
  },
});

export default styles;