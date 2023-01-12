import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_197_112} />
      <View style={styles.View_197_113}>
        <View style={styles.View_197_114}>
          <Text style={styles.Text_197_114}>Secondary Action</Text>
        </View>
        <View style={styles.View_197_115}>
          <View style={styles.View_I197_115_144_2127}>
            <Text style={styles.Text_I197_115_144_2127}>Click Me</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_197_116}>
        <View style={styles.View_197_117}>
          <Text style={styles.Text_197_117}>Drawer Header</Text>
        </View>
        <View style={styles.View_197_118}>
          <Text style={styles.Text_197_118}>
            Consequat velit qui adipisicing sunt do reprehenderit ad laborum
            tempor ullamco exercitation.
          </Text>
        </View>
      </View>
      <View style={styles.View_197_119}>
        <View style={styles.View_197_120} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_197_112: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_197_113: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("58%")
  },
  View_197_114: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_197_114: {
    color: "rgba(93, 176, 117, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_115: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(93, 176, 117, 1)"
  },
  View_I197_115_144_2127: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I197_115_144_2127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_116: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("18%")
  },
  View_197_117: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_197_117: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_118: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_197_118: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_119: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("5%")
  },
  View_197_120: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(232, 232, 232, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
