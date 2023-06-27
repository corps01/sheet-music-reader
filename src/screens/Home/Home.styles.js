import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  musicItemContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  musicTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  musicComposer: {
    fontSize: 16,
  },
  noDataText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
